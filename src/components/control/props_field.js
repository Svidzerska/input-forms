const propsField = [
   {
     name: 'select option',
     type: 'select',
     required: true,
     placeholder: 'Select',
     options: [
       {value: '', label: 'Choose option'},
       {value: 'option1', label: 'Option 1'},
       {value: 'option2', label: 'Option 2'},
       {value: 'option3', label: 'Option 3'},
       {value: 'option4', label: 'Option 4'},
       {value: 'option5', label: 'Option 5'}
     ],
   },

   {
      name: 'email',
      type: 'text',
      required: true,
      placeholder: 'E-mail',
      validations: {
        onChange: [
          {
            name: 'minLength',
            minLength: 10,
          },
        ],
      },
    },

   {
     name: 'code',
     type: 'text',
     required: true,
     placeholder: 'Confirmation Code',
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
     name: 'newPassword',
     type: 'text',
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
           name: 'password',
         },
       ],
     },
   },

   {
     name: 'confirmPassword',
     type: 'text',
     required: true,
     placeholder: 'Confirm Password',
   },
];

export default propsField;
 