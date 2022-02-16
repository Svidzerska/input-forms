
const ApiToDo = {
   getToDoList: (currentUser) => {
      return wait(0).then(() => {
         const getObj = localStorage.getItem(currentUser);
         const dataFromStorage = JSON.parse(getObj);
         
         if (dataFromStorage) {
            return dataFromStorage;
         } else {
            return [];
         }
      })
   }
}

function wait(duration) {
   return new Promise((resolve, reject) => {
      if (duration < 0) {
         reject(new Error("wrong value"));
      }
      setTimeout(resolve, duration);
   });
}

export default ApiToDo;