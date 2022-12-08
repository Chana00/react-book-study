import { useCallback } from "react";
import Counter from "../components/Counter";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "../modules/counter";

//useDispatch 사용시 useCallback과 함께 사용하는 습관을 들일 것을 권장
const CounterContainer = () => {
    const number = useSelector(state => state.counter.number);
    const dispatch = useDispatch();
    const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
    const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
    return (<Counter
        number={number}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
    />);
}

export default CounterContainer
