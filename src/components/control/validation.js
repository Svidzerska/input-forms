const validation = {
   minLength: (val) => {
      const regex = /^\S{4,15}$/;
      if (regex.test(val)) {
         return ({valid : true,
            name : "name",
            error : 'no'
         })
      } else {
         return ({valid : false,
            name : "name",
            error : 'from 4 to 15 symbols are needed'
         })
      }
   },

   isEmail: (val) => {
      const regex = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
      if (regex.test(val)) {
         return ({valid : true,
            name : "email",
            error : 'no'
         })
      } else {
         return ({valid : false,
            name : "email",
            error : 'it is not a email'
         })
      }
   },

   pass: (val) => {
      const regex = /(\d+\w+) | (\w+\d+)/;
      if (regex.test(val)) {
         return ({valid : true,
            name : "pass",
            error : 'no'
         })
      } else {
         return ({valid : false,
            name : "pass",
            error : 'at least 1 digit and 1 letter are expected'
         })
      }
   }
}

export default validation;