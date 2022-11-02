import {UserType} from '../HW8'


type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

// type ActionType = upSortACType

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            if (action.payload === 'up') {
                return  [...state.sort((a, b) => {
                    if (a.name > b.name) {
                        return 1
                    } else if (a.name < b.name) {
                        return -1
                    } else {
                        return 0
                    }
                })]
            }
            if (action.payload === 'down') {
                return  [...state.sort((a, b) => {
                    if (a.name < b.name) {
                        return 1
                    } else if (a.name > b.name) {
                        return -1
                    } else {
                        return 0
                    }
                })]
            }
            else return state
        }
        case 'check': {

            return state.filter(el => el.age >= action.payload )
        }
        default:
            return state
    }
}

// type upSortACType = ReturnType<typeof upSortAC>
// export const upSortAC = (up:string) => {
//     return {
//         type: 'sort',
//         payload: {
//             up:up
//         }
//     }as const
// }
