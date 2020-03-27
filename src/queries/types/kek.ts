/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: kek
// ====================================================

export interface kek_articles_author {
  __typename: "UsersPermissionsUser";
  id: string;
  email: string;
  username: string;
}

export interface kek_articles {
  __typename: "Article";
  id: string;
  title: string | null;
  content: string | null;
  author: kek_articles_author | null;
}

export interface kek {
  articles: (kek_articles | null)[] | null;
}
