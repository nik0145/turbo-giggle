/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getArticles
// ====================================================

export interface getArticles_articles_image {
  __typename: "UploadFile";
  url: string;
  uid: string;
  thumbUrl: string;
  name: string;
  id: string;
}

export interface getArticles_articles_author {
  __typename: "UsersPermissionsUser";
  id: string;
  email: string;
  username: string;
}

export interface getArticles_articles {
  fileList: any[];
  __typename: "Article";
  id: string;
  title: string | null;
  content: string | null;
  image: getArticles_articles_image | null;
  author: getArticles_articles_author | null;
}

export interface getArticles {
  articles: (getArticles_articles | null)[] | null;
}
