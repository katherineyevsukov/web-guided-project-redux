//1. create and export our action constant
export const ADD_MEMBER = "ADD_MEMBER";

//2. create and export our action creator function
export const addMember = (name) => {
    return ({type:ADD_MEMBER, payload:name})
}