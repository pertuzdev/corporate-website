import React from "react";

import { useStaticQuery, graphql } from "gatsby";

import { ImgContainer, ImgStyled } from "./Image.styles";

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      coverImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      rocketImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      client1: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      client2: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      client3: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>;
  }

  return (
    <ImgContainer width={width} height={height} isCard={isCard}>
      <ImgStyled
        fluid={data.placeholderImage.childImageSharp.fluid}
        alt={alt}
      />
    </ImgContainer>
  );
};

export default Image;
