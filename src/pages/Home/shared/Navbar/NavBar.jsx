import { Link } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';
import Usecart from "../../../../Hoks/usehoks/usecart/Usecart";
import UseAuth from "../../../../Hoks/usehoks/user/UseAuth";
import img5 from'../../../../assets/home/35.jpg';
const NavBar = () => {
  const { user, loguot } =UseAuth();
  const [cart] = Usecart();
  const handelloguot = () => {
    loguot()
      .then(() => { })
      .catch(error => console.log(error))

  }

  return (
    <div className="navbar fixed z-10 bg-opacity-30 bg-black text-black lg:text-white lg:max-w-screen-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1]  shadow bg-base-100 rounded-box w-52">
            <li><Link to="/">Home</Link></li>
            <li>
              <Link to="/menu">All classes</Link>
            </li>
            <li> <Link to="/order/salad">Order</Link></li>
            <li> <Link to="/secret">secret</Link></li>
            <li>
              <Link to='/dashbort/cart'>
                <button className="">
                  <FaShoppingCart></FaShoppingCart>
                  <div className="badge badge-secondary">+{cart.length}</div>
                </button>
              </Link>
            </li>

            {
              user ? <>
                <li><button onClick={handelloguot} className="btn btn-ghost">loguot</button></li>
              </>
                : <>
                  <li><Link to="/login">Login</Link></li>
                  <li><Link to="/signup">signup</Link></li>
                </>
            }
          </ul>
        </div>
        <img className="w-20 h-16" src={img5} alt="" />
        <p className="text-3xl text-black"><small className="text-red-700" >kingstar</small> <small className="text-orange-300">kids</small></p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/">Home</Link></li>
          <li> <Link to="/menu">All classes</Link></li>
          <li><Link to="/order/salad">Order</Link></li>
          <li> <Link to="/secret">secret</Link></li>
          <li>
            <Link to='/dashbort/cart'>
              <button className="btn bg-red-300">
                <FaShoppingCart className="mr-2"></FaShoppingCart>
                <div className="badge badge-secondary">+{cart.length}</div>
              </button>
            </Link>
          </li>
          {
            user ? <>
              <li><button onClick={handelloguot} className="btn btn-ghost">loguot</button></li>
            </>
              : <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">signup</Link></li>
              </>
          }
        </ul>
      </div>
      <div className="navbar-end">
        <div className="avatar">
          <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          {
            user &&
            <img className="w-12 rounded-full ml-44" referrerPolicy="no-referrer" src={user.photoURL} />
          }
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
