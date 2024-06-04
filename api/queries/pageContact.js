export default gql`
  query pageContact {
    pageContact {
      contactContent(markdown: true)
      id
    }
  }
`;
