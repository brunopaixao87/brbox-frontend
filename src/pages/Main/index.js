import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import api from '../../services/api';
import './styles.css';

export default class Main extends Component {
  
  state = {
    newBox: ''
  }
  handleInputChange = (event) => {
    this.setState({newBox: event.target.value }); 
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const response = await api.post('boxes', {
      title: this.state.newBox,
    });
    
    this.props.history.push(`/box/${response.data._id}`);

  }

  render() {
    return (
      <div id="main-container">
        <form onSubmit={this.handleSubmit}>
          <div className="logo">
             <img src={logo} alt="" />
          </div>
          <input placeholder="Criar um box" 
            value={this.state.newBox}
            required
            onChange={this.handleInputChange} />
          <button type="submit">Criar</button>
        </form>
      </div>
    );
  }
}
