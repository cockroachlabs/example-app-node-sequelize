const Sequelize = require("sequelize-cockroachdb");
// For secure connection:
//const fs = require('fs');

// Connect to CockroachDB through Sequelize.
var sequelize = new Sequelize({
  dialect: "postgres",
  username: "max",
  password: "roach",
  host: "localhost",
  port: 26257,
  database: "bank",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
      // For secure connection:
      /*ca: fs.readFileSync('certs/ca.crt')
                .toString()*/
    },
  },
  logging: false,
});

// Define the Account model for the "accounts" table.
const Account = sequelize.define("accounts", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  balance: {
    type: Sequelize.INTEGER,
  },
});

// Create the "accounts" table.
Account.sync({
  force: true,
})
  .then(function () {
    // Insert two rows into the "accounts" table.
    return Account.bulkCreate([
      {
        id: 1,
        balance: 1000,
      },
      {
        id: 2,
        balance: 250,
      },
    ]);
  })
  .then(function () {
    // Retrieve accounts.
    return Account.findAll();
  })
  .then(function (accounts) {
    // Print out the balances.
    accounts.forEach(function (account) {
      console.log(account.id + " " + account.balance);
    });
    process.exit(0);
  })
  .catch(function (err) {
    console.error("error: " + err.message);
    process.exit(1);
  });
