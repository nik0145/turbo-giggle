/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: updateArticle
// ====================================================

export interface updateArticle_updateArticle_article {
  __typename: "Article";
  title: string | null;
  id: string;
}

export interface updateArticle_updateArticle {
  __typename: "updateArticlePayload";
  article: updateArticle_updateArticle_article | null;
}

export interface updateArticle {
  updateArticle: updateArticle_updateArticle | null;
}
