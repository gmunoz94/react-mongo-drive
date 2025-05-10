import { gql } from "@apollo/client";

export const SEARCH_PATIENTS = gql`
  query allPatients {
    searchPatient {
      id
      firstName
      lastName
      dateOfBirth
      email
      phoneNumber
      streetAddress
      city
      state
      zipCode
    }
  }
`