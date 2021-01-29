
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const collectionSchema = new Schema({
   name: String,
   code: String
})

const collectionModel = mongoose.model('collection', collectionSchema, 'collection');
export default collectionModel;
