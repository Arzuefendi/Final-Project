import React from 'react'
import { useTranslation } from 'react-i18next';

const Wishlist = () => {
  const { t } = useTranslation();
  return (
    <div className='wishlist'>
      <div className="contact-header text-center">
        <img src="	https://wpbingo-darion.myshopify.com/cdn/shop/files/bg-breadcrumb.jpg?v=1721207637" />
        <h2>{t('Home')} /{t('Wishlist')}</h2>
      </div>
    </div>
  )
}

export default Wishlist
