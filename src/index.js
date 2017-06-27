// @flow
import 'babel-polyfill';
import app from './app';
import connectDatabase from './database';
import { graphqlPort } from './config';

(async () => {
  try {
    const info = await connectDatabase();
    console.log(`Connected to ${info.config.host}:${info.config.port}/${info.config.database}`);
  } catch (error) {
    console.error('Unable to connect to database');
    console.log(error);
    process.exit(1);
  }

  await app.listen(graphqlPort);
  console.log(`Server started on port ${graphqlPort}`);
})();
