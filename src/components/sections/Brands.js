import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import { ReactComponent as LocalLogicLogo } from '@images/logos/locallogic.svg';
import { ReactComponent as LandrLogo } from '@images/logos/landr.svg';
import { ReactComponent as GameloftLogo } from '@images/logos/gameloft.svg';

const LOGOS = [
  {
    logo: GameloftLogo,
    link: 'https://gameloft.com',
  },
  {
    logo: LandrLogo,
    link: 'https://landr.com',
  },
  {
    logo: LocalLogicLogo,
    link: 'https://locallogic.co',
  },
];

const UsedBy = () => (
  <StaticQuery
    query={graphql`
      query {
        art_story: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "tell_story" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="past" accent>
        <StyledContainer>
          <StyledDiv>
            <h1>Decade of experience<br/>at companies like</h1>
            <LogoGrid>
              {LOGOS.map(({ logo, link }) => (
                <ExternalLink key={link} href={link}>
                  {logo()}
                </ExternalLink>
              ))}
            </LogoGrid>
          </StyledDiv>
          <Art>
            <Img fluid={data.art_story.childImageSharp.fluid} />
          </Art>
        </StyledContainer>
      </Section>
    )}
  />
);

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 48px;
  justify-items: center;
  margin-top: 48px;

  a {
    svg {
      width: 100%;
      max-height: 92px;
      max-width: 276px;
      color: #FFFFFF;
    }
  }

  a:hover {
    svg {
      color: #D2B274;
    }
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
  }
`;

const StyledDiv = styled.div`
  max-width: 50%;
  text-align: center;
  @media (max-width: ${props => props.theme.screen.md}) {
    max-width: 100%;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
  position: relative;
  color: ${props => props.theme.color.black.regular};

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-content: center;
  }
`;

const Art = styled.figure`
  width: 600px;
  position: absolute;
  top: -12%;
  right: 50%;

  @media (max-width: ${props => props.theme.screen.lg}) {
    top: 0;
    right: 65%;
    width: 500px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    display: none;
  }
`;

export default UsedBy;
