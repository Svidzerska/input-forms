import validation from "../../control/validation";

const validate = (values, keys, validRules) => {
   let resObj = {};

   keys.forEach(area => {
      let arrayRules = validRules[area]; // array

      if (arrayRules) {
         let arrayResolveRules = [];

         arrayRules.forEach(rule => {
            let method = rule.name;

            const changeObj = (parameter) => {
               arrayResolveRules.push(validation[method](values[area], parameter)); // push arr
               resObj = Object.assign(
                  resObj, { [area]: arrayResolveRules },
               )
            };

            if (method === 'confirmPass') {
               let parameter = values['newPassword'];
               changeObj(parameter);
            } else {
               let parameter = rule[method];
               changeObj(parameter);
            }
         });
      }
   });
   return (resObj);
}

export default validate;
