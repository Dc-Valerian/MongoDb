import mongoose from "mongoose";

interface stores{
    name: string,
    address: string,
    tagNo: string,
    snacks: {},
    softDrinks: {},
};

interface iStores extends stores, mongoose.Document{}

const storeSchema = new mongoose.Schema({
    name: String,
    address: String,
    tagNo: String,
    snacks: Object,
    softDrinks: {},
}, {timestamps: true})

const storeModel = mongoose.model<iStores>("storeCollections", storeSchema);

export default storeModel;