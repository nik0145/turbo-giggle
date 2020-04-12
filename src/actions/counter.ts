export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const increment = (
  number: number
): { type: string; payload: number } => ({
  type: INCREMENT,
  payload: number,
})

export const decrement = (
  number: number
): { type: string; payload: number } => ({
  type: DECREMENT,
  payload: number,
})
