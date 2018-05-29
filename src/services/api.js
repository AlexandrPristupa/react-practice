import { columnsMock } from "../constans";


export const getColumns = () => {
  return new Promise((resolve, reject) => {
     setTimeout(() => {
         resolve(columnsMock);
     }, 2000);

     reject(() => {
         return new Error('get columns error');
     });
  });
};