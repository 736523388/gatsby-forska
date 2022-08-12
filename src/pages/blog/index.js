import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";

function TagList(props) {
  const {tag} = props;
  if (tag == null) {
    return null;
  }
  return (
    <div>
      {tag.split(",").map((item, index) => (
        <span
          key={index}
          className="text-xs px-3 py-1 rounded-full mr-2 dark:bg-teal-100/20 bg-teal-200/20 dark:text-neutral-100/80 text-neutral-700/90"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map((node) => (
        <div key={node.id} className="px-6 py-5 rounded-md bg-gray-600/10 my-5">
          <h2 className="text-teal-600/80 hover:text-teal-400 first-letter:text-2xl first-letter:text-teal-400 underline text-xl font-semibold">
            <Link to={`/blog/${node.id}`}>{node.frontmatter.title}</Link>
          </h2>
          <p className="text-teal-500/60 text-2xs my-2">
            <span>{node.frontmatter.date}</span>
            <span className="pl-3">355</span>
            <span className="pl-3 font-semibold">category</span>
          </p>
          <TagList tag={node.frontmatter.tag} />
          <p className="dark:text-neutral-400/90 text-neutral-600/90 mt-2 text-sm">
            {node.excerpt}
          </p>
        </div>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          introduction
          tag
        }
        id
        excerpt(pruneLength: 100, truncate: true)
      }
    }
  }
`;

export default BlogPage;
