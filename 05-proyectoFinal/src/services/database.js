import mongoose from 'mongoose';
import Config from '../config';

export const initDb = async () => {

try {
    
    mongoose.set('strictQuery', true);
    return await mongoose.connect(Config.MONGO_ATLAS_URL);

} catch (error) {
    console.log(`ERROR => ${error}`)
    return error
}
}