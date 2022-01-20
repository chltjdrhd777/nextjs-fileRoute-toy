import { PropsWithChildren } from "react";
import styled from "styled-components";

function Index({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <BaseModalContentContainer>{children}</BaseModalContentContainer>
      <BaseBackground></BaseBackground>
    </>
  );
}

const BaseModalContentContainer = styled.div`
  width: 50%;
  height: 50%;
  min-width: 50rem;
  min-height: 50rem;
  background-color: white;
  border-radius: 1rem;
`;

const BaseBackground = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100000;
`;

export default Index;
