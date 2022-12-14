import mongoose from "mongoose";

interface games{
    owner_name: string,
    center_name: string,
    center_address: string,
    center_no: string,
    center_tagCode: string,
    games_available: {},
    staff_on_duty: string|number,
    staff_code: string|number,
    report_at_endOfWork: {}
};

interface iGames extends games, mongoose.Document{};

const gameSchema = new mongoose.Schema({
    owner_name: String,
    center_name: String,
    center_address: String,
    center_no: String,
    center_tagCode: String,
    games_available: Object,
    staff_on_duty: String || Number,
    staff_code: String||Number,
    report_at_endOfWork: Object
}, {timestamps: true});

export default mongoose.model<iGames>("Centers", gameSchema);