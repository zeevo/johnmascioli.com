import React from 'react';
import Header from './Header';
import PostPreview from './PostPreview';
import Categories from './Categories';
import Feed from './Feed';

const CategoryTemplateDetails = props => {
  const { category } = props.pageContext;
  const { edges } = props.data.allMarkdownRemark;
  const { categories } = props.data.site.siteMetadata;

  return (
    <React.Fragment>
      <Header title={category} {...props}>
        <Categories categories={categories} />
      </Header>
      <main className="container container--narrow">
        <Feed posts={edges} />
      </main>
    </React.Fragment>
  );
};

export default CategoryTemplateDetails;
