import React from 'react'
import './styles.css'
import House from '../../assets/house.svg'
import People from '../../assets/contact.svg'
import Love from '../../assets/love.svg'
import Serach from '../../assets/search.svg'


function Header() {

    return (
        <div>
            <header>
                <div className='container'>
                    <div className='div-house' >
                        <div className='house-img' >
                            <img src={House} alt="icon-house" />
                        </div>
                        <h2>HOMEYOU</h2>
                    </div>
                    <div className='div-nav'>
                        <nav>
                            <ul>
                                <li className='menu-list'><a href=''>Inicio</a></li>
                                <li className='menu-list'><a href=''>Galeria</a></li>
                                <li className='menu-list'><a href=''>Contato</a></li>
                            </ul>
                            <button type='button'><a href=''><img src={People} alt="peolpe" /></a></button>
                            <button type='button'><a href=''><img src={Love} alt="love" /></a></button>
                            <button type='button'><a href=''><img src={Serach} alt="serach" /></a></button>
                        </nav>
                    </div>
                </div>
            </header>
        </div>
    )


}

export default Header