import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

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
                    <Navbar path="/" title="My Profile"/>
                    <Navbar path="/" title="Portfolio"></Navbar>
                </header>

                <div className="my-name">
                    <h1>Alexis <br></br> Peinado</h1>
                </div>

            <div className="banner">
            </div>
            <div className="separador">
                <img className="profile__img" src="https://i.postimg.cc/Bvr19B0r/profile-image.jpg" />
            </div>
           
            <main className="container">

                 <section className="myself">
                    <h1 className="container__h1">About Myself</h1>
                    <p className="myself__p">Hello everyone, i´m Jesús Alexis Peinado Cabrera i´m a Front-end web developer. I was born in Topia, Durango, Mexico in a humble family
                     in the region of the Quebradas. All my life i have been characterized by being a young man with high academic grades, every time in second-first place. <br/>
                     I´m an apasionate of technology, i really love to learn new things every day, that produces in my self a feeling of satisfaction and happiness. <br/>
                     When a was 10 years old i learned VBA watching video tutorials on a near internet cafe, but i only learned to do very simple things, but that waked up on me a wish of knowledge about technology. <br/>
                     That dream still alive even these days, that´s why i spend a lot of time learning and learning the newest technologies to build business proyects and my own proyects.
                    </p>
                    <h1 className="container__h1" >Technologies That I Know:</h1>
                    </section>

                <section className="container__technologies">
                    
                <Router>
                 <Link to="/certificate-html" style={{color: 'inherit', textDecoration: 'inherit'}}><Recuadros src="https://i.postimg.cc/vZLNHpJn/descarga-2.png" secondClass="recuadro item-1" value="100" title="HTML5 - 100%"/></Link> 
                  <Link>  <Recuadros src="https://i.postimg.cc/k5JhVTCp/descarga-3.png" secondClass="recuadro item-2" value="90" title="CSS3 - 90%" /></Link>
                    <Recuadros src="https://i.postimg.cc/2SftYzKm/descarga-1.png" secondClass="recuadro item-3" value="60" title="Javascript - 60%" />
                    <Recuadros src="https://i.postimg.cc/sX8nNyhk/github.png" secondClass="recuadro item-4" value="90" title="Git y Github - 90%"/>
                    <Recuadros src="https://i.postimg.cc/hjhyshf8/ps.png" secondClass="recuadro item-5" value="80" title="Photoshop - 80%"/>
                    <Recuadros src="https://i.postimg.cc/HWFSdphn/react.png" secondClass="recuadro item-6" value="60" title="React JS - 60%"/>
                    <Recuadros src="https://i.postimg.cc/4481xX2V/ingles.png" secondClass="recuadro item-7" value="50" title="Inglés - 50% "/>
                    <Recuadros src="https://i.postimg.cc/0j2G84q8/seo.png" secondClass="recuadro item-8" value="50" title="SEO - 50%" />
                    <Recuadros src="https://i.postimg.cc/44LSCtDT/responsive.png" secondClass="recuadro item-9" value="80" title="Reponsive Design - 80%" />
                    <Recuadros src="https://i.postimg.cc/Nfy9bq8w/mongodb.png" secondClass="recuadro item-9" value="40" title="MongoDB - 40%" />
                    <Recuadros src="https://i.postimg.cc/Dz32qR65/nodejs.png" secondClass="recuadro item-9" value="40" title="NodeJS - 40%" />
                </Router>
                </section>
                <section className="studies">
                    <h1 className="container__h1">My Education</h1>
                    <p className="myself__p">
                        <ol>
                            <li> Escuela Secundaria Técnica #42 - I recibed my certificate of secondary school 2012 - 2015</li>                        
                            <img src="https://i.postimg.cc/d0BJZnLH/est42.jpg"/>
                            <li>Centro de Bachillerato Tecnológico Industrial y de Servicios #112 - I recibed my certificate of programming technician.</li>
                            <img src="https://i.postimg.cc/xdY0dBTN/cbtis.jpg"/>
                            <li>Universidad Tecnológica de Tamazula - In progress....</li>
                            <img src="https://i.postimg.cc/Kz8xPLTZ/utt.jpg"/>
                        </ol>
                    </p>
                </section>
            </main>

            </div>
        );
    }
}