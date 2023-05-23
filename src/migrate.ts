import {RentalbikeApplication} from './application';
import {UserRepository, BikeRepository} from './repositories';
import csvParser from 'csv-parser';
import fs from 'fs';
import {DefaultCrudRepository} from '@loopback/repository';
import path from 'path';
import {UserCredentialsRepository} from './repositories/user-credentials.repository';

export async function migrate(args: string[]) {
  const existingSchema = args.includes('rebuild') ? 'drop' : 'alter';
  console.log('Migrating schemas (%s existing schema)', existingSchema);

  const app = new RentalbikeApplication();
  await app.boot();
  await app.migrateSchema({existingSchema});

  const userRepository = await app.getRepository(UserRepository);
  const credenttialsRepository = await app.getRepository(
    UserCredentialsRepository,
  );
  const bikeRepository = await app.getRepository(BikeRepository);

  // Read and insert data from CSV files
  await insertDataFromCSV('../src/backup/users.csv', userRepository);
  await insertDataFromCSV(
    '../src/backup/credenttials.csv',
    credenttialsRepository,
  );
  await insertDataFromCSV('../src/backup/bikes.csv', bikeRepository);

  // Connectors usually keep a pool of opened connections,
  // this keeps the process running even after all work is done.
  // We need to exit explicitly.
  process.exit(0);
}

async function insertDataFromCSV(
  filePath: string,
  repository: DefaultCrudRepository<any, any>,
): Promise<void> {
  const data: any[] = await parseCSV(filePath);
  await repository.createAll(data);
}

function parseCSV(filePath: string): Promise<any[]> {
  const results: any[] = [];

  const newfilePath = path.resolve(__dirname, filePath);
  console.log(newfilePath);
  return new Promise((resolve, reject) => {
    fs.createReadStream(newfilePath)
      .pipe(csvParser())
      .on('data', data => results.push(data))
      .on('end', () => resolve(results))
      .on('error', reject);
  });
}

migrate(process.argv).catch(err => {
  console.error('Cannot migrate database schema', err);
  process.exit(1);
});
