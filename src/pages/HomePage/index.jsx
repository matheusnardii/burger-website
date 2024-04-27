import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { api } from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const HomePage = () => {
  const cart = localStorage.getItem("@BurguerKenzieCard");

  const [productList, setProductList] = useState([]);
  const [cartList, setCartList] = useState( cart ? JSON.parse(cart) : []);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(()=> {
    const getProducts = async () => {
      const { data } = await api.get("/products");
      setProductList(data);
    }
    
    getProducts()
    const cart = JSON.parse(localStorage.getItem("@BurguerKenzieCard"));
    if(cart && cart.length > 0){
      setCartList(cart)
    }
  }, []);

  const addProduct = (product) => {
    const hasProduct = cartList.find((products) => products.id === product.id);

    if(!hasProduct){
      setCartList([...cartList, product]);
      toast.success("Produto adicionado ao carrinho");
    }else{
      toast.error("Produto duplicado.")
    }
  };

  const removeProduct = (productId) => {
    const newCartList = cartList.filter(({ id }) => id !== productId);
    setCartList(newCartList);
    toast.error("Produto removido do carrinho");
  };

  const resetCartList = () => {
    setCartList([]);
    toast.success("Carrinho vazio")
  };

  useEffect(()=>{
   const saveCard = () => {
    localStorage.setItem("@BurguerKenzieCard", JSON.stringify(cartList));

   }
   saveCard();
  }, [cartList]);

  return (
    <>
      <Header setIsOpen={setIsOpen} cartListSize={cartList.length}/>
      <main>
        <ProductList productList={productList} addProduct={addProduct}/>
        {isOpen ? <CartModal setIsOpen={setIsOpen} cartList={cartList}  setCartList={setCartList} removeProduct={removeProduct} resetCartList={resetCartList}/> : null}
        <ToastContainer autoClose={ 1.5 * 1000 } theme= {"light"} />
      </main>
    </>
  );
};
