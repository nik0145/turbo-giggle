import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
export interface propsType {
  compiler: String;
  framework: String;
}
// interface RocketInventory {
//   id: number;
//   model: string;
//   year: number;
//   stock: number;
// }

// interface RocketInventoryData {
//   rocketInventory: RocketInventory[];
// }

// interface RocketInventoryVars {
//   year: number;
// }
// const GET_ROCKET_INVENTORY = gql`
//   query getRocketInventory($year: Int!) {
//     rocketInventory(year: $year) {
//       id
//       model
//       year
//       stock
//     }
//   }
// `;
// const { loading, data } = useQuery<RocketInventoryData, RocketInventoryVars>(
//   GET_ROCKET_INVENTORY,
//   { variables: { year: 2019 } }
// );
console.log(data);
console.log(loading);
export const Hello = (props: propsType) => (
  <h1>
    Hello from {props.compiler} and {props.framework}
  </h1>
);
