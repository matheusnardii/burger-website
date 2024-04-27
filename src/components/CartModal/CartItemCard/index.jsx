import { MdDelete } from "react-icons/md";
import styles from "./style.module.scss";

export const CartItemCard = ({ product, removeProduct }) => {
  return (
    <li className={styles.item__container}>
        <div className={styles.img__box}>
          <img src={product.img} alt={product.name} />
        </div>
        <div className={styles.info__containner}>
          <div className={styles.info__box}>
            <h3>{product.name}</h3>
            <p>
              {product.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
            <div>
              <button onClick={() => removeProduct(product.id)} aria-label="delete" title="Remover item">
                <MdDelete size={21} />
              </button>
            </div>
          </div>
        </div>
    </li>
  );
};
