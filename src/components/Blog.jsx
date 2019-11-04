import Header from './Header';
import React, { Component } from 'react';

const Filter = ({ topic }) => {
  return (
    <li class="header__tab">
      <a href={`/tags/${topic}`} class="header__tab__link faded faded--60">
        {topic}
      </a>
    </li>
  );
};

export class Blog extends Component {
  render() {
    const topics = ['thing 1', 'thing 2', 'other thing'];

    return (
      <React.Fragment>
        <Header title="Blog">
          <div class="header__tabs-wrap">
            <div class="container container--narrow">
              <ul class="header__tabs">
                {topics.map(topic => (
                  <Filter topic={topic} />
                ))}
              </ul>
            </div>
          </div>
        </Header>
        <main class="container container--narrow js-blog-posts">
          <article class="post-preview">
            <header class="post-preview__header">
              <h2>
                <a href="/blog/the-spectrum-of-wealth/">Lorem ipsum dolor sit amet, </a>
              </h2>
              <small class="post__meta">
                <time datetime="2019-10-30T14:39:00-04:00" class="faded">
                  Oct 30, 2019
                </time>
              </small>
            </header>
            <section class="longform longform--short">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </section>

            <a href="/blog/the-spectrum-of-wealth/" class="button faded">
              Read more
            </a>
          </article>{' '}
        </main>
      </React.Fragment>
    );
  }
}

export default Blog;
