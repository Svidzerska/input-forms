function validation(values, name_val) {
   const result = {};
   console.log(result);

   const minLength = (val, name_val) => {
      const regex = /[0-9a-zA-Z]{4}/;
      if (regex.test(val)) {
         return (result.valid = true,
            result.name = name_val,
            result.error = 'no'
         )
      } else {
         return (result.valid = false,
            result.name = name_val,
            result.error = 'at least 4 symbols are needed'
         )
      }
   }

   minLength(values, name_val);

   const maxLength = (val) => {
      const regex = /[0-9a-zA-Z]{5,15}/;
      if (regex.test(val)) {
         return result.valid = true;
      } else {
         return result.valid = false;
      }
   }

   const isEmail = (val) => {
      const regex = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
      if (regex.test(val)) {
         return result.valid = true;
      } else {
         return result.valid = false;
      }
   }

   const pass = (val) => {
      const regex = /\d+\w+/;
      if (regex.test(val)) {
         return result.valid = true;
      } else {
         return result.valid = false;
      }
   }
}

export default validation;