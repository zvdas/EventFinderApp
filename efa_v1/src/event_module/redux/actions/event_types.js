export const CREATE_EVENT = "CREATE_EVENT";

export const RETRIEVE_EVENTS = "RETRIEVE_EVENTS";

export const UPDATE_EVENT = "UPDATE_EVENT";

export const DELETE_EVENT = "DELETE_EVENT";

export const SELECT_DATATYPE = "SELECT_DATATYPE";

export const mapStateToProps = (state) => {
    return {
        data : state.payload
    }
}