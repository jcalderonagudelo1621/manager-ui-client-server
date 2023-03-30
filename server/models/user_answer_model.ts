import { UserAnswer } from '../types/user_answer';
import {db} from "../db";
import { RowDataPacket } from "mysql2";


/*

    SELECT album_id, COUNT(*) AS errores
FROM user_answer
WHERE success is null or success = 0
GROUP BY album_id
UNION
SELECT album_id, 0 AS errores
FROM user_answer
WHERE album_id NOT IN (SELECT album_id FROM user_answer WHERE success = 0)
GROUP BY album_id;
*/

export const findAll = (callback: Function) => {
  const queryString = `
  SELECT 
    album_id,
    SUM(CASE
        WHEN success = 0 THEN 1
        ELSE 0
    END) AS numero_de_errores,
    COUNT(question_id) AS preguntas_respondidas,
    CASE
        WHEN COUNT(question_id) >= 14 THEN 'sí'
        ELSE 'no'
    END AS finalizacion_album,
    ABS((ROUND((ABS((SUM(CASE
                        WHEN success = 0 THEN 1
                        ELSE 0
                    END) - COUNT(question_id)) / COUNT(question_id)) * 100), 0) - 100)) AS porcentaje_error,
    SUM(latency) AS tiempo_total_de_respuesta
FROM
    user_answer
GROUP BY album_id



  `

    db.query(queryString, (err, result) => {
      if (err) {callback(err)}
  
      const rows = <RowDataPacket[]> result;
      const userAnswers: UserAnswer[] = [];
  
      rows.forEach(row => {
        const a_id: UserAnswer = {
          album_id: row.album_id,
          error_number: row.numero_de_errores,
          answered_question_number: row.preguntas_respondidas,
          ended_album: row.finalizacion_album,
          error_percentage: row.porcentaje_error,
          total_response_time: row.tiempo_total_de_respuesta

        }
          userAnswers.push(a_id);
      });
      callback(null, userAnswers);
    });
  }

 