import type { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";

function HomePage() {
  return (
    <div>
      <StyleTest>Home page</StyleTest>
      <ul>
        <li>
          <Link href="/portfolio">portfolio</Link>
        </li>
        <li>
          <a href="/clients">clients</a>
        </li>
      </ul>
    </div>
  );
}

const StyleTest = styled.div`
  color: ${({ theme }) => theme.colors.mainColor};
`;

export default HomePage;
