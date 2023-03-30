import { Follower } from "../interfaces/follower.interface";
import FollowerModel from "../models/follower";

const insertFollower = async (follower: Follower) => {
    const responseInsert = await FollowerModel.create(follower);
    return responseInsert;
};

const getFollowers = async() => {
    const responseFollowers = await FollowerModel.find({});
    return responseFollowers;
}

export { insertFollower, getFollowers }