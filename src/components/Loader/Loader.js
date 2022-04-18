
import classNames from 'classnames/bind';
import classes from "./Loader.module.css";

const Loader = () => {
    return (
    <div className={classNames(classes.overlay)}>
        <div className={classNames(classes.overlay__inner)}>
            <div className={classNames(classes.overlay__content)}>
                <span className={classNames(classes.spinner)}></span>
            </div>
        </div>
    </div>
    )
};

export default Loader;
