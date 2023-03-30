import { Request, Response } from "express";
import { handleHttp } from "../utils/error_handle";
import { insertFollower, getFollowers, getFollowerById, updateFollower, deleteFollower } from "../services/follower";

const getItem = async(req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const responseFollower = await getFollowerById(id);
        const data = responseFollower ? responseFollower : "THIS_DOCUMENT_NOT_EXISTS_IN_DB"
        res.status(200).json(data);
    } catch (error) {
        handleHttp(res, 'ERROR_GET_ITEM');
    }
}

const getItems = async(req: Request, res: Response) => {
    try {
        const responseFollowers = await getFollowers()
        res.status(200).json(responseFollowers)
    } catch (error) {
        handleHttp(res, 'ERROR_GET_ITEMS');
    }
}

const createItem = async ({body}: Request, res: Response) => {
    try {
       const responseInsert =  await insertFollower(body);
       res.status(201).json(responseInsert)
    } catch (error) {
        handleHttp(res, 'ERROR_CREATE_ITEM', error);
    }
}

const updateItem = async ({params, body}: Request, res: Response) => {
    try {
        const {id} = params;
        const responseFollower = await updateFollower(id, body);
        res.status(200).json(responseFollower);
    } catch (error) {
        handleHttp(res, 'ERROR_UPDATE_ITEM');
    }
}

const deleteItem = async({params}: Request, res: Response) => {
    try {
        const {id} = params;
        const responseFollower = await deleteFollower(id);
        res.status(200).json(responseFollower);
    } catch (error) {
        handleHttp(res, 'ERROR_DELETE_ITEM');
    }
}

export { getItem, getItems, createItem, updateItem, deleteItem}
