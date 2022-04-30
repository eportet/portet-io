import styled from "styled-components";

export const Container = styled.div`
  padding: 0 2rem;
`;

export const Main = styled.main`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.footer`
  display: flex;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid ${({ theme }) => theme.backgroundTertiary};
  justify-content: center;
  align-items: center;

  gap: 1.5rem;
`;

export const FooterItem = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.primary};

  transition: color 0.15s ease;

  &:hover,
  &:focus,
  &:active {
    color: ${({ theme }) => theme.secondary};
  }
`;

export const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;

  &:hover,
  &:focus,
  &:active {
    text-decoration: underline;
  }
`;

export const Info = styled.p`
  margin: 4rem 0;
  padding: 0.75rem;
  gap: 0.75rem;
  background: ${({ theme }) => theme.backgroundSecondary};
  border-radius: 5px;

  text-align: center;
  line-height: 1.5;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
