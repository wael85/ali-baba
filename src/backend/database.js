
require("dotenv").config();

// create connection
const knex = require("knex")({
  client: "mysql2",
  connection: {
    host:'eu-cdbr-west-03.cleardb.net', //process.env.DB_HOST,
    port: 3306,//process.env.DB_PORT,
    user:'b02181213c300c' ,//process.env.DB_USER,
    password:'c558cf21',// process.env.DB_PASSWORD,
    database:'heroku_3d1a913d7d02d82'//process.env.DB_NAME
  },
  pool: { min: 0, max: 7 },
});

// Check that the connection works
knex.raw("SELECT VERSION()").then(() => {
  console.log(`connection to db successful!`);
});
/* knex('meal').insert({title : 'katofla',description : 'danish food', location : 'odense', when : '2020-09-01', max_reservation :'60', price : '30', created_date : new Date()})
.then(()=>console.log('done!'))
.catch((error)=>
  console.log(error)
);*/
module.exports = knex;
