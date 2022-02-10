import foto from '../images/mikaela_shiffrin.jpg';
// import FormBuilder from './FormBuilder/FormBuilder';
// import propsField from "../control/props_field.js";

function Dashboard(props) {
   return (
      <div>
         <div className="information_card">
            <h1><b>FIS Alpine Ski</b> World Cup</h1>
            <h4>Athletes:</h4>
            <p>Mikaela Shiffrin</p>
            <p><img src={foto} alt="mikaela" width="100%"></img></p>
         </div>
         {/* <FormBuilder data={propsField}/> */}
      </div>
   )
}

export default Dashboard;