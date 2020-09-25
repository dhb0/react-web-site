import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container text-center">
        <h2>STYLISH AXURE DESIGN</h2>
        <div className="orange-line mx-auto"></div>
        <p>
          Culpa exercitation tempor aliqua velit sunt et velit in tempor non
          tempor veniam cillum.
        </p>
        <div className="row">
          <div className="col-md-6 col-sm-12 left">
            <form>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="form-name"
                  aria-describedby="name"
                  placeholder="Name"
                />
              </div>
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  id="form-email"
                  aria-describedby="email"
                  placeholder="Email"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="form-subject"
                  aria-describedby="subject"
                  placeholder="Subject"
                />
              </div>
            </form>
          </div>
          <div className="col-md-6 col-sm-12 right">
            <div class="form-group">
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="6"
                placeholder="Message"
              ></textarea>
            </div>
          </div>
        </div>
        <button type="button text-center" class="btn btn-submit">Send Message</button>
      </div>
    </div>
  );
};

export default Contact;
