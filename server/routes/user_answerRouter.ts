import express, {Request, Response} from "express";
<<<<<<< HEAD
import * as albumModel from "../models/album";
import {AlbumId} from "../types/album";


const albumRouter = express.Router();

albumRouter.get("/", async (req: Request, res: Response) => {
  albumModel.findAll((err: Error, albumIds: AlbumId[]) => {
=======
import * as user_answer_model from "../models/user_answer_model";
import {UserAnswer} from "../types/user_answer";


const user_answerRouter = express.Router();

user_answerRouter.get("/", async (req: Request, res: Response) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
  
  user_answer_model.findAll((err: Error, albumIds: UserAnswer[]) => {
>>>>>>> 0b49df828fa4acab0c1d2bd7795dabc8cbcf898d
    if (err) {
      return res.status(500).json({"errorMessage": err.message});
    }

<<<<<<< HEAD
    res.status(200).json({"data": albumIds});
=======
    res.status(200).json({"data":albumIds});
>>>>>>> 0b49df828fa4acab0c1d2bd7795dabc8cbcf898d
  });
});



<<<<<<< HEAD
export {albumRouter};
=======
export {user_answerRouter};
>>>>>>> 0b49df828fa4acab0c1d2bd7795dabc8cbcf898d
