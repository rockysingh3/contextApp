import React, { Component, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";

// class Navbar extends Component {
//   render() {
//     return (
//       <AuthContext.Consumer>
//         {(authcontext) => (
//           <ThemeContext.Consumer>
//             {(themecontext) => {
//               // destructure the state from context
//               const { isLightTheme, light, dark } = themecontext
//               const { Auth, toggleAuth } = authcontext
//               const theme = isLightTheme ? light : dark
//               return (
//                 // using the globle state
//                 <nav style={{ background: theme.ui, color: theme.syntax }}>
//                   <h1>Context App</h1>
//                   <div onClick={toggleAuth}>
//                   { Auth ? 'You are logged in' : 'You are logged out'}
//                   </div>
//                   <ul>
//                     <li className="container">Home</li>
//                     <li>About</li>
//                     <li>Content</li>
//                   </ul>
//                 </nav>
//               );
//             }}
//           </ThemeContext.Consumer>
//         )}
//       </AuthContext.Consumer>
//     );
//   }
// }


const Navbar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { Auth, toggleAuth } = useContext(AuthContext);
  const theme = isLightTheme ? light : dark;

  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Context App</h1>
      <div onClick={toggleAuth}>
        {Auth ? "You are logged in" : "You are logged out"}
      </div>
      <ul>
        <li className="container">Home</li>
        <li>About</li>
        <li>Content</li>
      </ul>
    </nav>
  );
};

export default Navbar;
