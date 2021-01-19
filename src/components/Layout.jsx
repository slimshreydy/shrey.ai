import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import {Helmet} from "react-helmet";
import styled from 'styled-components';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import { Header } from './Header';
import 'fontsource-raleway/400.css';
import 'fontsource-taviraj/500.css';
import 'fontsource-taviraj/600.css';
import '../styles/base.css';

const App = styled(Container)`
  max-width: 700px;
  background-color: rgba(var(--pure-white), 0.3);
  color: rgb(var(--text));
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
`;

export const Layout = ({ children }) => {
  const { title } = useSiteMetadata();
  return (
    <App>
      <Helmet>
        <title>Shrey Gupta</title>
      </Helmet>
      <Header siteTitle={title} />
      <Container>
        {children}
      </Container>
    </App>
  );
};
