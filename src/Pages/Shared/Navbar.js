import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const items = <React.Fragment>
      <li><Link to='/home'>Home</Link></li>
      <li tabIndex={0}>
        <Link to='/products'> Products</Link></li>
        <li><Link to='/shop'>Shop</Link></li>
        <li><Link to='cart'>Cart</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/signup'>SignUp</Link></li>
    </React.Fragment>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
           <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {items}
      </ul>
    </div>
    <Link to='/' className="text-green-600 normal-case font-bold text-xl">Furnitureland</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
    {items}
    </ul>
  </div>
</div>
    );
};

export default Navbar;