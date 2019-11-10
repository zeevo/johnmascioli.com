import React from 'react';
import Navbar from './Navbar';
import moment from 'moment';
import defaultBackground from '../../static/background.jpg';

export default function Header(props) {
  const { title } = props;
  console.log(props);

  const frontmatter = props.data.markdownRemark ? props.data.markdownRemark.frontmatter : null;
  const background = props.background || defaultBackground;
  const style = {
    backgroundImage: `url(${background})`,
  };
  return (
    <header className="header header--cover" style={style}>
      <Navbar {...props.data.site.siteMetadata} />
      <section className="header__header container">
        <h1>{title}</h1>
        {frontmatter ? moment(frontmatter.date).format('MMMM D, YYYY') : null}
      </section>
      {props.children}
    </header>
  );
}
