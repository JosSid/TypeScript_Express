import { Request, Response } from "express";
import { handleHttp } from "../utils/error_handle";

const getItem = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_GET_ITEM');
    }
}

const getItems = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_GET_ITEMS');
    }
}

const createItem = ( {body}: Request, res: Response) => {
    try {
        res.status(201)
        res.json({body})
    } catch (error) {
        handleHttp(res, 'ERROR_CREATE_ITEM');
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
