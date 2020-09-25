import React from "react";
import screen1 from "../imgs/screen1.jpg";

const SubList = () => {
  return (
    <div className="sublist">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12 img-area">
            <img src={screen1} className="img-fluid" />
          </div>
          <div className="col-md-6 col-sm-12 text-area">
            <h3>Sub list section</h3>
            <div className="orange-line"></div>
            <p>
              Qui adipisicing sint ad culpa labore proident elit irure nostrud
              ipsum enim. Amet nulla veniam velit ad mollit exercitation
              deserunt duis commodo dolor. Nostrud irure culpa irure laborum
              proident dolore reprehenderit. Aliqua voluptate est nisi officia
              fugiat cupidatat tempor elit sit velit. Consequat Lorem tempor
              aliquip eiusmod officia exercitation do exercitation adipisicing.
              Deserunt eu velit quis Lorem Lorem adipisicing aliquip ullamco
              veniam.
            </p>
            <div className="list-section-item">
              <i class="fa fa-cloud-download fa-lg" aria-hidden="true"></i>
              <div className="explanations">
                <h4>Title</h4>
                <p>
                  Laborum laborum excepteur do non ea irure laborum quis
                  proident. Enim occaecat enim reprehenderit nulla commodo
                  exercitation. Sit Lorem elit nisi laboris aliquip cupidatat
                  adipisicing.
                </p>
              </div>
            </div>
            <div className="list-section-item">
              <i class="fa fa-cloud-upload fa-lg" aria-hidden="true"></i>
              <div className="explanations">
                <h4>Title</h4>
                <p>
                  Ullamco dolore sit adipisicing nisi anim est. In duis magna eu
                  ullamco consectetur. Eu deserunt cupidatat esse cillum ea
                  labore id excepteur nulla enim cupidatat consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubList;
