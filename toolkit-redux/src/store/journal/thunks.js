import {} from "firebase";

export const startNewNote = () => {
    return async (dispatch) => {
        const { uid } = getState().auth;

        const newNote = {
            title: "",
            body: "",
            date: new Date().getTime(),
        };

        const newDoc = doc;
        //!dispatch
        //!dispatch(newNote)
        //!dispatch(acitvarNote)
    };
};
