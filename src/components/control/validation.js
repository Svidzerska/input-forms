const validation = {
   minLength: (val,minLength) => {
      // const regex = /^\S{4,15}$/;
      if (val.length >= minLength && val.length <= 15 ) {
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
            error : 'it is not an email'
         })
      }
   },

   pass: (val) => {
      const regex = /\d[a-zA-Z]|[a-zA-Z]\d/;
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