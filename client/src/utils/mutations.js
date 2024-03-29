import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
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
        firstName
        lastName
      }
    }
  }
`;

// Save non-profit to User's Profile
export const SAVE_NONPROFIT = gql`
  mutation saveNonProfit($nonProfitData: NonProfitInput!) {
    saveNonProfit(nonProfitData: $nonProfitData) {
      _id
      firstName
      email
      favorites {
        orgsId
        name
        description
        image
        logo
        donationLink
      }
    }
  }
`;

// Remove non-profit from User's profile
export const REMOVE_NONPROFIT = gql`
  mutation removeNonProfit($orgsId: ID!) {
    removeNonProfit(orgsId: $orgsId) {
      _id
      firstName
      email
      favorites {
        orgsId
        name
        description
        image
        logo
        donationLink
      }
    }
  }
`;

// Add non-profit to User's Cart
export const ADD_NONPROFIT = gql`
  mutation addNonProfit($nonProfitData: NonProfitInput!) {
    addNonProfit(nonProfitData: $nonProfitData) {
      _id
      firstName
      email
      donation {
        orgsId
        name
        description
        logo
        donationLink
      }
    }
  }
`;

// Delete Nonprofit from user's cart
export const DELETE_NONPROFIT = gql`
  mutation deleteNonProfit($orgsId: ID!) {
    deleteNonProfit(orgsId: $orgsId) {
      _id
      firstName
      email
      donation {
        orgsId
        name
        description
        logo
        donationLink
      }
    }
  }
`;

// Contact Form
export const SUBMIT_CONTACT_FORM = gql`
  mutation submitContactForm(
    $name: String!
    $email: String!
    $message: String!
  ) {
    submitContactForm(name: $name, email: $email, message: $message)
  }
`;
