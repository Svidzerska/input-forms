const validation = {
   minLength: (val) => {
      const regex = /^\S{4,15}$/;
      if (regex.test(val)) {
         return ({valid : true,
            name : "name",
            error : ''
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
            error : ''
         })
      } else {
         return ({valid : false,
            name : "email",
            error : 'it is not a email'
         })
      }
   },

   pass: (val) => {
      const regex = /[\d+\w+][\w+\d+]/;
      if (regex.test(val)) {
         return ({valid : true,
            name : "password",
            error : ''
         })
      } else {
         return ({valid : false,
            name : "password",
            error : 'at least 1 digit and 1 letter are expected'
         })
      }
   },

   confirmPass: (val,val_first) => {
      if (val_first === val) {
         return ({valid : true,
            name : "confirm_password",
            error : ''
         })
      } else {
         return ({valid : false,
            name : "confirm_password",
            error : "password isn't confirmed",
         })
      }
   }
}

export default validation;