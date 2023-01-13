import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  {
    user {
      name
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