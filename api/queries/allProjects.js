export default gql`
  query allProjects {
    allProjects {
      id
      projectTitle
      projectContent(markdown: true)
      projectSlug
      projectVideo {
        url
        alt
        id
      }
      projectPhoto {
        alt
        url
        id
      }
      seoMetadata {
        description
        twitterCard
        title
      }
    }
  }
`;
