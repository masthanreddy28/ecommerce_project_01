import { Button } from '@mui/material'
import { useState } from 'react';
import { FaBars } from 'react-icons/fa6'
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa6";




const Navigation = () => {
   const [openSideBar,setOpenSideBar]=useState(false)
   return (
      <nav>
         <div className="container">
            <div className="row">
               <div className="col-sm-3 navPart1">
                  <div className='cartWrapper'>
                     <Button className="allCatTab align-items-center" onClick={()=>setOpenSideBar(!openSideBar)}>
                        <span className='icon1 mr-2'> <FaBars></FaBars></span>
                        <span className="text"> ALL CATERGORIES</span>
                        <span className='icon2 ml-2'> <FaAngleDown></FaAngleDown></span>
                     </Button>
                     <div className={`sidebarNav ${openSideBar===true?'open':""}`}>
                        
                       <ul>
                        <li><Link to={"/"}><Button>Men <FaAngleRight className='ml-auto'/></Button></Link>
                      {/* creating submenu for catering */}
                        <div className='submenu'>
                        <Link to={"/"}><Button>clothing</Button></Link>
                           <Link to={"/"}><Button>footwear</Button></Link>
                           <Link to={"/"}><Button>watches</Button></Link>
                        </div>

                        </li>
                        <li><Link to={"/"}><Button>Women <FaAngleRight className='ml-auto'/></Button></Link>
                        
                        <div className='submenu'>
                        <Link to={"/"}><Button>clothing</Button></Link>
                           <Link to={"/"}><Button>footwear</Button></Link>
                           <Link to={"/"}><Button>watches</Button></Link>
                        </div>
                        
                        </li>
                        <li><Link to={"/"}><Button>Beauty</Button></Link></li>
                        <li><Link to={"/"}><Button>Watches</Button></Link></li>
                        <li><Link to={"/"}><Button>Kids</Button></Link></li>
                        <li><Link to={"/"}><Button>Gift</Button></Link></li>
                 
                       </ul>
                     </div>
                  </div>
               </div>
               <div className="col-sm-9 navPart2 d-flex align-items-center">
                  <ul className='list list-inline ml-auto'>
                     <li className='list-inline-item'>
                        <Link to={"/"}><Button>Home</Button></Link>
                        {/* creating sub menu */}

                     </li>
                     <li className='list-inline-item'><Link to={"/"}><Button>Men</Button></Link>

                        <div className='submenu shadow'>
                           <Link to={"/"}><Button>clothing</Button></Link>
                           <Link to={"/"}><Button>footwear</Button></Link>
                           <Link to={"/"}><Button>watches</Button></Link>
                        </div></li>
                     <li className='list-inline-item'><Link to={"/"}><Button>Women</Button>
                     </Link>
                        <div className='submenu shadow'>
                           <Link to={"/"}><Button>clothing</Button></Link>
                           <Link to={"/"}><Button>footwear</Button></Link>
                           <Link to={"/"}><Button>watches</Button></Link>
                        </div>

                     </li>
                     <li className='list-inline-item'><Link to={"/"}><Button>beauty</Button></Link>
                        <div className='submenu shadow'>
                           <Link to={"/"}><Button>clothing</Button></Link>
                           <Link to={"/"}><Button>footwear</Button></Link>
                           <Link to={"/"}><Button>watches</Button></Link>
                        </div></li>
                     <li className='list-inline-item'><Link to={"/"}><Button>watches</Button></Link></li>
                     <li className='list-inline-item'><Link to={"/"}><Button>kids</Button></Link></li>
                     <li className='list-inline-item'><Link to={"/"}><Button>Blog</Button></Link></li>
                     <li className='list-inline-item'><Link to={"/"}><Button>Contact Us</Button></Link></li>
                  </ul>
               </div>

            </div>
         </div>
      </nav>
   )
}

export default Navigation