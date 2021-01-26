import React from 'react';
import '../../css/Principal.css';

function Principal() {
    return (
        <main id="priIndex">
            <div className="row">
                <div className="text-center">
                    <img src="/img/logo-allcare.png" width="175px"/><br />

                    <h1 id="priH1">A L L <br /> C A R E</h1>
                    <h2 id="priH2">CUIDAMOS DE QUEM VOCÊ AMA </h2><br />
                    <br /><br /><br />

                    
                    <select name="selectTipo" id="priSelect" >
                        <option value="Idoso">Idoso</option>
                        <option value="Criança">Criança</option>
                        <option value="Cachorro">Cachorro</option>
                    </select>
                    
                    <input id="priInput" type="text" placeholder="Informe sua localização"/>

                </div>
            </div>
        </main>
    );
}

export default Principal;