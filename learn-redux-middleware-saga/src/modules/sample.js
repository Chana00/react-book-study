import { createAction, handleAction, handleActions } from "redux-actions";
import * as api from '../lib/api';
import { call, put, takeLatest } from 'redux-saga/effects';
import { startLoading, finishLoading } from "./loading";
import createRequestSaga from "../lib/createRequestSaga";

//액션 타입 선언
//한 요청당 세 개

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';

export const getPost = createAction(GET_POST, id => id);
export const getUsers = createAction(GET_USERS);

const getPostSaga = createRequestSaga(GET_POST, api.getPost);
const getUsersSaga = createRequestSaga(GET_USERS, api.getUsers);

/*
function* getPostSaga(action) {
    yield put(startLoading(GET_POST));  // 로딩 시작
    // 파라미터로 액션을 받아오면 액션의 정보를 조회할 수 있다
    try {
        // call을 사용하면 Promise를 반환하는 함수를 호출하고, 기다릴 수 있다
        // 첫번째 파라미터는 함수, 나머지 파라미터는 해당 함수에 넣을 인수
        const post = yield call(api.getPost, action.payload);
        yield put({
            type: GET_POST_SUCCESS,
            payload: post.data
        })
    } catch (e) {
        yield put({
            type: GET_POST_FAILURE,
            payload: e,
            error: true
        })
    }
    yield put(finishLoading(GET_POST)); // 로딩 완료

}

function* getUsersSaga() {
    yield put(startLoading(GET_USERS));  // 로딩 시작

    try {
        // call을 사용하면 Promise를 반환하는 함수를 호출하고, 기다릴 수 있다
        // 첫번째 파라미터는 함수, 나머지 파라미터는 해당 함수에 넣을 인수
        const users = yield call(api.getUsers);
        yield put({
            type: GET_USERS_SUCCESS,
            payload: users.data
        })
    } catch (e) {
        yield put({
            type: GET_USERS_FAILURE,
            payload: e,
            error: true
        })
    }
    yield put(finishLoading(GET_POST)); // 로딩 완료

}
*/

export function* sampleSaga() {
    yield takeLatest(GET_POST, getPostSaga);
    yield takeLatest(GET_USERS, getUsersSaga);
}

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