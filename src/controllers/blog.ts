import { Request, Response } from "express";
import { handleHttp } from "../utils/error_handle";

const getItem = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_GET_BLOG');
    }
}

const getItems = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_GET_BLOGS');
    }
}

const createItem = ( {body}: Request, res: Response) => {
    try {
        res.status(201)
        res.json({body})
    } catch (error) {
        handleHttp(res, 'ERROR_CREATE_BLOG');
    }
}

const updateItem = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_UPDATE_BLOG');
    }
}

const deleteItem = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_DELETE_BLOG');
    }
}

export { getItem, getItems, createItem, updateItem, deleteItem}
