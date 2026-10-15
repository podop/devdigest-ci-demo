export interface Db {
  query(sql: string, params: unknown[]): Promise<unknown[]>;
}

/** Find users whose name starts with the given prefix. */
export async function findUsers(db: Db, prefix: string): Promise<unknown[]> {
  return db.query('SELECT id, name FROM users WHERE name LIKE $1 LIMIT 50', [`${prefix}%`]);
}
