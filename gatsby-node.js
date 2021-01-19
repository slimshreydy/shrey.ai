const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const aboutTemplate = path.resolve(
    'src/templates/aboutTemplate.jsx'
  );
  const blogPostTemplate = path.resolve(
    'src/templates/blogPostTemplate.jsx'
  );

  const postsPromise = graphql(`
    {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { published: { eq: true } }, fields: { sourceInstanceName: { eq: "posts" } } }
      ) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    const posts = result.data.allMdx.nodes;

    // create page for each mdx node
    posts.forEach((post, index) => {
      const previous =
        index === posts.length - 1 ? null : posts[index + 1];
      const next = index === 0 ? null : posts[index - 1];

      createPage({
        path: post.fields.slug,
        component: blogPostTemplate,
        context: {
          slug: post.fields.slug,
          previous,
          next,
        },
      });
    });
  });

  return postsPromise;
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    const parentNode = getNode(node.parent);
    let slug;
    if (parentNode.sourceInstanceName == "about") {
      slug = "about"
    } else {
      slug = createFilePath({ node, getNode });
    }
    createNodeField({
      name: `slug`,
      node,
      value: slug,
    });
    createNodeField({
      name: `sourceInstanceName`,
      node,
      value: parentNode.sourceInstanceName,
    });
  }
};
