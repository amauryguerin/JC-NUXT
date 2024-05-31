export default gql`
  query allProjects {
    allProjects {
      id
      projectTitle
      _status
      _firstPublishedAt
      projectSlug
      projectContent(markdown: true)
    }
  }
`;
