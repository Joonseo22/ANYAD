const mysql = require("mysql"),
  dbInfo = {
    host: "pino-hoo.csu91uf8yo4l.ap-northeast-2.rds.amazonaws.com",
    port: "3306",
    user: "root",
    password: "qwer1595",
    database: "oneAnyAd",
  },
  pool = mysql.createPool(dbInfo)

module.exports = (callback) => {
  pool.getConnection((err, conn) => {
    if (!err) {
      callback(conn)
    }
  })
}
