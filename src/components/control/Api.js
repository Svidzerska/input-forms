
const Api = {
   signup: (user) => {
      wait(3000).then(() => {
         let usersArr = JSON.parse(localStorage.getItem("Users")); //[]
         console.log(usersArr);

         if (usersArr) {
            let result = usersArr.find(element =>
               user.name === element.name &&
               user.email === element.email &&
               user.password === element.password &&
               user.confirm_password === element.confirm_password
            );

            if (!result) {
               usersArr.push(user);
               let users = JSON.stringify(usersArr);
               localStorage.setItem("Users", users);
               return usersArr;
            } else if (result) {
               return console.log("this user is already existed");
            }
            
         } else {
               usersArr = [user];
               let users = JSON.stringify(usersArr);
               localStorage.setItem("Users", users);
               return usersArr;
         }
      });
   },

   login: (user) => {
      wait(3000).then(() =>  {
         let usersArr = JSON.parse(localStorage.getItem("Users"));
         console.log(usersArr);

         if (usersArr) {
            let result = usersArr.find(element =>
               user.login === element.name &&
               user.password === element.password
            );

            if (!result) {
               return console.log("user doesn't exist: please sign-up");
            } else if (result) {
               return console.log("log-in is successed");
            }
            
         } else {
               return console.log("user doesn't exist: please sign-up");
         }
      });
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

export default Api;