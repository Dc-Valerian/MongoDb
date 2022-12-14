import { Response, Request } from "express";
import storeModel from "../Model/storeModel";

// Post:
const addToStores = async (req: Request, res: Response): Promise<Response> =>{
    try {
        const {name, address, snacks, softDrinks} = req.body;
        let space = name.replaceAll(" ", "").toLowerCase();
        const newStores = await storeModel.create({
            name, 
            address,
            tagNo: `${space}${Math.floor(Math.random() * 1000)}`,
            snacks, 
            softDrinks
        });
        return res.status(200).json({
            message: "New stores added to the store database",
            data: newStores
        })
        } catch (error) {
        return res.status(400).json({
            message: "An error occured",
            data: error
        })
    }
};
// Get:
const readStoreDatas = async (req: Request, res: Response): Promise<Response> =>{
    try {
        const readDatas = await storeModel.find();
        return res.status(200).json({
            message: "All Store data successfully gotten from the database",
            data: readDatas
        })
    } catch (error) {
        return res.status(400).json({
            message: "An error occured",
            data: error,
        })
    }
}
// SingleGet:
const readOnlyOneStoreData = async (req: Request, res: Response): Promise<Response> =>{
    try {
        const OneStore = await storeModel.findById(req.params.id);
        return res.status(200).json({
            message: "All Store data successfully gotten from the database",
            data: OneStore
        })
    } catch (error) {
        return res.status(400).json({
            message: "An error occured",
            data: error,
        })
    }
};

export {addToStores, readOnlyOneStoreData, readStoreDatas}