import { UPDATE_MOUSE_POSITION } from '../types';

export function updateMousePos(position) {
    console.log(position);
    
    return {
        type: UPDATE_MOUSE_POSITION,
        payload: {
            position: position
        }
    }
}