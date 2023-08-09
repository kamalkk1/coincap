import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="nav-header">
      <ul className="nav-list">
        <li className="nav-name">Coins</li>
        <li className="nav-name">Exchanges</li>
        <li className="nav-name">Swap</li>
      </ul>
      <div className="nav-title-img">
        <img src="https://coincap.io/static/logos/black.svg" alt="coincap" />
      </div>
      <ul className="nav-list">
        <li>
          <i className="fa-solid fa-magnifying-glass nav-icon"></i>
        </li>
        <li>
          <i className="fa-solid fa-gear nav-icon"></i>
        </li>
        <li>
          <button className="btn-primary">Connect Wallet</button>
        </li>
      </ul>
    </header>
  );
};

export { Navbar };
