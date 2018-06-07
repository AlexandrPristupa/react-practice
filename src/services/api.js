import { columnsMock } from "../config/constans";


export const getColumnsApi = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(columnsMock);
    });

     reject(() => {
         return new Error('get columns error');
     });
  });
};