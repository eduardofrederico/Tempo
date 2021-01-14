import { createReducer, Action, on } from "@ngrx/store"

import * as fromHomeActions from './home.actions';

export interface HomeState {
    text: string;
    text2: string;
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

export function homeReducer(state: HomeState | undefined, action: Action): HomeState {
    return reducer(state, action);
}