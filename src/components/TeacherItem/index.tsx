import React from 'react';

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/968358?s=460&v=4" alt="Douglas Donin" />
                <div>
                    <strong>Douglas Donin</strong>
                    <span>Direito</span>
                </div>
            </header>

            <p>
                Professor de Direito.
            <br /><br />
            Advogado e desenvolvedor.
        </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="whatsapp" />
                    Entrar em contato
                </button>
            </footer>

        </article>

    )
}

export default TeacherItem;