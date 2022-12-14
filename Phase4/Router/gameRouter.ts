import { Router } from "express"

import { readCenterInfo, getOneCenterInfo, registerNewCenters } from "../Controller/gameController"

const router = Router();

router.route("/getcenterdata").get(readCenterInfo);
router.route("/getonecenterdata/:id").get(getOneCenterInfo);
router.route("/addnewcenter").post(registerNewCenters);

export default router