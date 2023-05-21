import { AuthorizationContext, AuthorizationDecision, AuthorizationMetadata } from '@loopback/authorization';
export declare function basicAuthorization(authorizationCtx: AuthorizationContext, metadata: AuthorizationMetadata): Promise<AuthorizationDecision>;
