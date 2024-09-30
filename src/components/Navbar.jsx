import React, { useContext, useState } from "react";
import { BsCart4 } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../Features/ContextProvider";
import { CiLogin } from "react-icons/ci";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${searchTerm}`);
    }
  };

  return (
    <div className="d-flex justify-content-between bg-secondary py-3 px-5 text-white">
      <Link to="/" className="navbar-brand fs-4 fw-bolder">
        Apna Shop
      </Link>
      <div className="d-flex align-items-center">
        <form
          onSubmit={handleSearch}
          className="d-flex align-items-center me-3"
        >
          <input
            type="text"
            className="form-control me-2"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="btn btn-light">
            Search
          </button>
        </form>
        <Link
          to="/cart"
          className="navbar-link fs-5 text-white d-flex align-items-center me-3"
        >
          <span className="me-2">{cart.length}</span>
          <BsCart4 />
        </Link>
        <Link to="/login" className="navbar-link fs-5 text-white fw-bolder">
          <CiLogin />
          <br></br>
        </Link>
        
      </div>
    </div>
  );
};

export default Navbar;
