// create a context - this is parent and consumer comes under this.
// Provider - it's working like a delivery boy
// consumer => useContext Hook - to simplify the lenghty process of consumer we use useContextHook. 
import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";

const AppContext = createContext();
//here we have to create a global store which contains more components pages as its child elements.
//here {children} props is working for App component.

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING" });
        try {
            const response = await axios.get(url);
            const products = response?.data;
            //have to store data of the api into state through dispatch method  so that we can use it globally.
            //payload - it defines which things are required to do the perticular task.
            dispatch({ type: "SET_API_DATA", payload: products });
        } catch (error) {
            dispatch({ type: "API_ERROR" })
        }

    }
    useEffect(() => {
        getProducts(API);
    }, []);

    return (
        //here ... is spread operator and it can contains all the values.
        <AppContext.Provider value={{ ...state }} >
            {children}  
        </AppContext.Provider>
    )

};
//custom hooks
const useProductContext = () => {
    return useContext(AppContext);
}
export { AppProvider, AppContext, useProductContext };