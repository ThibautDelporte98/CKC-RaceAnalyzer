import 'styles/layout/_nav.scss';

const MobileNav = () => {
  return (
    <nav className="navbar-bottom">
      <div className="navbar-mobile navbar-visible">
          <ul className="navbar-links flex-row align-items-center space-around">
            <li className="active bg-primary-color">
              <a href="/admin">diensten</a>
            </li>
            <li className="bg-primary-color">
              <a href="/beheer-gebruikers">referentie</a>
            </li>
            <li className="bg-primary-color">
              <a href="/lessenrooster">Blog</a>
            </li>
          </ul>
      </div>
    </nav>
  );
};

export default MobileNav;
