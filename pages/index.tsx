import type { NextPage } from "next";
import Head from "next/head";
import { useTheme } from "styled-components";

import TwitterIcon from "../public/twitter.svg";
import GithubIcon from "../public/github.svg";
import EmailIcon from "../public/email.svg";
import LinkedinIcon from "../public/linkedin.svg";
import {
  Container,
  Footer,
  FooterItem,
  Main,
  Title,
  Link,
  Info,
} from "../styles/components";

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Eduardo Portet</title>
        <meta
          name="description"
          content="Personal website for Eduardo Portet"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍣</text></svg>"
        />
      </Head>

      <Main>
        <Title>Eduardo Portet</Title>
        <Info>
          <span title="work">
            🧑‍💻 - <Link href="https://index.app">Index</Link>
          </span>
          <span title="location">🌎 - SF</span>
        </Info>
      </Main>

      <Footer>
        <FooterItem href="https://github.com/eportet">
          <GithubIcon />
        </FooterItem>
        <FooterItem href="mailto:eduardo@portet.io">
          <EmailIcon />
        </FooterItem>
        <FooterItem href="https://twitter.com/eportet">
          <TwitterIcon />
        </FooterItem>
        <FooterItem href="https://linkedin.com/in/eportet">
          <LinkedinIcon />
        </FooterItem>
      </Footer>
    </Container>
  );
};

export default Home;
