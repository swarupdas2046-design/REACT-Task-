import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { getdata } from "../Api/Get_api";
export let ItemContext = createContext();

const MainContext = ({ children }) => {
  const [Product, setProduct] = useState([]);

    let setdata = async ()=>{
        let data = await getdata()
        // console.log(data);
        setProduct(data)
    }

  useEffect(() => {
    setdata()
  }, []);
  return <ItemContext value={Product}>
             {children}
    </ItemContext>;
};

export default MainContext;
