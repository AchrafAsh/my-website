import React, { useState } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import ProjectModal from '../components/ProjectModal';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      flipsThumbnail: file(relativePath: { eq: "shooot-flips.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      flipsAbout: file(relativePath: { eq: "flipsapp-about.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      flipsApp: file(relativePath: { eq: "flipsapp-app.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      kindleshareThumbnail: file(relativePath: { eq: "shooot-kindle.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      covidThumbnail: file(relativePath: { eq: "shooot-covid.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      heroPic: file(relativePath: { eq: "AGP.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
          fixed(height: 100) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
      allMdx(limit: 3, sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            id
            excerpt
            timeToRead
            frontmatter {
              title
              author
              date(fromNow: true)
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const projects = [
    {
      title: 'France COVID API & Dashboard - April 2020',
      subtitle: 'GraphQL API & D3 Visualization',
      thumbnail: data.covidThumbnail.childImageSharp.fluid,
      description:
        "A GraphQL API for France COVID-19 images. I've added a React client to showcase what is possible to make with that API. I used D3.js for images Visualization.",
      link: 'http://covidfranceapi.herokuapp.com'
    },
    {
      title: 'Flips - March 2020',
      subtitle: 'Fast & responsive Landing Page',
      thumbnail: data.flipsThumbnail.childImageSharp.fluid,
      description:
        "This is my first real-case project. I've met these two amazing students at my school who are building this really cool app called Flips. The point is to match like-minded students at an event on a common interest.",
      link: 'https://flipsapp.fr',
      images: [data.flipsAbout.childImageSharp.fluid, data.flipsApp.childImageSharp.fluid]
    },
    {
      title: 'KindleShare - January 2020',
      subtitle: 'Web App',
      thumbnail: data.kindleshareThumbnail.childImageSharp.fluid,
      description:
        "My first project from scratch. This is a web app to: see your Kindle ebooks, browse through your Highlights, share your thoughts and highlights, explore inpiring people's libraries. Discover it now (id: test2@test.com | pwd: test)",
      link: 'http://kindleshare.herokuapp.com'
    }
  ];

  return (
    <Layout>
      <SEO
        title="Achraf ASH"
        description="French engineering student, freelance, maker, looking to help you kickstart your activity with awesome websites, web apps and mobile apps."
      />
      <Hero>
        <HeroText>
          <Fade top>
            <h1>
              Bonjour 👋
              <br />
              I'm Achraf Ait Sidi Hammou (ASH)
            </h1>
            <h1>
              Student.
              <br />
              Freelance.
              <br />
              Maker.
            </h1>
            <ContactButton
              rel="noreferrer"
              target="_blank"
              href="mailto:aitsidihammou.achraf@gmail.com"
            >
              Say Hello
            </ContactButton>
          </Fade>
        </HeroText>
        <BackShape />
        <HeroImage>
          <Fade right>
            <HeroPic fluid={data.heroPic.childImageSharp.fluid} />
          </Fade>
        </HeroImage>
      </Hero>
      <AboutSection id="about">
        <Fade right>
          <PictureThumbnail>
            <Img fixed={data.heroPic.childImageSharp.fixed} />
          </PictureThumbnail>
          <p>
            Hi there! My name is Achraf Ait Sidi Hammou (
            <a href="https://twitter.com/achrafnotashraf">@achrafash</a>), I'm a french 🇫🇷
            engineering student at ENSTA Paris.
            <br />
            My goal is to become a Slasheur, i.e cumulating several activities:
            <br />
            <mark
              style={{
                fontFamily: 'var(--serif)',
                backgroundColor: 'rgba(248,213,126, 0.4)',
                borderRadius: '3px',
                color: 'black'
              }}
            >
              Student / Freelance / IndieMaker
            </mark>
          </p>
        </Fade>
      </AboutSection>
      <ProjectSection id="projects">
        {projects &&
          projects.map((project, index) => (
            <ProjectCard
              key={index}
              thumbnail={project.thumbnail}
              title={project.title}
              subtitle={project.subtitle}
              images={project.images}
              description={project.description}
              link={project.link}
            />
          ))}
      </ProjectSection>
      <ContactSection id="contact">
        You need help for your web or mobile project?
        <a target="_blank" rel="noreferrer" href="mailto:aitsidihammou.achraf@gmail.com">
          let me know!
        </a>
      </ContactSection>
      {/* <BlogSection>
        {data.allMdx.edges.map(({ node }, index) => {
          return (
            <Fade bottom key={node.id}>
              <Link to={`blog/${node.fields.slug}`}>
                <PostWrapper index={index}>
                  <h1>{node.frontmatter.title}</h1>
                  <small>
                    {node.frontmatter.date} • {node.timeToRead} min read
                  </small>
                  <p>{node.excerpt}</p>
                </PostWrapper>
              </Link>
            </Fade>
          );
        })}
        <ReadMore to="/blog">Read More</ReadMore>
      </BlogSection> */}
    </Layout>
  );
};
export default IndexPage;

const Hero = styled.section`
  width: 100%;
  height: 80vh;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 20vh 0 0 0;
  background-color: var(--mainColor);
  box-shadow: 0px 1px 2px var(--shadow);
  transition: background-color 0.5s, box-shadow 0.5s;
  @media only screen and (min-width: 990px) {
    padding: 40px 40px 120px 40px;
    grid-template-columns: 1fr 1fr;
  }
`;
const HeroText = styled.div`
  grid-column: 2;
  width: 100%;
  max-width: 500px;
  max-height: 300px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 32px;
  padding: 24px 0;
  border-radius: 4px;
  h1:first-child {
    font-family: var(--sans-serif);
    font-size: 1.2em;
    font-weight: lighter;
    letter-spacing: 1px;
  }
  h1:last-child {
    font-family: var(--serif);
    font-size: 1.5em;
  }
  .react-reveal:last-child {
    place-self: center start;
  }
  @media only screen and (min-width: 990px) {
    grid-column: 1;
    place-self: center end;
  }
`;
const ContactButton = styled.a`
  grid-row: 3;
  background-color: var(--black);
  color: var(--fontNegativeColor);
  padding: 8px 16px;
  text-align: center;
  font-family: var(--sans-serif);
  font-size: 1.2em;
  transition: background 0.3s;
  &:hover {
    background: var(--coral);
    color: var(--fontNegativeColor);
    transition: 0.3s;
  }
  @media only screen and (min-width: 990px) {
    padding: 16px;
  }
`;
const PictureThumbnail = styled.div`
  border-radius: 50%;
  height: 100px;
  width: 100px;
  overflow: hidden;
  display: flex;
  border: 4px solid var(--coral);
  margin-bottom: 24px;
`;

const HeroImage = styled.div`
  display: none;
  @media only screen and (min-width: 990px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-column: 2;
    grid-row: 1;
  }
`;
const HeroPic = styled(Img)`
  display: block;
  grid-column: 1;
  grid-row: 1;
  max-height: 400px;
  max-width: 600px;
  &::before {
    content: '';
    display: block;
    position: absolute;
    z-index: 10;
    height: 100%;
    width: 100%;
    background: var(--carbon);
    opacity: 0.5;
    transition: opacity 0.5s;
  }
  &:hover::before {
    opacity: 0.1;
    transition: opacity 0.5s;
  }
`;
const BackShape = styled.div`
  display: none;
  @media only screen and (min-width: 990px) {
    display: block;
    grid-column: 2;
    grid-row: 1;
    background: var(--coral);
    width: 100%;
    height: calc(50vh + 2 * 80px);
    place-self: start start;
    transform: translate(40px, -80px);
  }
`;

const AboutSection = styled.section`
  width: 100%;
  max-width: 1350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 120px 16px;
  border-top: solid 1px white;
  @media only screen and (min-width: 700px) {
    padding: 200px 16px;
  }
  @media only screen and (min-width: 860px) {
    padding: 200px 40px;
  }
  p {
    font-family: var(--sans-serif);
    font-weight: lighter;
    text-align: center;
    line-height: 1.5;
  }
`;
const ProjectSection = styled.section`
  width: 100%;
  max-width: 1350px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  margin: 0 auto;
  padding: 120px 16px;
  border-top: solid 1px white;
  @media only screen and (min-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 200px 16px;
  }
  @media only screen and (min-width: 860px) {
    padding: 200px 40px;
    grid-template-columns: repeat(3, 1fr);
  }
`;
const ProjectCard = ({ thumbnail, title, subtitle, images, description, link }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <ProjectThumbnail>
      <div onClick={() => setToggle(!toggle)}>
        <Fade bottom>
          <Thumbnail fluid={thumbnail} />
        </Fade>
      </div>
      <ProjectModal
        thumbnail={thumbnail}
        title={title}
        subtitle={subtitle}
        images={images}
        description={description}
        link={link}
        toggle={toggle}
        setToggle={setToggle}
      />
    </ProjectThumbnail>
  );
};

const ProjectThumbnail = styled.div`
  place-self: start center;
  width: 100%;
  max-width: 500px;
  a {
    transition: color 0.5s;
  }
`;

const Thumbnail = styled(Img)`
  cursor: pointer;
  &::before {
    content: '';
    display: block;
    position: absolute;
    z-index: 10;
    height: 100%;
    width: 100%;
    background: var(--carbon);
    opacity: 0.5;
    transition: opacity 0.5s;
  }
  &:hover::before {
    opacity: 0.1;
    transition: opacity 0.5s;
  }
`;

// const BlogSection = styled.div`
//   width: 100%;
//   max-width: 1350px;
//   height: 100%;
//   padding: 16px;
//   margin: 0 auto;
//   border-top: solid 1px white;
//   display: grid;
//   grid-template-columns: repeat(1, 1fr);
//   gap: 16px;
//   @media only screen and (min-width: 700px) {
//     grid-template-columns: repeat(2, 1fr);
//     padding: 40px 16px;
//   }
//   @media only screen and (min-width: 860px) {
//     grid-template-columns: repeat(3, 1fr);
//     padding: 40px;
//   }
// `;

// const PostWrapper = styled.div`
//   background-color: ${props =>
//     props.index === 0 ? `var(--carbon)` : props.index === 1 ? `var(--coral)` : `white`};
//   p,
//   h1 {
//     color: ${props => (props.index === 2 ? `black` : `white`)};
//   }
//   max-width: 100%;
//   padding: 32px;
//   cursor: pointer;
//   h1 {
//     font-family: var(--serif);
//     font-size: 1.5em;
//     padding: 16px 0;
//   }
//   p {
//     font-family: var(--sans-serif);
//     font-weight: lighter;
//     padding: 8px 0;
//     line-height: 1.5;
//   }
//   small {
//     font-family: var(--serif);
//     text-transform: uppercase;
//     color: grey;
//   }
//   @media only screen and (min-width: 760px) {
//     place-self: start stretch;
//     height: 100%;
//   }
// `;
// const ReadMore = styled(Link)`
//   grid-column: 1;
//   place-self: center center;
//   background-color: var(--black);
//   color: var(--fontNegativeColor);
//   padding: 8px 16px;
//   text-align: center;
//   font-family: var(--sans-serif);
//   font-size: 1.2em;
//   transition: background 0.3s;
//   &:hover {
//     background: var(--coral);
//     color: var(--fontNegativeColor);
//     transition: 0.3s;
//   }
//   @media only screen and (min-width: 700px) {
//     grid-column: span 2;
//   }
//   @media only screen and (min-width: 860px) {
//     grid-column: span 3;
//   }
// `;

const ContactSection = styled.section`
  width: 100%;
  padding: 40px;
  background: black;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  font-family: var(--sans-serif);
  font-size: 1.5em;

  a {
    color: white;
    margin-top: 24px;
  }
  a::before {
    content: '👉';
    margin-right: 16px;
  }
  a:hover::before {
    animation: yoyo 1s infinite;
  }

  @media only screen and (min-width: 700px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 80px;
    a {
      margin-top: 0;
    }
  }
  @media only screen and (min-width: 860px) {
  }

  @keyframes yoyo {
    0% {
      margin-right: 16px;
    }
    50% {
      margin-right: 4px;
    }
    100% {
      margin-right: 16px;
    }
  }
`;
