"use strict";
// import {RentalbikeApplication} from './application';
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrate = void 0;
const tslib_1 = require("tslib");
// export async function migrate(args: string[]) {
//   const existingSchema = args.includes('--rebuild') ? 'drop' : 'alter';
//   console.log('Migrating schemas (%s existing schema)', existingSchema);
//   const app = new RentalbikeApplication();
//   await app.boot();
//   await app.migrateSchema({existingSchema});
//   // Connectors usually keep a pool of opened connections,
//   // this keeps the process running even after all work is done.
//   // We need to exit explicitly.
//   process.exit(0);
// }
// migrate(process.argv).catch(err => {
//   console.error('Cannot migrate database schema', err);
//   process.exit(1);
// });
const application_1 = require("./application");
const repositories_1 = require("./repositories");
const csv_parser_1 = tslib_1.__importDefault(require("csv-parser"));
const fs_1 = tslib_1.__importDefault(require("fs"));
const path_1 = tslib_1.__importDefault(require("path"));
const user_credentials_repository_1 = require("./repositories/user-credentials.repository");
async function migrate(args) {
    const existingSchema = args.includes('rebuild') ? 'drop' : 'alter';
    console.log('Migrating schemas (%s existing schema)', existingSchema);
    const app = new application_1.RentalbikeApplication();
    await app.boot();
    await app.migrateSchema({ existingSchema });
    const userRepository = await app.getRepository(repositories_1.UserRepository);
    const roleRepository = await app.getRepository(repositories_1.RoleRepository);
    const credenttialsRepository = await app.getRepository(user_credentials_repository_1.UserCredentialsRepository);
    const bikeRepository = await app.getRepository(repositories_1.BikeRepository);
    // const bikeRepository = await app.getRepository(BikeRepository);
    // const bikeRepository = await app.getRepository(BikeRepository);
    // Read and insert data from CSV files
    await insertDataFromCSV('../src/backup/users.csv', userRepository);
    await insertDataFromCSV('../src/backup/roles.csv', roleRepository);
    await insertDataFromCSV('../src/backup/credenttials.csv', credenttialsRepository);
    await insertDataFromCSV('../src/backup/bikes.csv', bikeRepository);
    // Connectors usually keep a pool of opened connections,
    // this keeps the process running even after all work is done.
    // We need to exit explicitly.
    process.exit(0);
}
exports.migrate = migrate;
async function insertDataFromCSV(filePath, repository) {
    const data = await parseCSV(filePath);
    await repository.createAll(data);
}
function parseCSV(filePath) {
    const results = [];
    const newfilePath = path_1.default.resolve(__dirname, filePath);
    console.log(newfilePath);
    return new Promise((resolve, reject) => {
        fs_1.default.createReadStream(newfilePath)
            .pipe((0, csv_parser_1.default)())
            .on('data', data => results.push(data))
            .on('end', () => resolve(results))
            .on('error', reject);
    });
}
migrate(process.argv).catch(err => {
    console.error('Cannot migrate database schema', err);
    process.exit(1);
});
//# sourceMappingURL=migrate.js.map