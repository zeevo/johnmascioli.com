import Header from './Header';
import React from 'react';
import PostPreview from './PostPreview';
import Categories from './Categories';
import Feed from './Feed';

const Blog = props => {
  const len = props.data.allMarkdownRemark.edges.length;
  const { categories } = props.data.site.siteMetadata;

  console.log(props);
  return (
    <React.Fragment>
      <Header title="Blog" {...props}>
        <Categories categories={categories} />
      </Header>
      <main className="container container--narrow js-blog-posts">
        <Feed posts={props.data.allMarkdownRemark.edges} />
      </main>
    </React.Fragment>
  );
};

export default Blog;
