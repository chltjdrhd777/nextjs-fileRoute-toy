import React, { PropsWithChildren } from "react";
import MainHeader from "./main-header";

function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
    </>
  );
}

export default Layout;
