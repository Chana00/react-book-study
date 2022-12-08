import { createAction, handleActions } from 'redux-actions';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

//createAction 사용시 객체를 직접 만들어줄 필요X
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initialState = {
    number: 0
};

//첫번째 파라미터 - 각 액션에 대한 업데이트 함수
//두번째 파라미터 - 초기 상태
const counter = handleActions(
    {
        [INCREASE]: (state, action) => ({ number: state.number + 1 }),
        [DECREASE]: (state, action) => ({ number: state.number - 1 }),
    },
    initialState,
);

// function counter(state = initialState, action) {
//     switch (action.type) {
//         case INCREASE:
//             return { number: state.number + 1 }
//         case DECREASE:
//             return { number: state.number - 1 }
//         default:
//             return state;
//     }
// }

export default counter;