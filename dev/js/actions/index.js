
//action creator
export const selectUser = (user) => {
    console.log("You Clicked on user: ", user.first);
    return{//the actual action
        type: "USER_SELECTED",
        payload: user
    }
};