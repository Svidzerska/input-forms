const propsSignUp = [
   {
     name: 'name',
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
      name: 'email',
      type: 'text',
      required: true,
      placeholder: 'E-mail',
      validations: {
        onChange: [
          {
            name: 'isEmail',
            isEmail: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/
          },
        ],
      },
    },

   {
     name: 'newPassword',
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

   {
     name: 'confirmPassword',
     type: 'password',
     required: true,
     placeholder: 'Confirm Password',
     validations: {
      onChange: [
        {
          name: 'confirmPass',
        },
      ],
    },
   },
];

export default propsSignUp;
 