import { Link } from "react-router-dom"
import Logo from "../../assets/images/logo.jpeg"
import CountryDropdown from "../CountryDropdown";
import { FaBars } from "react-icons/fa";
import { Button } from "@mui/material";
import { CiUser } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import SearchBox from "./SearchBox";
import Navigation from "./Navigation";
import { useContext } from "react";
import { MyContext } from "../../App";





const Header = () => {
  const context=useContext(MyContext)
  return (
    <>
      <div className="headerWrapper">
        <div className="top-strip bg-purple">
          <div className="container">
            <p className="mb-0 mt-0 text-center">
              Due to the <b>COVID 19 </b> epidemic , orders may be proccessed with a slight delay
            </p>
          </div>
        </div>
        <header className="header">
          <div className="row">
            <div className="logoWrapper d-flex align-items-center col-sm-2">
              <Link to={"/"}><img src={Logo}></img></Link>
            </div>
            <div className="col-sm-10 d-flex align-items-center part2">
              {context.countryList.length!==0 &&    <CountryDropdown></CountryDropdown> }
           
              <SearchBox></SearchBox>
              <div className="part3 d-flex align-items-cnter ml-auto ">
                <Button className="circle"><CiUser></CiUser></Button>
                <div className="ml-auto cartTab d-flex align-item-center ml-auto">
                  <span className="price mt-3">$3.46</span>
                  <div className="position-relative shopcart d-flex align-items-center">
                    <Button className="circle"><IoBagOutline></IoBagOutline></Button>
                    <span className="count d-flex align-items-center justify-content-center">0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      <Navigation></Navigation>
      </div>
    </>
  )
}

export default Header