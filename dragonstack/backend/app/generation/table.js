import pool from '../../bin/databasePool';

class GenerationTable {
  static storeGeneration(generation) {
    return new Promise((resolve, reject) => {
      pool.query(
        'INSERT INTO generation(expiration) VALUES($1) RETURNING id',
        [generation.expiration],
        (error, response) => {
          if (error) return reject(error);
          const generationId = response.rows[0].id;
          return resolve({ generationId });
        }
      );
    });
  }
}

module.exports = GenerationTable;