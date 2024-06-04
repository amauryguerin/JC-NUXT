export default gql`
  query pageAbout {
    pageAbout {
      aboutContent(markdown: true)
      id
    }
  }
`;
