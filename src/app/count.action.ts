import { createAction, props } from "@ngrx/store";

export const INCREMENT = createAction('[Count Component] Increment');
export const DECREMENT  = createAction('[Count Component] Decrement');
export const RESET = createAction('[Counter Component] RESET');
export const MULTIPLY = createAction('[Count Component] Multiply', props<{value: number}>());
export const DIVIDER = createAction('[Count Component] Divider');