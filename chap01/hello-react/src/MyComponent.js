import {Component} from "react";
import PropTypes from "prop-types";


class MyComponent extends Component {
    static defaultProps = {
        name: 'REACT'
    }

    static propTypes = {
        name: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired
    }

    render() {
        const {name, favoriteNumber, children} = this.props;
        return (
            <div>
                안녕하세요, 제 이름은 {name}입니둥 <br/>
                children 값은 {children}
                임니당
                <br/>
                제가 좋아하는 숫자는 {favoriteNumber} 임니다
            </div>
        )
    }
}

export default MyComponent;