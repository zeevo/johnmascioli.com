import React from 'react';
import moment from 'moment';

export default function PostPreview({ post }) {
  const { title, date, category, description } = post.node.frontmatter;
  const { slug, categorySlug } = post.node.fields;
  const { timeToRead } = post.node;

  return (
    <article className="post-preview">
      <header className="post-preview__header">
        <h2>
          <a href={slug}>{title}</a>
        </h2>
        <small className="post__meta">
          <time dateTime={moment(date).format('MMMM D, YYYY')} className="faded">
            {moment(date).format('MMMM D, YYYY')}
          </time>
        </small>
      </header>
      <section className="longform longform--short">
        <p>{description}</p>
      </section>

      <a href={slug} className="button faded">
        Read more
      </a>
    </article>
  );
}
