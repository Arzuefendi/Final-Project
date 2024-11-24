import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../ModeContext/Mode";

const Wishlist = ({ wishlist }) => {
  const { t } = useTranslation();
  const { isDarkMode } = useContext(ThemeContext);
  
  return (
    <div className={`wishlist ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="contact-header text-center mt-5">
        <img
          src="https://wpbingo-darion.myshopify.com/cdn/shop/files/bg-breadcrumb.jpg?v=1721207637"
          alt=""
        />
        <h2>{t('Home')} / {t('Wishlist')}</h2>
      </div>
      <div className="wishlist-items">
        {wishlist.length === 0 ? (
          <p>{t('Your wishlist is empty')}</p>
        ) : (
          wishlist.map((item) => (
            <div key={item.id} className="wishlist-item">
              <img src={item.image} alt={item.name} width="100" />
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
export default Wishlist; 