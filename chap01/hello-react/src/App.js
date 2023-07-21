import './App.css';
import {Fragment} from "react";

function App() {
    const name = '리액트';

    return (
        <>
            {/* 주석은 이렇게 작성함미다 */}
            <div className="react" // 시작태그를 여러줄로 작성하게 된다면 여기에 주석을 작성할 수 있습니다.
            >
                {name}
            </div>
            // 하지만 이런 주석이나

            <input/>

        </>);
}

export default App;
