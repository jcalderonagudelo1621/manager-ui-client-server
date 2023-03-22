import express, {Request, Response} from "express";
import * as albumModel from "../models/album";
import {AlbumId} from "../types/album";


const albumRouter = express.Router();

albumRouter.get("/", async (req: Request, res: Response) => {
  albumModel.findAll((err: Error, albumIds: AlbumId[]) => {
    if (err) {
      return res.status(500).json({"errorMessage": err.message});
    }

    res.status(200).json({"data": albumIds});
  });
});



export {albumRouter};