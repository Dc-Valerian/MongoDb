import { Router } from "express";

import {addToStores, readOnlyOneStoreData, readStoreDatas} from "../Controller/StoreController"

const router = Router();

router.route("/getstoredata").get(readStoreDatas);
router.route("/getonestoredata/:id").get(readOnlyOneStoreData);
router.route("/addstoredata").post(addToStores);

export default router