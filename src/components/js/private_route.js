import {
   Navigate
} from "react-router-dom";

function PrivateRoute ({component: Component, authed, authedName}) {

   if (authed === true) {
      return <Component authedName={authedName}/>
   } else {
      return (
      <Navigate to={{pathname: '/login'}} />
      )
   }
}

export default PrivateRoute;