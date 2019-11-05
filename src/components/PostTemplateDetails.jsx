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

    console.log(post);
    const tagsBlock = (
      <div className="post-single__tags">
        <ul className="post-single__tags-list">
          {tags &&
            tags.map((tag, i) => (
              <li className="post-single__tags-list-item" key={tag}>
                <Link to={tag} className="post-single__tags-list-item-link">
                  {post.frontmatter.tags[i]}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    );

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

export default PostTemplateDetails;
