import React from 'react';
import Navbar from './Navbar';
import defaultBackground from '../../static/background.jpg';

export default function Header(props) {
  const { title, author, menu } = props;
  const background = props.background || defaultBackground;
  const style = {
    backgroundImage: `url(${background})`,
  };
  return (
    <header className="header header--cover" style={style}>
      <Navbar {...props.data.site.siteMetadata} />
      <section className="header__header container">
        <h1>{title}</h1>
      </section>
      {props.children}
    </header>
  );
}
