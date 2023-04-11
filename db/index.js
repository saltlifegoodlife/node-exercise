import mySQL from "mysql";
import config from "../config";

const connection = mySQL.createPool(config.mySQL);

export default connection;
