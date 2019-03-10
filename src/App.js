import React, { Component } from 'react';
import './App.css';
import {connect} from "react-redux";
import {updateUser} from "./redux/action";

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <p>{this.props.users.user}</p>
        <button onClick={() => this.props.updateUser('KIM')}>change name</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
  users: state.users
});

const mapActionToProps = (dispatch) => ({
  updateUser: (name) => dispatch(updateUser(name))
});

// curring function
export default connect(mapStateToProps, mapActionToProps)(App);
