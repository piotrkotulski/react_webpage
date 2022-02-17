
import React from "react";
import Offer from "./Offer";


const Page = () => {
  return (
    <div className="container">
      <nav className="flexbox">
        <a className="firma" href="aaa">
          Firma
        </a>
        <ul>
          <li>
            <a href="#oNas">o nas</a>
          </li>
          <li>
            <a href="#offer">oferta</a>
          </li>
          <li>
            <a href="aaa" className="notActive">
              kontakt
            </a>
          </li>
        </ul>
      </nav>
      <section className="First">
        <div className="containerFirst">
          <div className="containerInside firsSecSizing">
            <h1>Nasza firma oferuje najwyższej jakości produkty.</h1>
            <h3>Nie wierz nam na słowo-sprawdź</h3>
            <a href="#offer" className="button containerFirst">
              oferta
            </a>
          </div>
        </div>
      </section>
      <section className="Second">
        <div className="containerSecond">
          <div className="containerInsideSecond">
            <h1 id="oNas">Nasi specjaliści</h1>
            <div className="specialists">
              <div className="firstSpec"></div>
              <div className="opis">
                <span className="bold">Imię Nazwisko [ dział ]</span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                vel massa et lacus egestas cursus a non magna. Fusce scelerisque
                blandit nunc, id malesuada ex lobortis a. Integer felis nisi,
                tempor elementum lorem in, varius pellentesque ligula. Duis
                efficitur lacinia enim, non tincidunt libero ultrices in.
              </div>
            </div>
            <div className="specialists">
              <div className="secondSpec"></div>
              <div className="opis">
                <span className="bold">Imię Nazwisko [ dział ]</span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                vel massa et lacus egestas cursus a non magna. Fusce scelerisque
                blandit nunc, id malesuada ex lobortis a. Integer felis nisi,
                tempor elementum lorem in, varius pellentesque ligula. Duis
                efficitur lacinia enim, non tincidunt libero ultrices in.
              </div>
            </div>{" "}
          </div>
        </div>
      </section>
      <section className="third">
        <div className="containerThird">
          <h1 id="offer">Czym Zajmuje się nasza firma?</h1>
          <Offer />
        </div>
      </section>
      <div className="footContainer">
        <div className="insideFooter">
          <p>Nazwa firmy - wszelkie prawa zastrzeżone, 2021</p>
          <div className="icons">
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook-square"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
