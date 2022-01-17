import Mongoose from 'mongoose';

const server = 'mongodb+srv://admin:admin123@cluster0.a9zwe.mongodb.net'; // REPLACE WITH YOUR DB SERVER
const database = 'test'; // REPLACE WITH YOUR DB NAME

// class Database {
//     constructor() {
//       this._connect()
//     }
//   _connect() {
//     Mongoose.connect(`${server}/${database}`)
//          .then(() => {
//            console.log('Database connection successful')
//          })
//          .catch(err => {
//            console.error('Database connection error')
//          })
//     }
//   }
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
