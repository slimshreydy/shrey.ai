import { graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { Layout } from '../components/Layout';

const PostWrapper = styled.div``;

export default ({ data }) => {
  const posts = data.allMdx.nodes;
  if (posts.length === 0) {
    return (
      <Layout>
        I just started up this blog so there's no posts yet. Check back soon!
      </Layout>
    )
  }

  return (
    <Layout>
      {posts.map(
        ({ id, excerpt, frontmatter, fields }) => (
          <PostWrapper key={id}>
            <Link to={fields.slug}>
              <h1>{frontmatter.title}</h1>
              <p>{frontmatter.date}</p>
              <p>{excerpt}</p>
            </Link>
          </PostWrapper>
        )
      )}
    </Layout>
  );
};


export const query = graphql`
  query BLOG_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } }, fields: { sourceInstanceName: { eq: "posts" } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date
        }
        fields {
          slug
        }
      }
    }
  }
`;
