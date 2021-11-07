import classes from "./Header.module.css";
import CartButton from "../Cart/CartButton"

const Header = () => {
    return (
        <header className={classes['redux-header']}>
            <h1>ReduxCart</h1>
            <CartButton />
        </header>
    )
}

export default Header;