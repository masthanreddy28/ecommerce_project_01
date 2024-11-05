import { FaAngleDown } from "react-icons/fa6";
import Button from '@mui/material/Button';

import Dialog from '@mui/material/Dialog';
import { IoSearch } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";

const CountryDropdown = () => {
  const [isOpenModel,setIsOpenModel]=useState(false);
  const [selectTab,setSelectTab]=useState(null)
  const [countryList,setCountryList]=useState([]);
  const context=useContext(MyContext);
useEffect(()=>{
  setCountryList(context.countryList)
},[])
 const selectCountry=(index,country)=>{
setSelectTab(index);
console.log(country)
context.setSelectedCountry(country)
setIsOpenModel(false)
 }
 const filterList=(e)=>{
  const keyWord=e.target.value.toLowerCase();
  const list=countryList.filter((item)=>{
    return item.country.toLowerCase().includes(keyWord)
  }
  );
 
  console.log(context.selectCountry)
  setCountryList(list)
 }
  return (
    <>
      <Button className="countryDrop" onClick={()=>{setIsOpenModel(true)}}>
        <div className="info d-flex flex-column">
          <span className="label">Your location</span>
          <span className="name">{context.selectedCountry!==""?context.selectedCountry.length>10?context.selectedCountry?.substr(0,10)+'...':context.selectedCountry:"select Location"}</span>
        </div>
        <span><FaAngleDown /></span>
      </Button>
      <Dialog open={isOpenModel} onClose={()=>{setIsOpenModel(false)}} className="locationModal">
           <h4>Choose your Delivery Location</h4>
           <p>Enter your address and we will specify the offer for your area</p>
           <Button className="close_" onClick={()=>{setIsOpenModel(false)}}><IoClose></IoClose></Button>
           <div className="headerSearch w-100">
             <input type="text" placeholder="Search your area... " onChange={filterList}></input>
          <Button> <IoSearch/></Button>
          </div>
             <ul className="countryList mt-3">
              {
              countryList?.length!==0 && countryList?.map((item,index)=>{
             
                  return(
                    <li key={index}><Button onClick={()=>{selectCountry(index,item.country)
                    }} >{item.country}</Button></li>
                  )
                })
              }
               

             </ul>
      </Dialog>
    </>
  )
}

export default CountryDropdown