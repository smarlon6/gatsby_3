import * as React from "react";
import { Link } from "gatsby";
import { container, heading, navLinks, navLinkItem, navLinkTex } from "../componentes/layout.module.css";

export default function Layout({ children, titulo }) {
    return (
        <div className={container}> 
            <hr /> 
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link to="/">Inicio</Link></li>
                    <li className={navLinkItem}><Link to="/about">Sobre</Link></li>
                </ul>
            </nav>
            <main>
                <h1>{titulo}</h1>
                {children}
            </main>
            <hr />
            <p>Rodapé</p>
        </div>
    );
}
