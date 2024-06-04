export default gql`
  query siteFooter {
    siteFooter {
      footerMenu {
        id
        linkTitle
        linkUrl
      }
    }
  }
`;
