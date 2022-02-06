
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

   login: (props) => {
      wait(3000).then(() => JSON.parse(localStorage.getItem(props.name)));
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