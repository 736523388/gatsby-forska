import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { navLinks, navLinkItem, navLinkText } from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <header className="py-6 dark:bg-slate-500/20 bg-slate-700 flex flex-row items-center justify-center shadow-md">
        <Link to="/blog" className="font-semibold text-yellow-500 text-center">
          {data.site.siteMetadata.title}
        </Link>
      </header>
      <nav className="sm:w-5/6 md:w-3/4 max-w-[720px] m-auto min-h-[72px]">
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <div className="sm:w-5/6 md:w-3/4 max-w-[720px] m-auto min-h-[500px]">
        {children}
      </div>
    </div>
  );
};

export default Layout
