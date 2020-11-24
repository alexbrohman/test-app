import Types from "../actions/actionTypes"
import _ from "lodash"

const defaultState = {
    exampleMessage: ""
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case Types.EXAMPLE_ACTION: {
            let newState = _.cloneDeep(state)
            newState.exampleMessage = action.message
            return newState
        }

        default:
            return state
    }
}

export default reducer
