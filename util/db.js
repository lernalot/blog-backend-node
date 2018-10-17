/**
 * Created by @KarlAo on 2018/10/17
 * @description:
 */

const mysql = require('mysql');
const { blogDataBase } = require("../dataConfig/dataBaseConfig");
const pool = mysql.createPool(blogDataBase);

let query = function( sql, values ) {

	return new Promise(( resolve, reject ) => {
		pool.getConnection(function(err, connection) {
			if (err) {
				reject( err )
			} else {
				connection.query(sql, values, ( err, rows) => {

					if ( err ) {
						reject( err )
					} else {
						resolve( rows )
					}
					connection.release()
				})
			}
		})
	})

}

module.exports = {
	query
}