import Mongoose from 'mongoose';
import config from '../config';

const server = config.dbUri// REPLACE WITH YOUR DB SERVER
const database = config.dbName; // REPLACE WITH YOUR DB NAME

const dbConnect = () => {
    return new Promise(async (resolve, reject) => {
        try {
            await Mongoose.connect(`${server}/${database}`);
            console.log('Database connection successful');
            resolve('Database connection successful');
        } catch (error) {
            console.error('Database connection error');
            reject(error);
        }
    });
};

export default dbConnect;
