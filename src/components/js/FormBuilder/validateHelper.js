import validation from "../../control/validation";



const validate = (values,keys,validRules) => {
   let resObj = {};

   for (let i = 0; i < keys.length; i++) {
      let arrayRules = validRules[keys[i]];

      if (arrayRules) {
         let current_method = {};

         for (let j = 0; j < arrayRules.length; j++) {
            let method = arrayRules[j].name;

            if (method === 'confirmPass') {
               let parameter = values['newPassword'];
               resObj = Object.assign(
                  resObj,
                  { [keys[i]]: Object.assign(current_method, { [method]: validation[method](values[keys[i]], parameter) },
                  {"method":method}) }
               );
            } else {
               let parameter = arrayRules[j][method];
               resObj = Object.assign(
                  resObj, { [keys[i]]: Object.assign(current_method, { [method]: validation[method](values[keys[i]], parameter) },
                  {"method":method}) }
                  );

               // console.log(resObj[keys[i]][method].valid);

               // resObj = Object.assign(
               //    resObj, {"method": resObj[keys[i]][method].valid ? method : "misunderstand"}
               // );
            }
         }
      }
   }

   return (resObj);
}

export default validate;
