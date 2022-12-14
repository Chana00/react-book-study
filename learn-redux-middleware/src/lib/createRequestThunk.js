export default function createRequestThunk(type, request) {
    // 성공 및 실패 액션 타입 정의
    const SUCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    return params => async dispatch => {
        dispatch({ type }); // 시작
        try {
            const response = await request(params);
            dispatch({
                type: SUCESS,
                payload: response.data
            }); // 성공

        } catch (e) {
            dispatch({
                type: FAILURE,
                payload: e,
                error: true
            }); // 에러 발생
            throw e;
        }

    }
}