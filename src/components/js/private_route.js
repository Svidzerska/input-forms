import {
   Navigate
} from "react-router-dom";

function PrivateRoute ({component: Component, authed, currentUser}) {
   if (authed === true) {
      return <Component currentUser={currentUser}/>
   } else {
      return (
      <Navigate to={{pathname: '/login'}} />
      )
   }
}

export default PrivateRoute;