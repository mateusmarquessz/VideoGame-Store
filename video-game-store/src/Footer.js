import React from 'react';
import './componetes/Footer.css'
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-logo">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/55213771518339.5bc7dc8be780b.png" alt="" />
                </div>
                <div className="footer-links">
                    <ul>
                        <li><a href="#">Página Inicial</a></li>
                        <li><a href="#">Catálogo de Jogos</a></li>
                        <li><a href="#">Ofertas Especiais</a></li>
                        <li><a href="#">Sobre Nós</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </div>
                <div className="footer-social">
                    <ul>
                        <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Sua Empresa. Todos os direitos reservados. | <a href="#">Política de Privacidade</a></p>
            </div>
        </footer>
    );
};

export default Footer;
