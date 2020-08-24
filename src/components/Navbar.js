import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar extends Component {

    static contextType = ThemeContext

    render() { 
        // destructure the state from context 
        const { isLightTheme, light, dark } = this.context
        const theme = isLightTheme ? light : dark
        return (  
            
            // using the globle state 
            <nav style={{ background: theme.ui, color: theme.syntax }}>
                <h1>Context App</h1>
                <ul>
                    <li className="container">Home</li>
                    <li>About</li>
                    <li>Content</li>
                </ul>
            </nav>
        );
    }
}
 
export default Navbar