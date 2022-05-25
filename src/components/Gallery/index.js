import React from "react";
import './styles.css'
import Upholstered from '../../assets/upholstered.svg'
import Notebook from '../../assets/notebook.svg'
import Bathroom from '../../assets/bathroom.svg'

function Gallery() {
    return (
        <div className="gallery">
            <div className="title">
                <div>
                    <h2>Galeria</h2>
                </div>
                <div>
                    <p>Se você está entediado com a aparência da decoração de interiores da casa comuns,<br />
                        trabalhamos com designs diferentes e inovadores.</p>
                </div>
            </div>
            <div className="photos">
                <div >
                    <img src={Upholstered} alt="upholstered"/>
                </div>
                <div>
                    <img src={Notebook} alt="notebook"/>
                </div>
                <div>
                    <img src={Bathroom} alt="bathroom"/>
                </div>
            </div>
        </div>
    )
}

export default Gallery