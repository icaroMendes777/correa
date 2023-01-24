import React from "react";
import "./main.scss";   

export default function Contato() {
  return (
    <div className="wrap_contato">
        

      <div className="text_contato">
            <h2>Contato</h2>

              <p> <b>Telefone:</b> (35) 3622-2444</p>

                <p><b>Wats app:</b> 35 9986-6608</p>

                <p><b>Email:</b> correadecoracoes@uol.com.br</p>

                <p><b>Instagram:</b> correadecoracoes</p>
              
      </div>
        
         
      <div>
        <h2>Localização:</h2>
        <div class="mapouter">

          
            <div class="gmap_canvas"><iframe width="500" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=correa%20%20decora%C3%A7%C3%B5es%20itajuba&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://fmovies-online.net">fmovies</a><br/><a href="https://www.embedgooglemap.net"></a></div>
        </div>
      </div>

     
    </div>
  );
}
