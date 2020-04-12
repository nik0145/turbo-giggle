export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

const initialState = {
  count: 0,
}
const counterReducer = (
  state = initialState,
  action: { type: string; payload: number }
) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + action.payload,
      }
    case DECREMENT:
      return {
        ...state,
        count: state.count - action.payload,
      }

    default:
      return state
  }
}
export default counterReducer
