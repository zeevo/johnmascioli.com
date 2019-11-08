import React from 'react';
import { Link } from 'gatsby';
import Header from './Header';
import PostPreview from './PostPreview';
import Categories from './Categories';

const Filter = ({ topic }) => {
  return (
    <li className="header__tab">
      <Link to={`/categories/${topic.toLowerCase()}`} className="header__tab__link faded faded--60">
        {topic}
      </Link>
    </li>
  );
};

const CategoryTemplateDetails = props => {
  const { category } = props.pageContext;
  const posts = props.data.allMarkdownRemark.edges;
  return (
    <React.Fragment>
      <Header title={category} {...props}>
        <Categories />
      </Header>
      <main className="container container--narrow js-blog-posts">
        {posts.map(post => {
          return <PostPreview post={post} />;
        })}
      </main>
    </React.Fragment>
  );
};

export default CategoryTemplateDetails;
