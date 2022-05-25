import React from "react";
import './styles.css'
import Building from '../../assets/building.svg'
import Livingroom from '../../assets/livingroom.svg'

function Main() {
    return (
        <mai>
            <div>
                <div className="column1">
                    <div className="help">
                        <h2>Ajudar você a encontrar<br />
                            o melhor conforto,<br />
                            é nossa prioridade.
                        </h2>
                        <p>
                            Encontre uma variedade de propriedades que<br />
                            combinam com você. Esqueça todas as dificuldades<br />
                            em encontrar uma residência
                        </p>
                        <div>
                            <button type="button">Entre em contato</button>
                            <p><a href="">Mais sobre nós</a></p>
                        </div>
                    </div>
                    <div>
                        <div><img src={Building} alt="building" /></div>
                    </div>
                </div>
                <div className="column2">
                    <div>
                        <img src={Livingroom} alt="livingroom" />
                    </div>
                    <div>
                        <div className="design">
                            <h2>Design Minimalista</h2>
                            <p>Móveis apenas essenciais e com design moderno, além de<br />
                                revestimentos bonitos e em cores neutras para manter a casa<br />
                                sempre com um estilo clean e suave.</p>
                        </div>
                        <p><a href="">Quero saber mais sobre os designs</a></p>
                    </div>
                </div>

            </div>
        </mai>
    )
}

export default Main