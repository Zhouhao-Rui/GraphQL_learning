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

export const ARTICLES_QUERY = gql`
  query articlesQuery {
    articles {
      _id,
      title,
      body
    }
  }
`

export const UPDATE_ARTICLE = gql`
  mutation UpdateArticle($_id: ID, $title: String!, $body: String!) {
    updateArticle(_id: $_id, title: $title, body: $body) {
      title,
    }
  }
`