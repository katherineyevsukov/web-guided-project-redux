import { ADD_MEMBER } from './../actions/dragonActions';

//1. initialState related to our dragonMember UI.
//      - members: array of member object { name: 'Jojo Zhang', dragonStatus: true }

export const initialState = {
    members: [
        { name: 'Jojo Zhang', dragonStatus: true },
        { name: 'Brandon Harris', dragonStatus: false }
    ]
}


//2. reducer for dragonMember UI
//      - ADD_MEMBER case: return members with a new member added
//      - default case: return state

const reducer = (state = initialState, action)=> {
    switch(action.type) {
        case ADD_MEMBER:
            return {
                ...state,
                members: [...state.members, {name:action.payload, dragonStatus: false}]
            };
        default:
            return state;
    }

}

//3. export out our reducer
export default reducer;