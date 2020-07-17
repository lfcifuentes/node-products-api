import mongoose,{ Schema } from 'mongoose';

// crear el esquema
const productSheme = new Schema({
    name:{ type: String, maxLength:100, unique:true, require:true },
    description:{ type: String, maxLength:200 },
    status:{ type: Number, default:1 },
    category:{ type: mongoose.Schema.Types.ObjectID, ref: "category"  },
    createAt:{ type:Date, default: Date.now }
});

// modelo
const Product = mongoose.model('product', productSheme);

export default Product;