import mongoose,{ Schema } from 'mongoose';

// crear el esquema
const categorySheme = new Schema({
    name:{ type: String, maxLength:100, unique:true, require:true },
    description:{ type: String, maxLength:200 },
    status:{ type: Number, default:1 },
    createAt:{ type:Date, default: Date.now }
});

// modelo
const Category = mongoose.model('category', categorySheme);

export default Category;