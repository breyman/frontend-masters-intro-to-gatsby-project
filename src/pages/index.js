import * as React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Layout from '../components/layout.js';

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query GetBlogPosts {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          frontmatter {
            date(fromNow: true)
            slug
            title
            type
          }
          id
        }
      }
    }
  `);

  const posts = data.allMarkdownRemark.nodes;

  return (
    <>
      <Layout>
        <h1>Hello Gatsby!</h1>
        <p>This is some site content.</p>
        <h3>Check out my recent blog posts</h3>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link>{' '}
              <small>(posted {post.frontmatter.date})</small>
            </li>
          ))}
        </ul>
      </Layout>
    </>
  );
}
