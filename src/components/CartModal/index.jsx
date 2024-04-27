import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import styles from "./style.module.scss";
import { useEffect, useRef } from "react";
import { outClick } from "../../hooks/outClick";
import { keyDown } from "../../hooks/keyDown";

export const CartModal = ({ cartList, setIsOpen, removeProduct, resetCartList }) => {
  const total = cartList.reduce((prevValue, product) => {
    return prevValue + product.price;
  }, 0);

const modalRef = outClick (() => {
  setIsOpen(false);
});

const buttonRef = keyDown("Escape", () => {
  setIsOpen(false);
});
  

  return (
    <div className={styles.modalOverlay} role="dialog">
      <div ref={modalRef} className={styles.modalBox} >
        <div className={styles.modal__header}>
          <h2>Carrinho de compras</h2>
          <button  aria-label="close" title="Fechar">
            <MdClose   onClick={() => setIsOpen(false)} size={21} className={styles.close} ref={buttonRef}  />
          </button>
        </div>
        
         <div>
            <ul className={styles.modal__products}>
               {cartList.map((product) => (
               <CartItemCard key={product.id} product={product} removeProduct={removeProduct} />
               ))}
            </ul>
            <div className={styles.footer__containner}>
                <div className={styles.total__box}>
                  <p>Total</p>
                  <span>
                  {total.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                  })}
                  </span>
                </div>
                <button onClick={resetCartList}>Remover todos</button>
            </div>
         </div>
        
      </div>
    </div>
  );
};
