import React, { Component } from 'react';
import Navbar from './Navbar';

export default class Header extends Component {
  render() {
    const { title } = this.props;
    return (
      <header
        class="header header--cover bg-purple"
        // style=/* TODO background image here
      >
        <Navbar />

        <section class="header__header container">
          <h1>{title}</h1>
        </section>

        {this.props.children}
      </header>
    );
  }
}
