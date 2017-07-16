import { combineReducers } from 'redux';

import mousePosition from './board/mousePosition';

const allReducers = combineReducers({
    mousePos: mousePosition
});

export default allReducers;