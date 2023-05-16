import * as React from "react";
import Footer from "./footer";
import Nav from "./Nav";
import Header from "./header";
import Topbar from './Topbar'
type Props = {
    title?: string;
    _site?: any;
    global:any;
    children?: React.ReactNode;
};
  
  const PageLayout = ({
    title,
    _site,
    global,
    children,
  }: Props) => {
    return (
        <>
        <Topbar _site={_site} />
      <Header _site={_site} />
                {children}
      <Footer _site={_site} />
        </>
    );
  };

export default PageLayout;
  