/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRestaurant = /* GraphQL */ `
  mutation CreateRestaurant(
    $input: CreateRestaurantInput!
    $condition: ModelRestaurantConditionInput
  ) {
    createRestaurant(input: $input, condition: $condition) {
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
export const updateRestaurant = /* GraphQL */ `
  mutation UpdateRestaurant(
    $input: UpdateRestaurantInput!
    $condition: ModelRestaurantConditionInput
  ) {
    updateRestaurant(input: $input, condition: $condition) {
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
export const deleteRestaurant = /* GraphQL */ `
  mutation DeleteRestaurant(
    $input: DeleteRestaurantInput!
    $condition: ModelRestaurantConditionInput
  ) {
    deleteRestaurant(input: $input, condition: $condition) {
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
export const createArticle = /* GraphQL */ `
  mutation CreateArticle(
    $input: CreateArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    createArticle(input: $input, condition: $condition) {
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
export const updateArticle = /* GraphQL */ `
  mutation UpdateArticle(
    $input: UpdateArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    updateArticle(input: $input, condition: $condition) {
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
export const deleteArticle = /* GraphQL */ `
  mutation DeleteArticle(
    $input: DeleteArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    deleteArticle(input: $input, condition: $condition) {
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
export const createSupplement = /* GraphQL */ `
  mutation CreateSupplement(
    $input: CreateSupplementInput!
    $condition: ModelSupplementConditionInput
  ) {
    createSupplement(input: $input, condition: $condition) {
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
export const updateSupplement = /* GraphQL */ `
  mutation UpdateSupplement(
    $input: UpdateSupplementInput!
    $condition: ModelSupplementConditionInput
  ) {
    updateSupplement(input: $input, condition: $condition) {
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
export const deleteSupplement = /* GraphQL */ `
  mutation DeleteSupplement(
    $input: DeleteSupplementInput!
    $condition: ModelSupplementConditionInput
  ) {
    deleteSupplement(input: $input, condition: $condition) {
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
