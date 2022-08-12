import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";

const BlogPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.image_path);
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <div className="flex flex-row justify-center mt-10">
        <div>
          <span className="text-xs px-3 py-1 rounded-full mr-2 dark:bg-teal-100/20 bg-teal-200/20 dark:text-neutral-100/80 text-neutral-700/90">docker</span>
        </div>
      </div>
      <h1 className="text-2xl font-bold text-teal-500/90 mt-5 mx-13 text-center"> {data.mdx.frontmatter.title}</h1>
      <p className="text-teal-500/80 text-xs mt-5 text-center">{data.mdx.frontmatter.date}</p>
      <section className="my-12 px-5 text-slate-900 dark:text-slate-100 scrollbar">
      <GatsbyImage image={image} alt={data.mdx.frontmatter.image_alt} />
      <p className="mb-12">
        Photo Credit:{" "}
        <a href={data.mdx.frontmatter.image_credit_link}>
          {data.mdx.frontmatter.image_credit_text}
        </a>
      </p>
        <article className="min-h-[500px] prose prose-slate dark:prose-invert prose-headings:text-teal-500/70 prose-img:rounded-md prose-img:shadow-lg prose-img:mx-auto prose-img:max-h-[400px] prose-pre:shadow-lg prose-a:text-blue-500/70 prose-blockquote:first-letter:text-3xl prose-blockquote:first-letter:text-yellow-500 max-w-max">
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </article>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        image_alt
        image_credit_link
        image_credit_text
        image_path {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default BlogPost;
