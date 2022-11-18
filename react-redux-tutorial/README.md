# [React] Redux 기본

## [1] Redux란?

상태 업데이트와 관련된 로직을 효율적으로 관리하는 라이브러리이다. 여러 개의 컴포넌트에서 같은 상태를 공유할 때에도 손쉽게 상태를 변경하고 관리할 수 있다.

프로젝트 규모가 커지면 서로 다른 컴포넌트를 오가며 props와 state를 관리하는 것이 복잡해지기 때문에 외부에 store를 두고 관리하는 방식이다.

Angular, Vue, VanilaJS같은 다른 프론트엔드 라이브러리와도 함께 사용이 가능하다.

프로젝트 규모가 큰 경우 체계적으로 관리할 수 있는 Redux를 많이 사용한다.

## [1-2] Redux 사용을 위한 알아야 할 키워드

- **액션 ( Action )**

  상태에 변화가 필요할 때 발생하는 하나의 객체를 의미한다. 액션의 이름인 **type 필드를 필수로 포함하는 구조**이다.

  그 외의 값들은 상태 업데이트를 해야할 때 참고해야할 값이며 작성자 마음대로 넣을 수 있다.

  액션의 이름은 고유해야하며 주로 대문자로 작성한다.

  ```jsx
  {
    type: 'ADD_DATA'
    data: {
      id: 1,
      name: 'redux'
    }
  }

  {
  	type: 'CHANGE_INPUT'
  	text: '안녕하세요'
  }
  ```

- **액션 생성 함수**
  액션 객체를 만들어주는 함수이다.
  ```jsx
  function addTodo(data) {
    return {
      type: 'APP_DATA',
      data,
    };
  }
  ```
  화살표 함수로도 가능하다
  ```jsx
  const changeInput = (text) => ({
    type: 'CHANGE_INPUT',
    text,
  });
  ```
- **리듀서**

  변화를 일으키는 함수로 액션을 만들어 발생시키면

  리듀서가 현재 상태와 전달받은 액션 객체를 파라미터로 받아와 값을 참고하여 **새로운 상태를 만들어 반환**해준다.

  ```jsx
  const initialState = {
  	counter: 1
  };
  function reducer(state = initalState, action) {
  	switch (action.type){
  		case INCREMENT:
  			return {
  			counter: state.counter+1
  		};
  		default:
  			return: state;
  	}
  }
  ```

- **스토어**

  프로젝트에 리덕스를 적용하기 위해 스토어를 만든다.

  한 개의 프로젝트는 하나의 스토어만 가질 수 있다.

  스토어 안에는 현재 애플리케이션 상태와 리듀서, 몇가지 중요한 내장 함수를 지니고 있다.

  - **디스패치**
    액션을 발생시키는 내장 함수
    이 함수가 호출되면 스토어는 리듀서 함수를 실행시켜서 새로운 상태를 만든다
  - **구독**
    subscribe 함수 안에 리스너 함수를 파라미터로 넣어서 호출해주면, 이 리스너 함수가 액션이 디스패치되어 상태가 업데이트될 때 마다 호출된다.
    ```jsx
    const listener = () => {
      console.log('상태가 업데이트됨');
    };
    const unsubscribe = store.subscribe(listener);
    unsubscribe(); // 추후 구독을 비활성화할 때 함수를 호출
    ```

- 리액트에서 리덕스를 사용할 때 가장 많이 사용하는 패턴은 프레젠테이셔널 컴포넌트와 컨테이너 컴포넌트를 분리하는 것 이다.
  - **프레젠테이셔널 컴포넌트** : 상태관리를 하지 않고 props만을 받아와 UI를 보여주기만 하는 컴포넌트 ( Only View ). 리덕스에 접근권한 X
  - **컨테이너 컴포넌트** : 리덕스와 연동되어 있는 컴포넌트
    이 패턴을 사용할 시 코드의 재사용성 상승, 관심사 분리로 UI 작성시 좀더 집중할 수 있다.  
    [[REACT] Presentational 컴포넌트와 Container 컴포넌트](https://fe-churi.tistory.com/34)

## [2] 리덕스의 세가지 규칙

### 1. 단일 스토어

**하나의 애플리케이션 안에는 하나의 스토어**만 있어야 한다.

( 여러개도 불가능하지는 않으나 관리가 복잡해지므로 권장하지 않는다 )

### 2. 읽기 전용 상태

setState의 경우도 불변성을 지키기 위해 spread 연산자나 immer같은 불변성 라이브러리를 사용한다. 리덕스도 마찬가지로 **기존 객체는 건드리지 않고 새로운 객체를 생성해 주어야 한다.**

→ 불변성을 유지해야 하는 이유 : 내부적으로 데이터가 변경되는 것을 감지하기 위해 얕은 비교검사를 하기 때문

### 3. 리듀서는 순수한 함수

다음 조건을 만족해야 한다.

- 리듀서 함수는 이전 상태와 액션 객체를 파라미터로 받는다.
- 파라미터 외의 값에는 의존하면 안된다.
- 이전 상태는 절대 건드리지 않으며 변화를 준 새로운 상태 객체를 만들어 반환해야 한다.
- 똑같은 파라미터로 호출된 리듀서 함수는 똑같은 결과 값을 반환해야 한다.

## [3] Redux 디렉터리 구조

### 1. 일반적인 구조

```bash
src
ㄴ actions
	ㄴ counter.js
	ㄴ todos.js
ㄴ constants
	ㄴ ActionTypes.js
ㄴ reducers
	ㄴ counter.js
	ㄴ todos.js
```

actions, constants, reducers 라는 세개의 디렉터리를 만들고 기능별로 파일을 하나씩 만드는 방식

### 2. Ducks 패턴

```bash
src
ㄴ modules
	ㄴ counter.js
	ㄴ todos.js
```

기능별로 파일 하나에 다몰아서 작성하는 방식

### [참고자료]

[React Redux 알아보기](https://freestrokes.tistory.com/160)

[BOOK] 리액트를 다루는 기술 414p ~ 432p
