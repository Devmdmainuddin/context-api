import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../Contaxt/AuthProvider";
import { getStoreData } from "../DataBase/FakeDataBase";
import { ProductComponents } from "../Contaxt/ContextComponent";

const Header = () => {
  const { user ,logOut} = useContext(AuthContext)
  const {cart,setcart}=useContext(ProductComponents)



  const handlelogOut = () =>{
    logOut()
    .then(()=>console.log('user logged successfully'))
    .catch(error=>console.error(error))
}
  return (
    <nav className="bg-[#d4e4e3] py-3">
      <div className="container flex justify-between items-center">
        <div className="logo">
          <Link
            to="/"
            className="font-Josefin text-primery text-3xl font-extrabold"
          >
            Logo
          </Link>
        </div>
        <div className="menu">
          <ul className="flex gap-x-8 items-center">
            <li className="text-primery text-base font-semibold hover:text-hover transition-all duration-300">
              <Link to='/'>home</Link>
            </li>
            <li className="text-primery text-base font-semibold hover:text-hover transition-all duration-300">
              <Link to='/products'>products</Link>
            </li>
            <li className="text-primery text-base font-semibold hover:text-hover transition-all duration-300">
              <Link to='/contact'>contact</Link>
            </li>

          </ul>
        </div>
        <div className="buttons">
          <ul className="flex justify-between items-center gap-x-4">

            {
              user ?
              <>
                <li className="flex flex-col items-center"><Link to='/'>PROFILE</Link>
                {user.email}
                <a onClick={handlelogOut} href="#">logOut</a>
                </li>
              </> :<>
              <li ><Link to='/login' className="flex justify-between items-center gap-x-2  "><IoPersonOutline></IoPersonOutline>login</Link></li>
            <li><Link to='/signup'>signup</Link></li>
              </>

            }
            <li className="bg-green-300 p-2 rounded-sm"><Link to='/cart' > {cart.length} <FiShoppingCart></FiShoppingCart></Link> </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;