import { Follower } from "../interfaces/follower.interface";
import FollowerModel from "../models/follower";

const insertFollower = async (follower: Follower) => {
    const responseInsert = await FollowerModel.create(follower);
    return responseInsert;
};

const getFollowers = async() => {
    const responseFollowers = await FollowerModel.find({});
    return responseFollowers;
};

const getFollowerById = async(id: string) => {
    const responseFollower = await FollowerModel.findById(id);
    return responseFollower;
};

const updateFollower = async(id: string, data:Follower) => {
    const responseFollower = await FollowerModel.findOneAndUpdate({_id: id}, data, {new:true});
    return responseFollower;
};

const deleteFollower = async(id: string) => {
    const responseFollower = await FollowerModel.findOneAndDelete({_id: id});
    return responseFollower;
};

export { insertFollower, getFollowers, getFollowerById, updateFollower, deleteFollower };