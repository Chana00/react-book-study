import React from 'react'

//한 파일에 두 컴포넌트를 선언
function Todoitem({ todo, onToggle, onRemove }) {
    return (
        <div>
            <input type="checkbox" />
            <span>예제 텍스트</span>
            <button>삭제</button>
        </div>
    )
}

const Todos = ({
    input,
    todos,
    onChangeInput,
    onInsert,
    onToggle,
    onRemove,
}) => {
    const onSubmit = e => e.preventDefault();

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input />
                <button type='submit'>등록</button>
            </form>
            <div>
                <Todoitem />
                <Todoitem />
                <Todoitem />
                <Todoitem />
                <Todoitem />
            </div>
        </div>
    )
};

export default Todos