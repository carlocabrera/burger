var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection(
	{
		host: 'ryvdxs57afyjk41z.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
		port: 3306,
		user: 'g67n4don2c9akgxe',
		password: 'root',
		database: 'qdtynro27g3andpq'
	});
}

connection.connect(function(err) {

	if (err) throw err;
});

module.exports = connection;
