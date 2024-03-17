import React from "react";
import "/node_modules/primeflex/primeflex.css";
import "../estilo/content.css";

function Content() {
  return (
    <body>
      <header className="header-logo grid-header">
        <div className="cmp1">
          <img src={require("../img/Genshin-Impact-Logo.jpg")} alt="logo" />
        </div>
        <div className="cmp2 btn-header grid-btn">
          <a href="/" className="cmp1 btna">About </a>
          <a href="/" className="cmp2 btna">Tokenomics</a>
          <a href="/" className="cmp3 btna">Follow Us</a>
        </div>
      </header>
      <div className="container-present grid-orden">
        <div className="cmp1 container-img">
          <div className="img-content"> 

          </div>
          {/* <img
            className="paimon-present"
            src={require("../img/Arte_de_personaje_Paimon.png")}
            alt="img-paimon"
          /> */}
        </div>
        <div className="cmp2 text-container">
          <h1 className="text">Follow Us</h1>
          <div className="social-container">
            <div className="btn-container">
              <button className="btn1">Telegram</button>
              <button onClick={() => window.location.href = 'https://twitter.com/genshinimpactes?lang=es'} class="btn2">Twitter</button>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Content;
