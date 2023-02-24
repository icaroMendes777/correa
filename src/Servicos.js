import { useState , useEffect } from "react";
import "./main.scss";

export default function Servicos() {



  const [display, setDisplay] = useState('ser_forro');



  useEffect(() => {
    const element = document.getElementById(display);
    element.style.display='block';
    
  },[display]);

  function displayServTab(tab)
  {
    if(tab==display) return;
    //esconde a tab atual
    const element = document.getElementById(display);
    element.style.display='none';

    //mostra a tab desejada
    setDisplay(tab);
  }

  return (
    <div className="servicos">
      <h2>serviços</h2>
  <p>Executamos uma enorme variedade de serviços para interiores, 
    forros, persianas, pisos laminados e outros. Veja abaixo a nossa lista:</p>
    <div className="wrap_serv">

        <div className="serv_sidebar">
          <a href="#display_serv_id" className="txt_dec_none">
          <ul>
            <li onClick={()=>{displayServTab('ser_forro')}}>Forros</li>
            <li onClick={()=>{displayServTab('serv_divisoria')}}>Divisórias</li>
            <li onClick={()=>{displayServTab('serv_piso')}}>Pisos</li>
            <li onClick={()=>{displayServTab('serv_vidro')}}>Vidros</li>
            <li onClick={()=>{displayServTab('serv_box')}}>Box Banheiro</li>
            <li onClick={()=>{displayServTab('serv_persiana')}}>Persianas</li>
            <li onClick={()=>{displayServTab('serv_tela')}}>Telas Contra Mosquitos?</li>
            <li onClick={()=>{displayServTab('serv_corrimao')}}>Corrimões</li>               
          </ul>
          </a>


          <a href="https://api.whatsapp.com/send?phone=553599866608&text=Olá! Gostaria de fazer uma consulta, Por Favor."
              className="orcamento_zap"
              target="_blank">
              <p>Faça Seu<br/> orçamento!</p> <img src="whatsapp-logo-2022.svg" className="logo_zap"/>
            </a>
        </div>


        <div className="display_serv" id="display_serv_id">

            <div className="serv_tab" id="ser_forro">
              <h3>Forros</h3>
              <p>Um forro de qualidade para sua casa. Material resistente à humidade e isolante térmico.</p>
              <div className="wrap_serv_pic">



              <picture>
                    <img src="/serv/forro2.png" alt="forro pvc"/>
                  </picture>

                  <picture>
                    <img src="/serv/forro1.webp" alt="forro pvc"/>
                  </picture>

              </div>

            </div>


            <div className="serv_tab" id="serv_divisoria">
              <h3>Divisórias</h3>
              <p>Personalize seu ambiente de maneira simples e rápida com excelente acabamento.</p>
            <div className="wrap_serv_pic">

                  <picture>
                    <img src="/serv/divisoria1.webp" alt="divisória"/>
                  </picture>

                  <picture>
                    <img src="/serv/divisoria2.jpg" alt="divisória"/>
                  </picture>

              </div>
            </div>

            <div className="serv_tab" id="serv_piso">
              <h3>Pisos</h3>
              <p>Pisos laminados e emborrachados. A melhor solução em estética e preço para o seu piso.
</p>
              <div className="wrap_serv_pic">

                  <picture>
                    <img src="/serv/piso1.webp" alt="piso"/>
                  </picture>

                  <picture>
                    <img src="/serv/piso2.webp" alt="piso"/>
                  </picture>

              </div>
            
            
            </div>


            <div className="serv_tab" id="serv_vidro">
              <h3>Vidros</h3>
              <p>Soluções em vidraçaria, com vidros laminados e temperados. Incolor, fumê ou texturizado.</p>
              <div className="wrap_serv_pic">

                  <picture>
                    <img src="loja2.png" alt="vidro"/>
                  </picture>

                  <picture>
                    <img src="/galeria1/pic1.png" alt="vidro"/>
                  </picture>


                  <picture>
                    <img src="/serv/vidro1.jpeg" alt="vidro"/>
                  </picture>
              </div>
            
            
            </div>


            <div className="serv_tab" id="serv_box">
              <h3>Box Banheiro</h3>
              <p>Box de acrílico ou blindex para seu banheiro.</p>
              <div className="wrap_serv_pic">

                  <picture>
                    <img src="/serv/box1.webp" alt="box banheiro"/>
                  </picture>

                  <picture>
                    <img src="/serv/box2.jpg" alt="box banheiro"/>
                  </picture>

              </div>
            
            
            </div>




            <div className="serv_tab" id="serv_persiana">
              <h3>Persianas</h3>
              <p>Persianas de pano ou metálicas para controlar a luz e visibilidade de seu ambiente.</p>
              <div className="wrap_serv_pic">

                  <picture>
                    <img src="/serv/persiana1.jpg" alt="persiana"/>
                  </picture>

                  <picture>
                    <img src="/serv/persiana2.jpg" alt="persiana"/>
                  </picture>

              </div>
              </div>

            <div className="serv_tab" id="serv_tela">
              <h3>Telas Contra Mosquitos</h3>
              <p>Mantenha a sua casa ventilada e protegida de mosquitos ao mesmo tempo.</p>
              <div className="wrap_serv_pic">

                  <picture>
                    <img src="/serv/telamosquito.jpg" alt="tela contra mosquito"/>
                  </picture>


              </div>

              </div>

              <div className="serv_tab" id="serv_corrimao">
              <h3>Corrimões</h3>
              <p>Corrimões para a sua escada.</p>
              <div className="wrap_serv_pic">

                  <picture>
                    <img src="/serv/corrimao1.jpeg" alt="corrimão"/>
                  </picture>

                  <picture>
                    <img src="/serv/corrimao2.jpeg" alt="corrimão"/>
                  </picture>

                  <picture>
                    <img src="/serv/corrimao3.jpeg" alt="corrimão"/>
                  </picture>


              </div>
            
            
            </div>

        </div>

    </div>
    
    
    </div>
  );
}
