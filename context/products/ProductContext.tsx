import { createContext,useContext,useReducer } from "react";

const ProductContext = createContext(null);
const ProductDispatchContext = createContext(null);

export function ProductProvider({children}:any) {
    const [product,disptach] = useReducer(
        productReducer as any,
        initialProducts
    );

    return(
        <ProductContext.Provider value={(product)as any}>
            <ProductDispatchContext.Provider value={(disptach) as any}>
                {children}
            </ProductDispatchContext.Provider>
        </ProductContext.Provider>
    )
}

export function useProduct(){
    return useContext(ProductContext)
}

export function useProductDispatch(){
    return useContext(ProductDispatchContext)
}

function productReducer(product:any,action:any){

}
const initialProducts = [{}]