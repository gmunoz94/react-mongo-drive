import { gql } from "@apollo/client";

export const ADD_PATIENT = gql`
  mutation addPatient($firstName: String!, $lastName: String!, $dateOfBirth: String!, $phoneNumber: String!, $streetAddress: String!, $city: String!, $state: String!, $zipCode: String!) {
    addPatient(firstName: $firstName, lastName: $lastName, dateOfBirth: $dateOfBirth, phoneNumber: $phoneNumber, streetAddress: $streetAddress, city: $city, state: $state, zipCode: $zipCode)
  }
`