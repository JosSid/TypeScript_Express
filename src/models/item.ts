import { Schema, Types, model, Model } from "mongoose";
import { Follower } from "../interfaces/follower.interface";

const FollowerSchema = new Schema<Follower>(
    {
        name: {
            type: String,
        },
        mail: {
            type: String,
        },
        phone: {
            type: String || null
        },
        comments: {
            type: String
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const FollowerModel = model('followers', FollowerSchema);

export default FollowerModel;