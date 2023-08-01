import {Component} from "react";

class Counter extends Component {
    state = {
        number: 0,
        fixedNumber: 0
    };

    render() {
        const {number, fixedNumber} = this.state;
        return (
            <>
                <h1>{number}</h1>
                <h2>안바뀌는 값 : {fixedNumber}</h2>
                <button
                    // onClick 통해 버튼이 클릭되었을 때 호출할 함수를 지정
                    onClick={() => {
                        this.setState(
                            {
                                number: number + 1
                            },
                            () => {
                                console.log('방금 setState가 호출 됬다네요');
                                console.log(this.state);
                            }
                        )

                    }}
                >
                    + 1
                </button>
            </>
        )
    }
}

export default Counter;