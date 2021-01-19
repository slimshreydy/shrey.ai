import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import {Helmet} from "react-helmet";
import styled from 'styled-components';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import { Header } from './Header';
import '../styles/base.css';

const App = styled(Container)`
  max-width: 700px;
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
