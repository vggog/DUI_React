import { AuthorizationStatus } from '../constants';

export type AuthorizationStatusType = typeof AuthorizationStatus[keyof typeof AuthorizationStatus];
