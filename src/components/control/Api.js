
const Api = {
   signup: (user) => {
      wait(3000).then(()=> {
        let users = [JSON.stringify(user)];
        localStorage.setItem("Users",users); //array users
        return user;
      });
   },

   login: (props) => {
      wait(3000).then(() => JSON.parse(localStorage.getItem(props.name)));
   }
}

function wait(duration) {
   return new Promise((resolve,reject) => {
      if (duration < 0) {
         reject(new Error("wrong value"));
      }
     setTimeout(resolve,duration);
   });
}

export default Api;