import React from 'react';
import Post from './Post';
import Header from './Header';

const PostPreview = ({ post }) => {
  console.log(post);
  return (
    <article className="post-preview">
      <header className="post-preview__header">
        <h2>
          <a href="/blog/the-spectrum-of-wealth/">Lorem ipsum dolor sit amet, </a>
        </h2>
        <small className="post__meta">
          <time datetime="2019-10-30T14:39:00-04:00" className="faded">
            Oct 30, 2019
          </time>
        </small>
      </header>
      <section className="longform longform--short">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </section>

      <a href="/blog/the-spectrum-of-wealth/" className="button faded">
        Read more
      </a>
    </article>
  );
};

const CategoryTemplateDetails = props => {
  console.log(props);
  const items = [];
  const { category } = props.pageContext;
  const posts = props.data.allMarkdownRemark.edges;
  console.log(posts);
  return (
    <React.Fragment>
      <Header title={category}></Header>
      <main className="container container--narrow js-blog-posts">
        {posts.map(post => {
          <PostPreview post={post} />;
        })}
      </main>
    </React.Fragment>
  );
};

export default CategoryTemplateDetails;
