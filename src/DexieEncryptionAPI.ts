// import { DexieCloudOptions } from './DexieCloudOptions';
// import { DBRealmRole, DexieCloudSchema } from 'dexie-cloud-common';
// import { UserLogin } from './db/entities/UserLogin';
// import { PersistedSyncState } from './db/entities/PersistedSyncState';
// import { SyncState } from './types/SyncState';
// import { DXCUserInteraction } from './types/DXCUserInteraction';
// import { DXCWebSocketStatus } from './DXCWebSocketStatus';
// import { PermissionChecker } from './PermissionChecker';
// import { DexieCloudSyncOptions } from "./DexieCloudSyncOptions";
// import { Invite } from './Invite';
// import { BehaviorSubject, Observable } from 'rxjs';

import Dexie from "dexie";
import { CryptoSettings, CryptoSettings2 } from "./types";

/** The API of db.cloud, where `db` is an instance of Dexie with dexie-cloud-addon active.
 */

export interface LoginHints {
  email?: string;
  userId?: string;
  grant_type?: 'demo' | 'otp';
  otpId?: string;
  otp?: string;
}

export interface DexieEncryptionAPI {
  // Version of dexie-cloud-addon
  version: string;

  tableSettings: CryptoSettings2

  // // Options configured using db.cloud.configure()
  // options: DexieCloudOptions | null;

  // // Dexie-Cloud specific schema (complementary to dexie schema)
  // schema: DexieCloudSchema | null;

  // // UserID of the currently logged in user. If not logged in,
  // // this string will be "unauthorized"
  // currentUserId: string;

  // // Observable of currently logged in user
  // currentUser: BehaviorSubject<UserLogin>;

  // // Observable of current WebSocket status
  // webSocketStatus: BehaviorSubject<DXCWebSocketStatus>;

  // // Observable of current Sync State
  // syncState: BehaviorSubject<SyncState>;

  // // Observable of persisted sync state
  // persistedSyncState: BehaviorSubject<PersistedSyncState | undefined>;

  // events: {
  //   syncComplete: Observable<void>;
  // }

  // // Observable reflecting the GUI data that Dexie Cloud wants you to render if using
  // // db.cloud.configure({customLoginGui: true}).
  // // The information it wants you to render is login dialogs and error alerts.
  // // The information also contains action callbacks to call from Submit / Cancel buttons.
  // userInteraction: BehaviorSubject<DXCUserInteraction | undefined>;

  // // Observable of invites for the user to accept or reject
  // invites: Observable<Invite[]>;

  // // Observable of global application roles - a liveQuery() of the 'roles' table
  // roles: Observable<{[roleName: string]: DBRealmRole}>;

  // // Boolean whether service worker is used or not
  // usingServiceWorker?: boolean;
  
  // // Boolean whether this Dexie instance is a private Dexie instance owned by
  // // the built-in Dexie Cloud service worker.
  // isServiceWorkerDB?: boolean;

  // /** Login using Dexie Cloud OTP or Demo user.
  //  *
  //  * @param email Email to authenticate
  //  * @param userId Optional userId to authenticate
  //  * @param grant_type requested grant type
  //  */
  // login(hint?: LoginHints): Promise<void>;

  // logout(options?: {force?: boolean}): Promise<void>;

  // /**
  //  * Connect to given URL
  //  */
  // configure(options: DexieCloudOptions): void;

  // /** Trigger a sync
  //  *
  //  */
  // sync(options?: DexieCloudSyncOptions): Promise<void>;

  // /** Method that returns an observable of the available permissions of given
  //  * entity.
  //  * 
  //  * @param entity Entity to check permission for
  //  */
  // permissions<T extends { owner: string; realmId: string; table: () => string; }>(entity: T): Observable<PermissionChecker<T>>;

  // /** Method that returns an observable of the available permissions of given
  //  * object and table name.
  //  * 
  //  * @param obj Object retrieved from a dexie query
  //  * @param table Table name that the object was retrieved from
  //  */
  //  permissions<T>(obj: T, table: string): Observable<PermissionChecker<T, string>>;
}
