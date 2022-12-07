import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({
    counter,
    todos
})

export default rootReducer;

// store를 만들때는 리듀서를 하나만 사용해야 하기 때문에
// combineReducers라는 유틸 함수를 사용하여 리듀서를 하나로 합칠 수 있다.

// 파일 이름을 index.js로 설정해주면 나중에 불러올 때 디렉터리 이름 까지만 입력하여 불러올 수도 있다.
// import rootReducer from './modules';