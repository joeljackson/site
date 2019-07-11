import * as React from 'react';
import {DefaultLayout} from '../layouts/index';
import { Hero } from '../components/homepage/Hero';
import { TopCTA } from '../components/homepage/TopCTA';
import { Modalities } from '../components/homepage/Modalities';
import { MeetTheTeam } from '../components/homepage/MeetTheTeam'
import { graphql } from 'gatsby';
import { string } from 'prop-types';

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string,
      },
    },
    allContentfulModality: {
      edges: {
        node: {
          id: string,
          name: string,
          icon: {
            id: string,
            file: {
              url: string,
            },
          },
        },
      },
    },
  };
}

export default function({data}) {
  console.log(data);
  return (
    <DefaultLayout>
      <Hero/>
      <TopCTA/>
      <Modalities modalities={data.allContentfulModality.edges}/>
      <MeetTheTeam biohackers={data.allContentfulBiohacker.edges}/>
    </DefaultLayout>
  );
}

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulModality {
      edges {
        node {
          id
          name
          slug
          icon {
            id
            file {
              url
            }
          }
        }
      }
    }
    allContentfulBiohacker {
      edges {
        node {
          id
          showOnHomepage
          shortBio {
            shortBio
          }
          photo {
            id
            file {
              url
            }
          }
        }
      }
    }
  }
`;
