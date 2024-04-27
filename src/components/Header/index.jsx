import Logo from "../../assets/Logo.svg";
import { MdShoppingCart } from "react-icons/md";
import styles from "./style.module.scss";

export const Header = ({ setIsOpen, cartListSize }) => {

  return (
    <header className={styles.header__box}>
      <div className={styles.header__containner}>
        <img src={Logo} alt="Logo Kenzie Burguer" />
        <div>
          <button
            onClick={() => setIsOpen(true)}
            className={styles.header__btn}
          >
            <MdShoppingCart size={30} />
            <div className={styles.header__span}>
              <span className={styles.span__text}>{cartListSize}</span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};
