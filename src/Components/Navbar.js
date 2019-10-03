import React, { useContext} from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components"
import {ProductContext} from "../context";
function Navbar() {
    const {cart} = useContext(ProductContext);

    return (
        <NavWrapper id="nav" className="navbar navbar-expand-md justify-content-center">
            <Link to="/">
                <span className="navbar-brand d-flex w-30"> <i className="fab fa-delicious"></i><span className="logoname">STRTWEAR</span></span>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar3">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse w-100" id="collapsingNavbar3">
                    <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            PRODUCTS 
                        </Link>
                    </li>
                    <li className="nav-item ml-5">
                        <Link to="/details" className="nav-link">
                            DETAILS
                    </Link>
                    </li>
                <li className="nav-item ml-5 mr-3">
                    <Link to="/cart" className="nav-link">
                            <i className="fas fa-shopping-cart"></i>
                            CART <span style={{ color: "rgba(207, 0, 15, 1)" }}>({cart.reduce((total, amount) => { return total += amount.count }, 0)})</span>
                    </Link>
                </li>
                </ul>
                </div>
        </NavWrapper>
    )
}
const NavWrapper = styled.nav`
background: white;
position: sticky;
top: 0;
z-index:99;

.navbar-brand {
  font-size: 3vw!important;
  color: black!important;
}
.logoname{
  padding-left: .5rem;
  font-family:'Roboto',sans-serif !important;
  font-size: 2vw;
  font-weight:700;
}
a:hover{
    text-decoration: underline rgba(207, 0, 15, 1);
}
    ul {
        margin-left: 15%;
    }
    .nav-link {
        color: black !important;
        font-size: 1.3vw;
        text-transform: capitalize;
        font-weight: 600;
        transition: all hover 1s linear;
    }
    .nav-link:hover{
        font-size: 1.4vw;
        text-decoration: underline rgba(207, 0, 15, 1);
    }
`
export default Navbar
