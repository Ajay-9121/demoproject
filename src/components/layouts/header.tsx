import * as React from "react";
import Cta from "../commons/cta";

  

  const Header = (props:any) => {
    const linkDoms = props._site.c_headerMenu.menu.map((link:any) => (
      <div className="menu-link" key={link.label}>
        <a href={link.url} >
          {link.label}
        </a>
      </div>
    ));

  return (
    <>
      <div className="header-menu">
        <nav className="py-3 flex items-center justify-between">
          
            <a href="#"><div className="flex gap-x-10 text-lg font-semibold">{linkDoms}</div></a>
          
        </nav>
      </div>
    </>
  );
};

export default Header;
