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
         checkValid.includes(undefined) ? setIsValid(false) : setIsValid(true);
   }, [getValidations,values]);


   useEffect(() => {
      props.updateData(values,isValid);
   }, [values, isValid]);

   useEffect(() =>{
      const keys = Object.keys(values); //array
      setGetValidations(validate(values,keys,validRules));
      
   },[values]);


   
   const handleChanges = (event) => {
      const check = event.target.checked;
      const name = event.target.name;
      const value = event.target.value;

     name === 'checkbox' ?
      setValues({...values,[name]:check}) :
       setValues({...values,[name]:value});


   }

   let checkValid = [];

   const listArea = data.map(function(area) {

      let rulesResolved = getValidations[area.name]; // array
      console.log(rulesResolved);

      let errorRule = rulesResolved?.find(objRule => 
         !objRule.valid
      );

      let trueRule = rulesResolved?.find(objRule => 
         objRule.valid
      );

      console.log(trueRule);

      const objectField = {
               select: Select,
               checkbox: Checkbox,
               text: InputHooks,
               password: InputHooks
      }
      const Component = objectField[area.type];

      if (Component === InputHooks) {
         checkValid.push(trueRule);
      }

      if (area.validations) {
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