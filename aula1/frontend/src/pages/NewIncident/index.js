import React from 'react';
import logoImg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css'

export default function NewIncedent(){
    return (
        <div className="new-incident">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero" />
                    <h1>Cadastro novo Caso</h1>
                    <p>Descrevao caso detalhadamente para encontrar um heroi para resolver isso.</p>
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para Home</Link>
                </section>

                <form>
                    <input placeholder="Titulo do Caso"/>
                    <textarea placeholder="Descrição"/> 
                    <input placeholder="Valor em reais" />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>

        </div>
    );
}