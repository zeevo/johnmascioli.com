import React from 'react';
import Header from './Header';
// import './style/pagetemplatedetails.scss';

class PageTemplateDetails extends React.Component {
  render() {
    const page = this.props.data.markdownRemark;
    const { title } = page.frontmatter;
    const { html } = page;
    return (
      <article class="post">
        <section class="longform drop container container--narrow">test</section>
      </article>
    );
  }
}

export default PageTemplateDetails;
