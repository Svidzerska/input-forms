const propsField = [
   {
     name: 'select option',
     type: 'select',
     required: true,
     placeholder: 'Select',
     options: [
       { value: 'option1', label: 'Option 1' }
     ],
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
 