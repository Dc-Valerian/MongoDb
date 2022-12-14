import carModel from "../Model/carModel";

import {Request, Response} from "express";

// POST:
const postCar = async (req: Request, res: Response): Promise<Response> =>{
    try {
        const { manufacturer, model, color, selfDriving, transmission } = req.body;
        const newCar = await carModel.create({
            manufacturer,
            model,
            color,
            chasisNo: Math.floor(Math.random() * 100000000),
            selfDriving,
            transmission,
        });
        return res.status(201).json({
            message: "Data created Successfully",
            data: newCar,
        });
    } catch (error) {
        return res.status(400).json({
            message: "An error occured",
            data: error,
        });
    }
};

// GET:
const getCar = async (req: Request, res: Response): Promise<Response> =>{
    try {
        const userCar = await carModel.find();
        return res.status(200).json({
            message: "Users Car Data successfully gotten",
            data: userCar,
        })
    } catch (error) {
        return res.status(400).json({
            message: "An error occured",
            data: error
        })
    }
}

{esther : "very beautiful"}
// Single Car:
const singleCar = async (req: Request, res: Response): Promise<Response> =>{
    try {
     
        const OneCar = await carModel.findById(req.params.id);
        return res.status(200).json({
            message: "One User Car data successfully gotten",
            data: OneCar
        })
    } catch (error) {
        return res.status(400).json({
            message: "An error occured",
            data: error,
        })
    }
};

// // Update Car:
const updateCar = async (req: Request, res: Response): Promise<Response> =>{
    try {
        const {manufacturer, model, color, chasisNo, selfDriving, transmission} = req.body;
        const updates  = await carModel.findByIdAndUpdate(req.params.id, {manufacturer, model, color, chasisNo, selfDriving, transmission}, {new: true});
        return res.status(200).json({
            message: "THIS CAR USER DATA HAS BEEN UPDATED",
            data: updates,
        })
    } catch (error) {
        return res.status(400).json({
            message: "An error occured",
            data: error,
        })
    }
}


// // Delete Car:
const deleteCar = async (req: Request, res: Response): Promise<Response> =>{
    try {
        const deletes = await carModel.findByIdAndRemove(req.params.id);
        return res.status(200).json({
            message: "THIS CAR USER DATA HAS BEEN DELETED FROM THE DB",
            data: deletes,
        })
    } catch (error) {
        return res.status(404).json({
            message: "An error occured",
            data: error,
        })
    }
}

export {postCar, getCar, singleCar, updateCar, deleteCar}