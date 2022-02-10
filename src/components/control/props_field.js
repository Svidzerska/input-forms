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
      name: 'checkbox',
      type: 'checkbox',
      placeholder: '',
      value: "Are you skier?",
      id: 'skier'
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

export default propsField;
 