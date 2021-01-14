import { createReducer, Action, on } from "@ngrx/store"

import * as fromHomeActions from './home.actions';

export interface HomeState {
    text: String;
    text2: String;
}

export const HomeInitialState: HomeState = {
    text: 'Porto Alegre',
    text2: 'Uberlândia',
}

const reducer = createReducer(
    HomeInitialState,
    on(fromHomeActions.changeText, (state, { text }) => ({
        ...state,
        text,
    })),
);

export function homeReducer(state: HomeState, action: Action): HomeState {
    return reducer(state, action);
}