const escapeStringRegexp = require("escape-string-regexp");

const pagePath = `data`;
const indexName = `dev_NIMFA`;

const pageQuery = `{
  allPageAccesorii {
    edges {
      node {
        id
        hero { title headline }
        pageParagraphs
      }
    }
  }
  allPageArmaturiRobineti {
    edges {
      node {
        id
        hero { headline title }
        products {
          materials
          table {
            rows
          }
          title
        }
      }
    }
  }
  allPageAvantaje {
    edges {
      node {
        id
        hero { headline title }
        advantages {
          description
          title
        }
      }
    }
  }
  allPageCertificari {
    edges {
      node {
        id
        hero { headline title }
        certParagraphs
        certifications {
          certList
          intro
        }
      }
    }
  }
  allPageContact {
    edges {
      node {
        id
        team {
          email
          fullname
          phone
        }
      }
    }
  }
  allPageDateCifre {
    edges {
      node {
        id
        hero { headline title }
        table {
          entries
          label
        }
      }
    }
  }
  allPageDespreNoi {
    edges {
      node {
        id
        hero { headline title }
        aboutParagraphs
        activityAreas {
          areas
          intro
        }
      }
    }
  }
  allPageFittinguri {
    edges {
      node {
        id
        hero { headline title }
        products {
          materials
          title
          table {
            rows
          }
        }
      }
    }
  }
  allPageFlanse {
    edges {
      node {
        id
        hero { title headline }
        products {
          description
          dimensions
          materials
          pressureRange
          title
          table {
            rows
          }
        }
      }
    }
  }
  allPageGdpr {
    edges {
      node {
        id
        hero { headline title }
        gdprParagraphs
      }
    }
  }
  allPageIndustrii {
    edges {
      node {
        id
        hero { headline title }
        industries {
          description
          name
        }
      }
    }
  }
  allPageProduse {
    edges {
      node {
        id
        hero { headline title }
        productCategories {
          name
          subMenu {
            name
            url
          }
          url
        }
      }
    }
  }
  allPageServicii {
    edges {
      node {
        id
        hero { headline title }
        services {
          description
          title
        }
      }
    }
  }
  allPageTablaProfile {
    edges {
      node {
        id
        hero { headline title }
        products {
          description
          materials
          title
          table {
            rows
          }
        }
      }
    }
  }
  allPageTevi {
    edges {
      node {
        id
        hero { title headline }
        products {
          description
          dimensions
          materials
          title
          table {
            rows
          }
        }
      }
    }
  }
  allSteps {
    edges {
      node {
        id
        orderSteps {
          description
          title
          steps {
            name
          }
        }
      }
    }
  }
}`;

function pageToAlgoliaRecord({ node: { id, hero, orderSteps, products, productCategories, services, industries, gdprParagraphs, aboutParagraphs, activityAreas, table, certParagraphs, certifications, advantages, ...rest } }) {
  return {
    objectID: id,
    ...hero,
    ...orderSteps,
    ...products,
    ...productCategories,
    ...services,
    ...industries,
    ...gdprParagraphs,
    ...aboutParagraphs,
    ...activityAreas,
    ...table,
    ...certParagraphs,
    ...certifications,
    ...advantages,
    ...rest,
  }
}

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => {
      let results = [];
      for (const property in data) {
        const [result] = data[property].edges.map(pageToAlgoliaRecord);
        results.push(result);
      }
      return results;
    },
    indexName,
  },
];

module.exports = queries;