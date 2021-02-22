# hello-world-node-sequelize

This repo has a "Hello World" Node.js application that uses the [sequelize](https://sequelize.org/master/index.html) driver to talk to a temporary local CockroachDB cluster.

To run the code:

1. Start a [demo CockroachDB cluster](https://www.cockroachlabs.com/docs/stable/cockroach-demo.html) from the command line: `cockroach demo --empty`

1. Create a `bank` database and a user and password as described in [Build a Node App with CockroachDB](https://www.cockroachlabs.com/docs/stable/build-a-nodejs-app-with-cockroachdb-sequelize.html).

1. From the SQL client:

   ```sql
   > GRANT ALL ON DATABASE bank TO user;
   ```

1. If necessary, update the `app.js` file with the correct connection values.

1. In your terminal, from the top of this project directory:

   ```shell
   $ npm install sequelize sequelize-cockroachdb
   $ node app.js
   ```
