/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRestaurant = /* GraphQL */ `
  query GetRestaurant($id: ID!) {
    getRestaurant(id: $id) {
      id
      name
      articles {
        items {
          id
          name
          description
          price
          restaurantID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listRestaurants = /* GraphQL */ `
  query ListRestaurants(
    $filter: ModelRestaurantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRestaurants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        articles {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getArticle = /* GraphQL */ `
  query GetArticle($id: ID!) {
    getArticle(id: $id) {
      id
      name
      description
      price
      restaurantID
      restaurant {
        id
        name
        articles {
          nextToken
        }
        createdAt
        updatedAt
      }
      supplements {
        items {
          id
          articleID
          name
          description
          price
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listArticles = /* GraphQL */ `
  query ListArticles(
    $filter: ModelArticleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArticles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        price
        restaurantID
        restaurant {
          id
          name
          createdAt
          updatedAt
        }
        supplements {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSupplement = /* GraphQL */ `
  query GetSupplement($id: ID!) {
    getSupplement(id: $id) {
      id
      articleID
      name
      description
      article {
        id
        name
        description
        price
        restaurantID
        restaurant {
          id
          name
          createdAt
          updatedAt
        }
        supplements {
          nextToken
        }
        createdAt
        updatedAt
      }
      price
      createdAt
      updatedAt
    }
  }
`;
export const listSupplements = /* GraphQL */ `
  query ListSupplements(
    $filter: ModelSupplementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSupplements(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        articleID
        name
        description
        article {
          id
          name
          description
          price
          restaurantID
          createdAt
          updatedAt
        }
        price
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
