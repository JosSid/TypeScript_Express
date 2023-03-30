import { Schema, Types, model, Model } from "mongoose";
import { Follower } from "../interfaces/follower.interface";

const FollowerSchema = new Schema<Follower>(
    {
        name: {
            type: String,
            required: true,
        },
        mail: {
            type: String,
            required: true,
        },
        phone: {
            type: String || null
        },
        comments: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const FollowerModel = model('followers', FollowerSchema);

export default FollowerModel;