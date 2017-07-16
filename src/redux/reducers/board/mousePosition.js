import { UPDATE_MOUSE_POSITION } from '../../actions/types'

export default function (state = {}, action) {
    switch (action.type) {
        case UPDATE_MOUSE_POSITION:
            return action.payload.position;
        default:
            return state;
    }
}