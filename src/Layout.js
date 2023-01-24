import { Outlet, Link } from "react-router-dom";
import {useEffect} from "react";
import "./main.scss";

const Layout = () => {

  useEffect(() => {
    document.title = "Correa Decorações"
 }, []);
  return (
    <>
    <header>

        <div className="banner">
            <h1><img src="logo.png" className="logo"/> Correa Decorações </h1>

        </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/servicos">Serviços</Link>
          </li>
          
          <li>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
      </nav>
      </header>

      <div className="main_box grid_center">
        <div className="main_wrap">
            <main>
                  <Outlet />
            </main>

            <footer>
                <div>

                  <p><b>Endereço:</b> Rua Jorge Braga, 356,<br/>
                   Avenida Itajubá/MG </p>

                  <p><b>CEP:</b> 37504-052 </p>

                  <p> <b>Telefone:</b> (35) 3622-2444</p>

                  <p><b>Wats app:</b> 35 9986-6608</p>

                  <p><b>Email:</b> correadecoracoes@uol.com.br</p>

                  <p><b>Instagram:</b> correadecoracoes</p>

                </div>

                <div className="attribution">
                  <div className="text_medium bold">                
                    <img src="logo.png" className="logo pic_100"/><br/>Correa Decorações
                  </div>


                  <small>Site desenvolvido por <a href="http://icaromendes.epizy.com/" target="_blank">Icaro Mendes.</a></small>
                </div>
            </footer>
        </div>
      </div>
    </>
  )
};

export default Layout;