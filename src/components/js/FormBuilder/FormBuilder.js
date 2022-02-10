import React, {useState, useEffect} from "react";
import InputHooks from "../ElementForm/Input_component_hooks";
import Select from "../ElementForm/Select_component";
import validate from './validateHelper';
import Checkbox from "../ElementForm/Checkbox_component";
import '../../css/FormStyles/formBuilder.css';



function FormBuilder(props) {
   
   const [values, setValues] = useState({});
   const [getValidations, setGetValidations] = useState({});
   const [isValid, setIsValid] = useState(false);


   const data = props.data; //array
   let validRules = {};


   useEffect(()=> {
      console.log(isValid);
   }, [isValid]);

   useEffect(()=> {
      console.log(getValidations);
      const keys = Object.keys(values);  

      let amountOfArea = keys?.filter(key => {
         let objFalse = getValidations[key]?.find(rule => 
            rule.valid 
         ) 
         console.log(objFalse);

         return !(objFalse === undefined);
      });

      console.log(amountOfArea, amountOfArea.length);
      console.log(keys.length, keys);

      if ((amountOfArea.length+2) === keys.length && amountOfArea.length !== 0) { //wrong!!!
         setIsValid(true);
      } else {
         setIsValid(false);
      }
       
   }, [getValidations,values]);


   useEffect(() =>{
      console.log(values);
      console.log(Object.keys(values));
      const keys = Object.keys(values); //array
      setGetValidations(validate(values,keys,validRules));
      // props.updateData(values); //should be not work when unvalid
      if (isValid) {
         props.updateData(values);
      }
   },[values]);


   
   const handleChanges = (event) => {
      const check = event.target.checked;
      const name = event.target.name;
      const value = event.target.value;

     name === 'checkbox' ?
      setValues({...values,[name]:check}) :
       setValues({...values,[name]:value});


   }
   // const error = getValidations[area.name];
   // console.log(error);


   const listArea = data.map(function(area) {

      let rulesResolved = getValidations[area.name]; //array
      let errorRule = rulesResolved?.find(objRule => 
         !objRule.valid
      );


      const objectField = {
               select: Select,
               checkbox: Checkbox,
               text: InputHooks,
               password: InputHooks
      }
      const Component = objectField[area.type];

      if (area.validations) {
         console.log(area.validations.onChange);
         validRules = Object.assign(validRules, {[area.name]:area.validations.onChange});
      }

      return (<div className="inputArea">
         <label className="inputArea__label" for={area.name}>
            Your {area.name}
         </label>
         <p className="inputArea__error">{errorRule?.error ? errorRule?.error : ""}</p>
         <Component key={area.name}
            {...area}
            onChange={handleChanges}
            className={"inputArea__"+ area.type}
         />
      </div>
      )
   });


   return (
      <div className="form_build">
         {listArea}
      </div>
   )
}

export default FormBuilder;