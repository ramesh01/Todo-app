import classes  from './Header.module.css';
import classNames from 'classnames/bind';
const Header = () => {
    return(
        <>
        <div className={classNames(classes.header, classes.background)}>
            <p>TODO Web Application 😊</p>
        </div>
        </>
    );
}

export default Header;