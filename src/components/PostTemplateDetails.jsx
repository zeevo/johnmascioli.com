import React from 'react';
import { Link } from 'gatsby';
import Header from './Header';
import moment from 'moment';
import './style/posttemplatedetails.scss';

class PostTemplateDetails extends React.Component {
  render() {
    const { subtitle, author, title } = this.props.data.site.siteMetadata;
    const post = this.props.data.markdownRemark;
    const tags = post.fields.tagSlugs;

    return (
      <React.Fragment>
        <Header title={post.frontmatter.title} {...this.props}></Header>
        <article className="post">
          <section
            className="longform drop container container--narrow"
            dangerouslySetInnerHTML={{ __html: post.html + '<hr />' }}
          ></section>
          <div className="container container--narrow"></div>
        </article>
      </React.Fragment>
    );
  }
}

export default PostTemplateDetails;
