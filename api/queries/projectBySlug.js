export default gql`
  query projectBySlug($slug: String) {
    project(filter: { projectSlug: { eq: $slug } }) {
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
