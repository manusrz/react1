import React, {useEffect, useState} from 'react';
import ItemDetail from 'ItemDetail'
import React from 'react'

const film = {id: 1, image: "https://cdn.shopify.com/s/files/1/0424/8371/2152/products/prod-3a.png?v=1612329206", title: "sublime hope dose" };
export const ItemDetailContainer = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = new promise (
        resolve=> {
            setTimeout(()=>{
                    resolve(film);
                }, 3000);
                   }
   

  });
  

  
  
    return (
    <ItemDetail data={data} />
  )
}

export default ItemDetailContainer