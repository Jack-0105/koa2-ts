//sequelize基础配置文件
import { Sequelize } from 'sequelize-typescript';
const path = require('path')

const sequelize = new Sequelize({
	host: '127.0.0.1',
	port: 3306,
	database: 'constellation',
	dialect: 'mysql',
	username: 'root',
	password: '123456789',
	modelPaths: [path.resolve(__dirname, `./models/`)],
	pool: {
		// 连接池的一些相关配置
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
	operatorsAliases: false,
	// true会在控制台打印每次sequelize操作时对应的SQL命令
	logging: true,
});

export {
	sequelize
}