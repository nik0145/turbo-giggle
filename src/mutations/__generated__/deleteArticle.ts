/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { InputID } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: deleteArticle
// ====================================================

export interface deleteArticle_deleteArticle_article {
  __typename: "Article";
  id: string;
}

export interface deleteArticle_deleteArticle {
  __typename: "deleteArticlePayload";
  article: deleteArticle_deleteArticle_article | null;
}

export interface deleteArticle {
  deleteArticle: deleteArticle_deleteArticle | null;
}

export interface deleteArticleVariables {
  where?: InputID | null;
}
