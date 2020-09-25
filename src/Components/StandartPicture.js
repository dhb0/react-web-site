import React from "react";
import screen2 from '../imgs/screen2.jpg'

const StandartPicture = () => {
  return (
    <div className="standartpicture">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12">
            <h3>Standart Picture Section</h3>
            <div className="orange-line"></div>
            <p>Cillum est qui aliqua tempor mollit tempor quis laboris nisi ad mollit duis ex. Nostrud commodo reprehenderit Lorem cupidatat in laboris ullamco mollit reprehenderit pariatur. Sunt id pariatur ullamco ad velit dolore est voluptate eiusmod sint nostrud ullamco est eiusmod. Voluptate ullamco dolore aute commodo. Reprehenderit occaecat commodo culpa mollit reprehenderit pariatur do anim reprehenderit enim officia ut sit amet. Reprehenderit incididunt ut sunt qui excepteur. Elit eu duis et tempor occaecat deserunt ut dolore aliquip.</p>
          </div>
          <div className="col-md-6 col-12">
            <img src={screen2} className="img-fluid" alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StandartPicture;
