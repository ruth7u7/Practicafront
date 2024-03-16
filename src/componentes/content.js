import React from "react";
import "/node_modules/primeflex/primeflex.css";
import "../estilo/content.css";

function Content() {
  return (
    <body>
      <header className="header-logo flex justify-content-between align-items-center">
        <div>
          <img src={require("../img/Genshin-Impact-Logo.jpg")} alt="logo" />
        </div>
        <div className="btn-header">
          <a className="btna">About </a>
          <a className="btna">Tokenomics</a>
          <a href="" className="btna">Follow Us</a>
        </div>
      </header>
      <div className="container-present">
        <div>
          <img
            className="paimon-present"
            src={require("../img/Arte_de_personaje_Paimon.png")}
            alt="img-paimon"
          />
        </div>
        <div className="text-container">
          <h1 className="text">Follow Us</h1>
          <div className="social-container">
            <div className="btn-container">
              <button className="btn1">Telegram</button>
              <button href='https://twitter.com/genshinimpactes?lang=es' className="btn2">Twitter</button>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Content;
