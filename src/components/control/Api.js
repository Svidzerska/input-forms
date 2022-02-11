
const Api = {
   sendForm: (user) => {
      return wait(3000).then(() => {
         let formData = JSON.parse(localStorage.getItem("Skiers"));
         console.log(formData);

         if (formData) {
            let result = formData.find(element =>
               user.email === element.email &&
               user.newPassword === element.newPassword
            );

            if (!result) {
               formData.push(user);
               let users = JSON.stringify(formData);
               localStorage.setItem("Skiers", users);
               return formData;
            } else if (result) {
               return "the user already exists";
            }

         } else {
            formData = [user];
            let users = JSON.stringify(formData);
            localStorage.setItem("Skiers", users);
            return formData;
         }
      });
   },

   signup: (user) => {
      return wait(3000).then(() => {
         let usersArr = JSON.parse(localStorage.getItem("Users"));
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
               return "the user already exists";
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
      return wait(3000).then(() => {
         let usersArr = JSON.parse(localStorage.getItem("Users"));
         console.log(usersArr);

         if (usersArr) {
            let result = usersArr.find(element =>
               user.login === element.name &&
               user.password === element.newPassword
            ); // if true - element

            console.log(result); 

            if (!result) {
               return ({
                  information: "a user doesn't exist: please sign-up",
                  current_user: ""
               }
               );
            } else if (result) {
               return ({
                  information: "log-in is successed",
                  current_user: result
               }
               );
            }

         } else {
            return ({
               information: "a user doesn't exist: please sign-up",
               current_user: ""
            }
            );
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