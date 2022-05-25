import React from "react";
import './styles.css'
import House from '../../assets/house.svg'

function Footer() {
    return (
        <div className="footer">
            <div>
                <h2>Produtos</h2>
                <p><a href="">Mobilia</a></p>
                <p><a href="">Segurança</a></p>
                <p><a href="">Design Interior</a></p>
            </div>
            <div>
                <h2>Mais Informações</h2>
                <p><a href="">Contrato</a></p>
                <p><a href="">Sobre nós</a></p>
                <p><a href="">Termos e Condições</a></p>
            </div>
            <div>
                <h2>Redes Sociais</h2>
                <p><a href="">Pinterest</a></p>
                <p><a href="">Facebook</a></p>
                <p><a href="">Instagram</a></p>
            </div>
        </div>
    )
}

export default Footer