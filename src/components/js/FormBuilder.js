import React, {useState, useEffect} from "react";
import InputHooks from "./Input_component_hooks";
import Select from "./Select_component";

function FormBuilder(props) {

   const data = props.data; //array

   const listArea = data.map(function(area) {
      const objectField = {
               select: Select,
               // checkbox: Checkbox,
               text: InputHooks
      }
      const Component = objectField[area.type];
      return <Component key={area.name}
         name={area.name}
         type={area.type}
         required={area.required}
         placeholder={area.placeholder}
         options={area.options}
         validations={area.validations}
      />
   });

   return (
      <div className="form_build">
         {listArea}
      </div>
   )
}

export default FormBuilder;