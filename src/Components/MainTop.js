import React from "react";

const MainTop = () => {
  return (
    <div className="maintop">
      <div className="container row mx-auto">
        <div className="col-lg-6 left-explanation pr-4">
            <h1 className="display-2">
              AX<span>IT</span>
            </h1>
            <h2>MODERN AXURE TEMPLATE FOR BEAUTIFUL PROTOTYPES</h2>
            <div className="white-divider text-left my-4"></div>
            <p className="lead">
              Tempor ex ullamco sint dolor est. Anim quis sit reprehenderit
              minim. Eu laboris officia reprehenderit magna incididunt ut
              incididunt tempor exercitation in enim tempor.
            </p>
            <button className="download-btn"> <span className="btn-text">Download</span> <div className="bg-color"></div></button>
          </div>
        <div className="col-lg-6 right-card mt-5 ml-auto">
          <div class="card text-center mx-auto">
            <div class="card-header">
              Try Your <span>FREE</span> Trial Today
            </div>
            <div class="card-body">
              <div className="input-group">
                  <input type="text" placeholder='Name'/>
              </div>
              <div className="input-group">
                  <input type="text" placeholder='Email'/>
              </div>
              <div className="input-group">
                  <input type="text" placeholder='Password'/>
              </div>
            </div>
            <div class="card-footer">Get Started</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainTop;
