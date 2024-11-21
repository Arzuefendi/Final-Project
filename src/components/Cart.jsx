import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../ModeContext/Mode';

const Cart = () => {
  const { t } = useTranslation();
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div className={`cart ${isDarkMode ? 'dark-mode' : 'light-mode'} `}>
      <div className="contact-header text-center mt-5">
        <img src="	https://wpbingo-darion.myshopify.com/cdn/shop/files/bg-breadcrumb.jpg?v=1721207637" />
        <h2>{t('Home')} /{t('Cart')} </h2>
      </div>
      
    </div>
  )
}

export default Cart
