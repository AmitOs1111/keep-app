import { useNavigate } from 'react-router-dom'

export function AppLogo() {
  const navigate = useNavigate()
  return (
    <section
      onClick={() => navigate('/home')}
      className="app-logo flex align-center "
    >
      <h1>Keep</h1>
      <img src={require('../../assets/img/keep.logo.png')} alt="" />
    </section>
  )
}
