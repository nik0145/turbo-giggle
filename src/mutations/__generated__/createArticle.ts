/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ArticleInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: createArticle
// ====================================================

export interface createArticle_createArticle_article {
  __typename: "Article";
  title: string | null;
  content: string | null;
  id: string;
}

export interface createArticle_createArticle {
  __typename: "createArticlePayload";
  article: createArticle_createArticle_article | null;
}

export interface createArticle {
  createArticle: createArticle_createArticle | null;
}

export interface createArticleVariables {
  data?: ArticleInput | null;
}
