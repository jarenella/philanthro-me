import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  {
    user {
      _id
      name
      email
      favorites {
        orgsId
        name
        image
        description
      }
      
    }
  }
`;

/*Orders - in progress
orders {
  _id
  purchaseDate
  nonProfits {
    name
    category
    amount
    image
    description
  }
}
// checkout and finalize total donatio amount
export const QUERY_CHECKOUT = gql`
  query getCheckout($nonProfits: [ID]!) {
    checkout(nonProfits: $nonProfits) {
      session
    }
  }
  */

