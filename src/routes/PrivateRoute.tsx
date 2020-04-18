import React from 'react'
import { 
  Route,
  Redirect 
} from 'react-router-dom'
import { isAuth } from '../utils/auth'


const PrivateRoute = ({ component: Component, ...rest }: any) => {
  return isAuth(rest.authority) ? (
   <Route
      {...rest}
    />
  ) : (
    <Redirect to={{ pathname: '/user/auth', state: { from: rest.location } }} />
  )
}
// const PrivateRoute = ({ component: Component, ...rest }: any) => {
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         localStorage.getItem('token') ? (
//           <Component {...props} />
//         ) : (
//           <Redirect
//             to={{ pathname: '/login', state: { from: props.location } }}
//           />
//         )
//       }
//     />
//   )
// }

export default PrivateRoute
