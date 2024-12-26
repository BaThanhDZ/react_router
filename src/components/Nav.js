import React from "react";
import { NavLink } from "react-router-dom/";

const menus = [
  { to: "/",         exact: true, name: "Home"},
  { to: "/about",    exact: true, name: "About"},
  { to: "/blog",     exact: true, name: "Blog"},
  { to: "/contact",  exact: true, name: "Contact"},
]
function Navigation() {
  function showMenus(menus) {
    let xhtml = null;

    if(menus.length > 0) {
      xhtml = menus.map((menu, index) => {
        return (
          <li key={index} className="nav-item px-lg-4">
            <NavLink 
              to={menu.to} exact={menu.exact} 
              activeClassName="active"
              className="nav-link text-uppercase text-expanded">
                {menu.name}
            </NavLink>
          </li>
        );
      });
    }
    return xhtml;
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-faded py-lg-4">
      <div className="container">
        <NavLink  to="/" className="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none">
          Start Bootstrap
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav mx-auto">
            {showMenus(menus)}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
