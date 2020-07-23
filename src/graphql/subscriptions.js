/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRestaurant = /* GraphQL */ `
  subscription OnCreateRestaurant {
    onCreateRestaurant {
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
export const onUpdateRestaurant = /* GraphQL */ `
  subscription OnUpdateRestaurant {
    onUpdateRestaurant {
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
export const onDeleteRestaurant = /* GraphQL */ `
  subscription OnDeleteRestaurant {
    onDeleteRestaurant {
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
export const onCreateArticle = /* GraphQL */ `
  subscription OnCreateArticle {
    onCreateArticle {
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
export const onUpdateArticle = /* GraphQL */ `
  subscription OnUpdateArticle {
    onUpdateArticle {
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
export const onDeleteArticle = /* GraphQL */ `
  subscription OnDeleteArticle {
    onDeleteArticle {
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
export const onCreateSupplement = /* GraphQL */ `
  subscription OnCreateSupplement {
    onCreateSupplement {
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
export const onUpdateSupplement = /* GraphQL */ `
  subscription OnUpdateSupplement {
    onUpdateSupplement {
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
export const onDeleteSupplement = /* GraphQL */ `
  subscription OnDeleteSupplement {
    onDeleteSupplement {
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
