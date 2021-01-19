import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import {MDXProvider} from '@mdx-js/react'
import React from 'react';
import styled from 'styled-components';
import { Layout } from '../components/Layout';

const StyledH1 = styled.h1`
  font-size: 1.75rem;
`

const HeroH1 = styled(StyledH1)`
  font-weight: 700;
`

// Source: https://codepen.io/Wking/pen/BdmpVx
const StyledA = styled.a`
  color: rgb(var(--text));
  text-decoration: none;
  background-image: linear-gradient(rgba(var(--accent), 0.5), rgba(var(--accent), 0.5));
  background-repeat: no-repeat;
  background-size: 100% 0.2em;
  background-position: 0 91%;
  transition: background-size 0.25s ease-in, color 0.25s ease-in;
  &:hover, &:focus {
    background-image: linear-gradient(rgb(var(--accent)), rgb(var(--accent)));
    background-size: 100% 91%;
    text-decoration: none;
    color: rgb(var(--white));
  }
`

export default ({ data }) => {
  const { body } = data.mdx;
  return (
    <Layout>
      <MDXProvider components={{
        a: StyledA,
        h1: StyledH1,
        HeroH1: HeroH1,
      }}>
        <MDXRenderer >{body}</MDXRenderer>
      </MDXProvider>
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
