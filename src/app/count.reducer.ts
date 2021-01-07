import { createReducer, on } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET, MULTIPLY, DIVIDER } from './count.action';

export const initialState = 10;

const _counterReducer = createReducer(
  initialState,
  on(INCREMENT, (state) => state + 1),
  on(DECREMENT, (state) => state - 1),
  on(MULTIPLY, (state, payload) => state * payload.value),
  on(DIVIDER, state => state / 2),
  on(RESET, (state) => 0)
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
