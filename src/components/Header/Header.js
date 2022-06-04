import './Header.css'
import logoFarmbox from '../../assets/logo-fb.png'

const Header = () => {
  return (
    <header className="header">
        <div className="header-container">
            <div className="header-container-links">
                <h1><span><i className="fa-solid fa-clipboard-list"></i></span>Gestão de pontos no mapa</h1>
                <a href="/"><img className='logo' src={logoFarmbox} alt="fbimage"/></a>
            </div>
        </div>
    </header>
  )
}

export default Header