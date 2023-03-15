/* import { UserAnswer } from '../types/user_answer';
import {db} from "../db";
import { OkPacket, RowDataPacket } from "mysql2";

export const findAll = (callback: Function) => {
    const queryString = `
      SELECT *
      FROM album`
  
    db.query(queryString, (err, result) => {
      if (err) {callback(err)}
  
      const rows = <RowDataPacket[]> result;
      const userAnswers: UserAnswer[] = [];
  
      rows.forEach(row => {
        const a_id: UserAnswer =  {
            album_id: row.album_id,     
        
        }
          userAnswers.push(a_id);
      });
      callback(null, userAnswers);
    });
  }

 */