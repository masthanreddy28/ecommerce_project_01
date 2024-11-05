import Rating from '@mui/material/Rating';
import { Button } from '@mui/material'
import { AiOutlineFullscreen } from "react-icons/ai";
import { IoIosHeartEmpty } from "react-icons/io";
const ProductItem=()=>{
return(
    <div className="item productItem">
    <div className="imgWrapper">
      <img src="https://hyper-marche.com/storage/app/public/product/2024-07-10-668ee2f4426f1.webp" className="w-100"></img>
      <span className="badge badge-primary">28%</span>
      <div className="actions">
        <Button><AiOutlineFullscreen/></Button>
        <Button><IoIosHeartEmpty/></Button>
      </div>
    </div>
    <div className="info">
    <h4>Original lays</h4>
    <span className="text-success d-block">In Stock</span>
    <Rating  className="mt-2 mb-2"name="read-only" defaultValue={2.5} precision={0.5} size="small"  readOnly />
    <div className="d-flex">
      <span className="oldPrice">$20.00</span>
      <span className="netPrice text-danger ml-2">$14.00</span>
    </div>
    </div>
  </div>
)
}
export default ProductItem;