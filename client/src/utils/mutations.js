import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const SAVE_NONPROFIT = gql`
  mutation saveNonProfit($nonProfitData: NonProfitInput!) {
    saveNonProfit(nonProfitData: $nonProfitData) {
      _id
      name
      email
      savedNonProfit {
        nonProfitId
        name
        category
        description
        image
      }
    }
  }
`;

export const REMOVE_NONPROFIT = gql`
  mutation removeNonProfit($bookId: ID!) {
    removeNonProfit(bookId: $bookId) {
      _id
      name
      email
      savedNonProfits {
        nonProfitId
        name
        category
        description
        image
       
      }
    }
  }
`;


export const ADD_ORDER = gql`
  mutation addOrder($nonProfits: [ID]!) {
    addOrder(nonProfits: $nonProfits) {
      purchaseDate
      nonProfits {
        _id
        name
        description
        category {
          name
        }
      }
    }
  }
`;