import Counter from "../components/Counter";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { increase, decrease } from "../modules/counter";

const CounterContainer = ({ number, increase, decrease }) => {
    return (<Counter number={number} onIncrease={increase} onDecrease={decrease} />);
}

export default connect(
    state => ({
        number: state.counter.number,
    }),
    {
        increase,
        decrease,
    }
    // 파라미터를 객체형태로 넣어주면 connect 함수가 내부적으로 bindActionCreators 작업을 대신 해준다
)(CounterContainer);

// const mapStateToProps = state => ({
//     number: state.counter.number,
// })

// const mapDispatchToProps = dispatch => bindActionCreators(
//     {
//         increase,
//         decrease,
//     },
//     dispatch,
// )

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(CounterContainer);