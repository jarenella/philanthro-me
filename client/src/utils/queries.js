import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  {
    user {
      _id
      firstName
      lastName
      email
      favorites {
        orgsId
        name
        image
        description
        logo
        donationLink
      }
      donation {
        orgsId
        name
        logo
        description
        donationLink
      }
      
    }
  }
`;
