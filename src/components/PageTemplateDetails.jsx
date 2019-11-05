import React from 'react';
import Header from './Header';
// import './style/pagetemplatedetails.scss';

class PageTemplateDetails extends React.Component {
  render() {
    const page = this.props.data.markdownRemark;
    const { title } = page.frontmatter;
    const { html } = page;
    return (
      <React.Fragment>
        <Header title={title}></Header>
        <article className="post">
          <section className="longform drop container container--narrow">
            <p></p>
            <div
              className="page__body"
              /* eslint-disable-next-line react/no-danger */
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </section>
        </article>
      </React.Fragment>
    );
  }
}

export default PageTemplateDetails;
