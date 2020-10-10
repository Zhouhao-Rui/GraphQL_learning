import { gql } from '@apollo/client'
export const LAUNCHES_QUERY = gql`
  query launchesQuery {
    launches {
      flight_number,
      mission_name,
      launch_data_local
    }
  }
`;
