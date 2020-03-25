/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: kek
// ====================================================

export interface kek_article_author {
  __typename: "UsersPermissionsUser";
  id: string;
  email: string;
  username: string;
}

export interface kek_article {
  __typename: "Article";
  id: string;
  title: string | null;
  content: string | null;
  author: kek_article_author | null;
}

export interface kek {
  article: kek_article | null;
}
