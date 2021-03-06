import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

// export default class ThemeToggle extends Component {
//   static contextType = ThemeContext;

//   render() {
//     console.log(this.context);

//     const { toggleTheme } = this.context;

//     return <button onClick={toggleTheme}>Toggle the theme</button>;
//   }
// }

const ThemeToggle = () => {

  const { toggleTheme } = useContext(ThemeContext)

  return (  
    <button onClick={toggleTheme}>Toggle the theme</button>
  )
}
 
export default ThemeToggle;
