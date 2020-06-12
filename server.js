const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const schema = require('./schema');

dotenv.config({ path: './config/config.env' });

const app = express();

// Mount cors
app.use(cors());

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);


const PORT = process.env.PORT || 5000;

app.listen(5000, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));
