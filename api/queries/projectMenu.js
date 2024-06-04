export default gql`
  query projectMenu {
    allProjects {
      id
      projectTitle
      projectSlug
      seoMetadata {
        description
        twitterCard
        title
      }
      projectThumbnail {
        alt
        url
        id
      }
    }
  }
`;
