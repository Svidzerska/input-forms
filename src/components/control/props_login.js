const propsLogin = [
   {
     name: 'login',
     type: 'text',
     required: true,
     placeholder: 'Name',
     validations: {
       onChange: [
         {
           name: 'minLength',
           minLength: 6,
         },
       ],
     },
   },

   {
     name: 'password',
     type: 'password',
     hideInput: true,
     required: true,
     placeholder: 'New password',
     validations: {
       onChange: [
         {
           name: 'minLength',
           minLength: 8,
         },
         {
           name: 'pass',
           pass: /\d[a-zA-Z]|[a-zA-Z]\d/
         },
       ],
     },
   },
];

export default propsLogin;
 