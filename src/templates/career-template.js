import React from 'react';
import { graphql } from 'gatsby';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Timeline from '../components/Timeline';

const CareerTemplate = ({ data }) => {
  const { title: siteTitle, subtitle: siteSubtitle } = data.site.siteMetadata;
  const { publicURL } = data.url;
  const { fixed } = data.aws.childImageSharp;

  return (
    <Layout
      title="career"
      ogpTitle={siteTitle}
      description={siteSubtitle}
      type="website"
      image={publicURL}
    >
      <Sidebar />
      <Timeline fixed={fixed} />
    </Layout>
  );
};

export const query = graphql`
  query CareerQuery {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
    url: file(relativePath: { eq: "site-logo.png" }) {
      publicURL
    }
    aws: file(relativePath: { eq: "aws_saa_badge.png" }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default CareerTemplate;
