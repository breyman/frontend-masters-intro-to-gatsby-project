import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout.js';

export default function AboutPage() {
  return (
    <>
      <Layout title="About" description="About Intro to Gatsby site.">
        <h1>About Brian</h1>
        <Link to="/">Back to home</Link>
      </Layout>
    </>
  );
}
