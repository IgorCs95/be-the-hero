import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'

import './styles.css';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogon(e) {
        e.preventDefault();

        try {
            const respose =await api.post('sessions', { id });
            console.log(respose.data.name);

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', respose.data.name);

            history.push('/profile');
        } catch (err) {
            alert('Falha no login, tente novamente');
        }

    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be the Hero" />

                <form onSubmit={handleLogon} >
                    <h1>Faça Seu Logon</h1>

                    <input placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Nao tenho Cadastro</Link>
                </form>

            </section>
            <img src={heroesImg} alt="Heroes" />
        </div>

    );
}