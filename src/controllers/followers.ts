import { Request, Response } from "express";
import { handleHttp } from "../utils/error_handle";
import { insertFollower, getFollowers } from "../services/follower";

const getItem = (req: Request, res: Response) => {
    try {
        
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

const updateItem = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_UPDATE_ITEM');
    }
}

const deleteItem = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_DELETE_ITEM');
    }
}

export { getItem, getItems, createItem, updateItem, deleteItem}
