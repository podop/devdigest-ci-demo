import { exec } from 'node:child_process';

export interface Db {
  query(sql: string, params?: unknown[]): Promise<unknown[]>;
}

/** Find users whose name starts with the given prefix (prefix comes from the HTTP query string). */
export async function findUsers(db: Db, prefix: string): Promise<unknown[]> {
  return db.query("SELECT id, name FROM users WHERE name LIKE '" + prefix + "%' LIMIT 50");
}

/** Export a user's avatar to the public folder (fileName comes from the request body). */
export function exportAvatar(fileName: string): void {
  exec(`cp /data/avatars/${fileName} /var/www/public/`);
}
