export default gql`
  query siteSeo($slug: String) {
    _site {
      globalSeo {
        siteName
        titleSuffix
        fallbackSeo {
          title
          twitterCard
          image {
            url
          }
          description
        }
      }
    }
    allProjects(filter: { projectSlug: { eq: $slug } }) {
      id
      seoMetadata {
        title
        description
        twitterCard
        image {
          url
        }
      }
    }
    pageAbout {
      seoMetadata {
        title
        description
        twitterCard
        image {
          url
        }
      }
      id
    }
    pageContact {
      seoMetadata {
        title
        description
        twitterCard
        image {
          url
        }
      }
      id
    }
  }
`;
