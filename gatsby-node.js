const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  
  return graphql(`
    query loadPagesQuery {
      allContentfulModality {
        edges {
          node {
            id
            name
            slug
            upgrades {
              id
              name
              slug
            }
            icon {
              id
              file {
                url
              }
            }
          }
        }
      }
      allContentfulUpgrade {
        edges {
          node {
            id
            name
            slug
            description {
              description
            }
          }
        }
      }
    }
  `, { limit: 1000 }).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allContentfulModality.edges.forEach(edge => {
      if(edge.node.slug != null) {
        createPage({
          // Path for this page — required
          path: `/modalities/${edge.node.slug}/`,
          component: path.resolve(`src/templates/modality.tsx`),
          context: {
            modality: edge.node
          },
        });
      }
    });

    result.data.allContentfulUpgrade.edges.forEach(edge => {
      if(edge.node.slug != null) {
        createPage({
          // Path for this page — required
          path: `/upgrades/${edge.node.slug}/`,
          component: path.resolve(`src/templates/upgrade.tsx`),
          context: {
            upgrade: edge.node
          },
        });
      }
    });
  });

}

console.log("One two three four");