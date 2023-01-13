import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  {
    user {
      _id
      name
      email
      savedNonProfits {
        name
        category
        amount
        image
        description
      }
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
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($nonProfits: [ID]!) {
    checkout(nonProfits: $nonProfits) {
      session
    }
  }
`;
