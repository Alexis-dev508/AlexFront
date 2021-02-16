import React, {Component} from 'react';
// import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

//Components
import Navbar from '../components/Navbar';
import Recuadros from '../components/Recuadros';
//styles
import '../components/styles/navbar.css'
import '../components/styles/recuadros.css';

export default class MainPage extends Component{
    render(){
        return(
            <div className="Main-page">
                <header className="Main-header">
                    <Navbar path="/" title="Home"/>
                    <Navbar path="/" title="Mi Perfil"/>
                    <Navbar path="/" title="Contacto"/>
                    <Navbar path="/" title="Estudios"/>
                    <Navbar path="/" title="Estudios"/>
                </header>

                <div className="my-name">
                    <h1>Alexis <br></br> Peinado</h1>
                </div>

            <div className="banner">
            </div>
            <div className="separador">
                <img className="separador_img" src="https://i.postimg.cc/Bvr19B0r/profile-image.jpg" />
            </div>
            <center><h1 style={{color:"white", fontSize:"5rem", padding:"5rem 2rem"}}>Tecnologias que conozco</h1></center>
            <main className="container">
                <Recuadros src="https://i.postimg.cc/vZLNHpJn/descarga-2.png" secondClass="recuadro item-1" value="100" title="HTML5 - 100%"/>
                <Recuadros src="https://i.postimg.cc/k5JhVTCp/descarga-3.png" secondClass="recuadro item-2" value="80" title="CSS3 - 80%" />
                <Recuadros src="https://i.postimg.cc/2SftYzKm/descarga-1.png" secondClass="recuadro item-3" value="60" title="Javascript - 60%" />
                <Recuadros src="https://i.postimg.cc/sX8nNyhk/github.png" secondClass="recuadro item-4" value="90" title="Git y Github - 90%"/>
                <Recuadros src="https://i.postimg.cc/hjhyshf8/ps.png" secondClass="recuadro item-5" value="80" title="Photoshop - 80%"/>
                <Recuadros src="https://i.postimg.cc/HWFSdphn/react.png" secondClass="recuadro item-6" value="60" title="React JS - 60%"/>
                <Recuadros src="https://i.postimg.cc/4481xX2V/ingles.png" secondClass="recuadro item-7" value="50" title="Inglés - 50% "/>
                <Recuadros src="https://i.postimg.cc/0j2G84q8/seo.png" secondClass="recuadro item-8" value="50" title="SEO - 50%" />
                <Recuadros src="https://i.postimg.cc/44LSCtDT/responsive.png" secondClass="recuadro item-9" value="80" title="Reponsive Design - 80%" />
                <Recuadros src="https://i.postimg.cc/Nfy9bq8w/mongodb.png" secondClass="recuadro item-9" value="40" title="MongoDB - 40%" />
                <Recuadros src="https://i.postimg.cc/Dz32qR65/nodejs.png" secondClass="recuadro item-9" value="40" title="NodeJS - 40%" />
            </main>

            </div>
        );
    }
}