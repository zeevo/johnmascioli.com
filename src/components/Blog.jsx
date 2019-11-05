import Header from './Header';
import React from 'react';

const Filter = ({ topic }) => {
  return (
    <li className="header__tab">
      <a href={`/categories/${topic.toLowerCase()}`} className="header__tab__link faded faded--60">
        {topic}
      </a>
    </li>
  );
};

export default function Blog(props) {
  const categories = props.data.allMarkdownRemark.edges.map(edge => {
    return edge.node.frontmatter.category;
  });

  console.log(props);
  return (
    <React.Fragment>
      <Header title="Blog">
        <div className="header__tabs-wrap">
          <div className="container container--narrow">
            <ul className="header__tabs">
              {categories.map(topic => (
                <Filter key={topic} topic={topic} />
              ))}
            </ul>
          </div>
        </div>
      </Header>
      <main className="container container--narrow js-blog-posts">
        <article className="post-preview">
          <header className="post-preview__header">
            <h2>
              <a href="/blog/the-spectrum-of-wealth/">Lorem ipsum dolor sit amet, </a>
            </h2>
            <small className="post__meta">
              <time dateTime="2019-10-30T14:39:00-04:00" className="faded">
                Oct 30, 2019
              </time>
            </small>
          </header>
          <section className="longform longform--short">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </section>

          <a href="/blog/the-spectrum-of-wealth/" className="button faded">
            Read more
          </a>
        </article>
      </main>
    </React.Fragment>
  );
}
