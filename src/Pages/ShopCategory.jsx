import React from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext';
// import { RiArrowDropDownLine } from "react-icons/ri";
import { TfiAngleDown } from "react-icons/tfi";
import { Item } from '../Components/Items/Items';
import { useContext } from 'react';

export const ShopCategory = (props) => {

  const {all_products} = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <div className='shopcategory-indexSort'>
        <p>
          <span>Showing 1-4</span> out of 8
        </p>
        <div className="shopcategory-sort">
          Sort by <TfiAngleDown className='dropdown'/>
          </div>
      </div>
      <div className="shopcategory-products">
        {all_products.map((item, i)=>{
            if (props.category===item.category) {
                return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price}/>
            }
            else {
              return null;
            }
        })}
      </div>
    </div>
  )
}
