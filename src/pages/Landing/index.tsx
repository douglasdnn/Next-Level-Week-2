import React from 'react';
// o Link permite trocar o "a href=" por "Link To="", que só carrega o componente, em vez da tela inteira (Single Page Application)
import { Link } from 'react-router-dom'

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';


function Landing() {
    return (
        <div className="" id="page-landing">
            <div className="container" id="page-landing-content">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy" className="" />
                    <h2>Sua Plataforma de Estudos Online</h2>
                </div>

                <img className="hero-image" src={landingImg} alt="Plataforma de Estudos" />
                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="estudar" />
                            Estudar
                        </Link>
                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="dar aulas" />
                            Dar Aulas
                        </Link>
                </div>
                <span className="total-connections">
                    Total de 200 conexões já realizadas <img src={purpleHeartIcon} alt="coração roxo" />
                </span>


            </div>
        </div>
    )
}

export default Landing;
