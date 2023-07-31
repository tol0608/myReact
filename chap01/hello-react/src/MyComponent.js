import PropTypes from "prop-types";

const MyComponent = ({name, favoriteNumber, children}) => {
    return (
        <div>
            안녕하세요, 제 이름은 {name}입니둥 <br/>
            children 값은 {children}
            임니당
            <br/>
            제가 좋아하는 숫자는 {favoriteNumber} 임니다
        </div>
    );
};

MyComponent.defaultProps = {
    name: 'React',
};

MyComponent.prototype = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
};

export default MyComponent;