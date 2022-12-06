const sql = require("msnodesqlv8");

const connectionString = "server=.;Database=VTYS;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
const query = "SELECT * from dbo.veriler";

sql.query(connectionString, query, (err, rows) => {
    console.log(rows)
})