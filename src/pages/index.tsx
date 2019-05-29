import * as React from 'react';
import {DefaultLayout} from '../layouts/index';
import { Row } from 'react-bootstrap';
import { Hero } from '../components/homepage/Hero';
import { TopCTA } from '../components/homepage/TopCTA';

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string,
      },
    },
  };
}

export default function() {
  return (
    <DefaultLayout>
      <Hero/>
      <TopCTA/>
    </DefaultLayout>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
