import foto from '../images/mikaela_shiffrin.jpg';
import '../css/dashboard.css'
import Form from './FormBuilder/Form_component';


function Dashboard(props) {
   return (
      <div className='dashboard__information'>
         <div className="information_card">
            <h1><b>FIS Alpine Ski</b> World Cup</h1>
            <h4>Athletes:</h4>
            <p>Mikaela Shiffrin</p>
            <p><img src={foto} alt="mikaela" width="100%"></img></p>
         </div>
         <Form />
      </div>
   )
}

export default Dashboard;