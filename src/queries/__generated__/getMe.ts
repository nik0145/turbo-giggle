/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getMe
// ====================================================

export interface getMe_me_role {
  __typename: "UsersPermissionsMeRole";
  name: string;
}

export interface getMe_me {
  __typename: "UsersPermissionsMe";
  id: string;
  username: string;
  email: string;
  confirmed: boolean | null;
  blocked: boolean | null;
  role: getMe_me_role | null;
}

export interface getMe {
  me: getMe_me | null;
}
