export default gql`
  query projectBySlug($slug: String) {
    project(filter: { projectSlug: { eq: $slug } }) {
      id
      projectTitle
      _status
      _firstPublishedAt
      projectSlug
      projectContent(markdown: true)
    }
  }
`;
