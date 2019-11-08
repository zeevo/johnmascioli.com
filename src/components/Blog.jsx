import Header from './Header';
import React from 'react';
import { Link } from 'gatsby';
import PostPreview from './PostPreview';

const Filter = ({ topic }) => {
  return (
    <li className="header__tab">
      <Link to={`/categories/${topic.toLowerCase()}`} className="header__tab__link faded faded--60">
        {topic}
      </Link>
    </li>
  );
};

export default function Blog(props) {
  const categories = props.data.allMarkdownRemark.edges.map(edge => {
    return edge.node.frontmatter.category;
  });

  return (
    <React.Fragment>
      <Header title="Blog" {...props}>
        <div className="header__tabs-wrap">
          <div className="container container--narrow">
            <ul className="header__tabs">
              <li className="header__tab">
                <Link to={`/`} className="header__tab__link faded faded--60">
                  All
                </Link>
              </li>
              {categories.map(topic => (
                <Filter key={topic} topic={topic} />
              ))}
            </ul>
          </div>
        </div>
      </Header>
      <main className="container container--narrow js-blog-posts">
        {props.data.allMarkdownRemark.edges.map((edge, i) => {
          return <PostPreview key={i} post={edge} />;
        })}
      </main>
    </React.Fragment>
  );
}
