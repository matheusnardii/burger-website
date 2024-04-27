import styles from "./style.module.scss";

export const ProductCard = ({ product, addProduct}) => {
  return (
    <li className={styles.card__containner}>
      <div className={styles.card__header}>
        <img src={product.img} alt={product.name} />
      </div>
      <div className={styles.card__main}>
        <h3>{product.name}</h3>
        <p>{product.category}</p>
        <span>
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <button className={styles.btn} onClick={() => addProduct(product) }>Adicionar</button>
      </div>
    </li>
  );
};
