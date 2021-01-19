import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import { Layout } from '../components/Layout';

export default ({ data }) => {
  const { body } = data.mdx;
  return (
    <Layout>
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  );
};

export const query = graphql`
  query ABOUT_BODY_QUERY {
    mdx(fields: { sourceInstanceName: { eq: "about" } }) {
      body
    }
  }
`;
