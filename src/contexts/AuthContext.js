import React, { Component, createContext } from "react";

export const AuthContext = createContext();

export default class AuthContextProvider extends Component {
  state = {
    Auth: false,
  };

  toggleAuth = () => {
    this.setState({ Auth: !this.state.Auth });
  };

  render() {
    return (
      <AuthContext.Provider
        value={{ ...this.state, toggleAuth: this.toggleAuth }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
