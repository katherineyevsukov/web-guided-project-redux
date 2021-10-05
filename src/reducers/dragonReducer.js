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

}

//3. export out our reducer
export default reducer;