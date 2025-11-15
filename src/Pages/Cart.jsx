import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useEffect,useState } from 'react';
import Title from '../Component/Title';
import Product from './Product';
import { assets } from '../assets/assets';
import CartTotal from '../Component/CartTotal';


const Cart = () => {
  const { products , currency , cartItem ,updateQuantity,navigate} = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  
 useEffect(() => {
  
  const tempData=[];

  for(const items in cartItem)
  {
      for(const item in cartItem[items])
      {
         
              if(cartItem[items][item]>0)
              {

              tempData.push(
                {
                  _id: items,
                  size:item,
                  quantity:cartItem[items][item]
                }
              )
            }
            }
  }
setCartData(tempData);
console.log(tempData);

  
   
 }, [cartItem])

      

 
  return (
    <div className='border-t pt-14'>
     <div className='text-2xl mb-3'>
<Title text1={'YOUR'} text2={'CART'} />
     </div>

   
     <div>
      {
        cartData.map((item,index)=>
        {
const productData=products.find((product)=>product._id === item._id);
//console.log('Component rendered');

return (
  <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5] sm:grid-cols-[4fr_2fr_0.5] items-center gap-4'>
    <div className='flex flex-col sm:flex-row sm:items-center gap-4'>
      <img className='w-16 sm:w-20' src={productData.image[0]} alt="" />
      
      <div className='flex flex-col sm:ml-4'>
        <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
        <div className='flex items-center gap-4 mt-2'>
          <p className='text-sm sm:text-base'>
            {currency}{productData.price}
          </p>
          <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>
            {item.size}
          </p>
        </div>
      </div>

      <div className='flex items-center gap-4 mt-4 sm:mt-0'>
        <input
          onChange={(e) => {
            const quantity = Number(e.target.value);
            if (quantity > 0) {
              updateQuantity(item._id, item.size, quantity);
            }
          }}
          className='border max-w-[80px] sm:max-w-[120px] px-2 py-1'
          type="number"
          min={1}
          defaultValue={item.quantity}
        />

        <img
          onClick={() => updateQuantity(item._id, item.size, 0)}
          className='w-4 sm:w-5 cursor-pointer'
          src={assets.bin_icon} alt="Delete"
        />
      </div>
    </div>
  </div>
);



       })
      }
     </div>
<div className='flex justify-end my-20' >
<div className='w-full sm:w-[450px]' >
<CartTotal/>
<div className='w-full '>
  <button onClick={()=>navigate('/place-order')} className='bg-black text-white text-sm my-8 px-8 py-3 m-auto '>PROCEED TO CHECKOUT</button>

</div>
</div>
</div>

  
          
   
    </div>
 )

 }

export default Cart











