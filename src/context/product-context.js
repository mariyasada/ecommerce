import axios from "axios";
import { useContext, useState,createContext,useEffect,useReducer} from "react";
import { filterProductReducer } from "./Reducer/ProductFilterReducer";
import { composeFunction,functionList } from "./utils/utils";

const ProductContext =createContext();
const initialState={  
  sortByPrice: null,
  sortByCategory: null,
  pricerange: 12000,
  showAllProduct: true,
  fastDelivery: false,
  sortByBrand: [],
  sortByQuantity: null,
  sortByRatings: null,
  searchByQuery: ""
}
 const ProductProvider =({children})=>{
    const [productList,setProductList]=useState([]);
    const [isloading,setLoading]=useState(false);

    useEffect(()=>{     
         (async()=>{
          
          try{
              setLoading(true);
              const {data:{products}} = await axios.get("/api/products");
              setLoading(false);              
              setProductList(products);
          }
          catch{
              console.error("can't get data");
          }
        })();
    },[])

    const [state,dispatch]=useReducer(filterProductReducer,initialState);
    const showProductList = composeFunction (state,functionList)([...productList]);
    return ( <ProductContext.Provider value={{productList,setProductList,showProductList,state,dispatch,isloading,setLoading}}>
        {children}
    </ProductContext.Provider>)
}
  const useProduct =()=>useContext(ProductContext);

  export {useProduct,ProductProvider}

