import React from "react";

const SocialMedia = () => {
  return (
    <div className="social-network">
      <div className="container">
        <div className="col-md-5 col-sm-12 left">
          <h4>Social Media</h4>
          <p>
            Velit occaecat quis veniam Lorem ullamco aute officia magna. Nostrud
            aliqua cupidatat velit nulla dolor deserunt id nisi mollit tempor
            elit adipisicing.
          </p>
        </div>
        <div className="col-md-7 col-sm-12 right d-flex justify-content-between">
          <a><i class="fa fa-facebook-official fa-3x" aria-hidden="true"></i></a>
          <a><i class="fa fa-twitter fa-3x" aria-hidden="true"></i></a>
          <a><i class="fa fa-google-plus fa-3x" aria-hidden="true"></i></a>
          <a><i class="fa fa-pinterest fa-3x" aria-hidden="true"></i></a>
          <a><i class="fa fa-instagram fa-3x" aria-hidden="true"></i></a>
          <a><i class="fa fa-rss fa-3x" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
