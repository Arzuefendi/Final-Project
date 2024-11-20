import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../ModeContext/Mode";

const Wishlist = () => {
  const { t } = useTranslation();
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div className={`wishlist ${isDarkMode ? 'dark-mode' : 'light-mode'} `}>
      <div className="contact-header text-center">
        <img src="	https://wpbingo-darion.myshopify.com/cdn/shop/files/bg-breadcrumb.jpg?v=1721207637" alt=''/>
        <h2>{t('Home')} /{t('Wishlist')}</h2>
      </div>
    
    </div>
  )
}

export default Wishlist
