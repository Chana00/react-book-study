import { handleAction, handleActions } from "redux-actions";
import * as api from '../lib/api';
import createRequestThunk from "../lib/createRequestThunk";

//액션 타입 선언
//한 요청당 세 개

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';

const GET_USERS = 'sample/GET_USER';
const GET_USERS_SUCCESS = 'sample/GET_USER_SUCCESS';

// thunk 함수 생성
// thunk 함수 내부에서는 시작, 성공, 실패 다 다른 액션을 디스패치 한다.
export const getPost = createRequestThunk(GET_POST, api.getPost);
export const getUsers = createRequestThunk(GET_USERS, api.getUsers);


// 초기 상태 선언
// 요청의 로딩중 상태는 loading이라는 객체에서 관리한다
const initialState = {
    post: null,
    users: null
}

const sample = handleActions(
    {

        [GET_POST_SUCCESS]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_POST: false // 요청 완료
            },
            post: action.payload
        }),


        [GET_USERS_SUCCESS]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_USERS: false // 요청 완료
            },
            users: action.payload
        }),

    },
    initialState
)

export default sample;