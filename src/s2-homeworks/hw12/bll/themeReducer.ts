// import React from 'react';

const initState = {
    themeId: 1,
}
export type themeReducerType = {
    themeId: number
}
export type changeThemeIdtActionType = {
    type: 'SET_THEME_ID',
    id: number
}

export const themeReducer = (state = initState, action: changeThemeIdtActionType): themeReducerType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID' :{
            return {...state, themeId: action.id}
        }

        default:
            return state
    }
}


export const changeThemeId = (id: number): changeThemeIdtActionType => ({ type: 'SET_THEME_ID', id }) // fix any
