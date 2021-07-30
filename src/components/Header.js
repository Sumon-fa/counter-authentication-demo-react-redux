import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <div>
      {props.authenticate && (
        <header className={classes.header}>
          <h1>Redux Auth</h1>
          <nav>
            <ul>
              <li>
                <a href="/">My Products</a>
              </li>
              <li>
                <a href="/">My Sales</a>
              </li>

              <li>
                <button onClick={props.isLogout}>Logout</button>
              </li>
            </ul>
          </nav>
        </header>
      )}
    </div>
  );
};

export default Header;
