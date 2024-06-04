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
      }
      projectPhoto {
        alt
        url
      }
      seoMetadata {
        description
        twitterCard
        title
      }
    }
  }
`;
