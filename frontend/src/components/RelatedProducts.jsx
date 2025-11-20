import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'

const RelatedProducts = (category,subCategory) => {

const {products} = useContext(ShopContext);
const [related, setrelated] = useState([]);

useEffect(()=>{

})

  return (
    <div></div>
  )
}

export default RelatedProducts