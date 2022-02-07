import {
   Navigate
} from "react-router-dom";

function PrivateRoute ({component: Component, authed}) {

   if (authed === true) {
      return <Component/>
   } else {
      return (
      <Navigate to={{pathname: '/login'}} />
      )
   }
}

export default PrivateRoute;