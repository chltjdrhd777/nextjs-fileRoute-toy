import React, { MouseEventHandler, PropsWithChildren } from "react";
import styled, { css } from "styled-components";
import Link from "next/link";

function Index({ link, onClick, children }: PropsWithChildren<ButtonProps>) {
  if (link) {
    return (
      <Link href={link}>
        <a>{children}</a>
      </Link>
    );
  }

  return <S.Button onClick={onClick}>{children}</S.Button>;
}

const S = {
  Button: styled.button`
    width: 25%;
    min-width: 10rem;
    font: inherit;
    padding: 0.25rem 0.5rem;
    background-color: #03be9f;
    border: 1px solid #03be9f;
    color: #dafff7;
    border-radius: 4px;
  `,
};

//# types
interface ButtonProps {
  link?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default Index;
