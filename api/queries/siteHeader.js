export default gql`
  query siteHeader {
    siteHeader {
      headerLogo {
        alt
        url
        id
      }
      headerMenu {
        id
        linkTitle
        linkUrl
      }
    }
  }
`;
