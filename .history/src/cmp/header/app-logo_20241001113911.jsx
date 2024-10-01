import { useNavigate } from 'react-router-dom'

import { useTranslation } from 'react-i18next'

export function AppLogo() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  return (
    <section
      onClick={() => navigate('/home')}
      className="app-logo flex align-center "
    >
      <h1>{t('app_title')}</h1>
      <img src={require('../../assets/img/keep.logo.png')} alt="" />
    </section>
  )
}
