import { Router } from "express";

import { getCar, postCar, singleCar, updateCar, deleteCar } from "../Controller/carController";

const router = Router();

router.route("/car").get(getCar);
router.route("/car/:id").get(singleCar);
router.route("/newcar").post(postCar);
router.route("/update/:id").patch(updateCar);
router.route("/deletecar/:id").delete(deleteCar);


export default router;