import { Request, Response } from "express";
import gameModel from "../Model/gameModel";



// get:
const readCenterInfo = async (req: Request, res: Response): Promise<Response> =>{
    try {
        const centerDatas = await gameModel.find();
        return res.status(200).json({
            message: "All Game Centers Datas successfully gotten",
            data: centerDatas
        })
    } catch (error) {
        return res.status(400).json({
            message: "An error occured",
            data: error
        })
    }
}

// geOne:
const getOneCenterInfo = async(req: Request, res: Response): Promise<Response> =>{
    try {
        const oneCenter = await gameModel.findById(req.params.id);
        return res.status(200).json({
            message: `This Gaming Center Data has been successfully gotten`,
            data: oneCenter,
        })
    } catch (error) {
        return res.status(400).json({
            message: "An error occured",
            data: error
        })
    }
}

// Post:
const registerNewCenters = async (req: Request, res: Response): Promise<Response> =>{
    try {
       
        const { owner_name,staff_on_duty, center_no, report_at_endOfWork} = req.body;
       
        let centerIncrease = await gameModel.find().count() + 1
       let name = "Engr Raheem Toheeb"
        let firstName = await name.split(" ")[2]
        let staffs = [
            "Gideon", "Samuel", "Sylvia", "Abraham", "Esther", "Feyikemi", "Judith", "Isaac", "Godwin", "Emmanuel"
        ]
        let staffName = `${staffs[Math.floor(Math.random() * staffs.length)]}`
       
        let address = [
            "45 kirikiri road",
            "101 mobil road",
            "Signal Barracks, Mile 2",
            "3, Ahmed Musa, Oregie",
            "Alaba-oro Bustop",
            "Wilmer Bustop",
            "Boundary road",
            "89, Osho-drive",
            "Alpha-beta close",
            "121 Bale road",
        ]
       
        const newCenter = await gameModel.create({
            owner_name: name,
            center_name: `Center ${centerIncrease}`,
            center_address: `${address[Math.floor(Math.random()*address.length)]}`,
            center_no: `${firstName}gamecenter00${centerIncrease}`,
            center_tagCode: `${firstName}00${Math.floor(Math.random() * 100)}`,
            games_available: {
                "Pes 4": 10,
                "virtual-reality": 15,
                "indoor-games": {
                    ludo: 3,
                    scrabble: 5,
                    chess: 2,
                    monopoly: 4
                },
                "Play-stations": 20
            },
            staff_on_duty: staffName,
            staff_code: `${staffName}${Math.floor(Math.random() * 100)}`,
            report_at_endOfWork,
        })

        return res.status(200).json({
            message: "New Center data successfully registered",
            data: newCenter
        })
    } catch (error) {
        return res.status(400).json({
            message: "An error occured in adding new center data",
            data: error,
        })
    }
};

export {readCenterInfo, registerNewCenters, getOneCenterInfo}