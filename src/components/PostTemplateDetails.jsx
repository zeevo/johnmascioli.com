import React from 'react';
import { Link } from 'gatsby';
import Header from './Header';
import moment from 'moment';
import './style/posttemplatedetails.scss';

class PostTemplateDetails extends React.Component {
  render() {
    const { subtitle, author, title } = this.props.data.site.siteMetadata;
    const post = this.props.data.markdownRemark;
    const { background } = this.props.data.markdownRemark.frontmatter;

    console.log(post);
    return (
      <React.Fragment>
        <Header background={background.publicURL} title={post.frontmatter.title} {...this.props}></Header>
        <article className="post">
          <section
            className="longform drop container container--narrow"
            dangerouslySetInnerHTML={{ __html: post.html + '<hr />' }}
          ></section>
          <div className="container container--narrow">
            <Link className="button" to="/">
              Read more posts
            </Link>
          </div>
        </article>
      </React.Fragment>
    );
  }
}

export default PostTemplateDetails;
