module.exports = {
  development: {
    username: "postgres",
    password: "muel1345",
    database: "chapter6",
    host: "localhost",
    port: 2204,
    dialect: "postgres",
  },
};

// module.exports = {
//     development: {
//         username: process.env.DB_USERNAME,
//         password: process.env.DB_PASSWORD,
//         database: process.env.DB_NAME,
//         port: process.env.DB_PORT,
//         host: "localhost",
//         dialect: "postgres"
//     }
// }