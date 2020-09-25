import React from "react";
import faker from "faker";

const CustomerComment = () => {
  return (
    <div className="customercomment">
      <div className="container text-center">
        <h2>WHAT ARE OUR CUSTOMERS SAYING?</h2>
        <div className="orange-line mx-auto"></div>
        <p>
          Culpa exercitation tempor aliqua velit sunt et velit in tempor non
          tempor veniam cillum.
        </p>
        <div class="card-deck">
          <div class="card com1" data-aos="fade-up" data-aos-delay="200">
            <div class="card-body">
              <div className="talkbox sb-3">
                Ex Lorem deserunt commodo nisi aliquip reprehenderit
                exercitation reprehenderit aliquip incididunt.
              </div>
              <div className="userinfo">
                <img src={faker.image.avatar()} alt="" className="avatar" />
                <div className="infos text-left">
                  <h4>{`${faker.name.firstName()} ${faker.name.lastName()}`}</h4>
                  <p>{faker.name.title()}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="card card2" data-aos="fade-up" data-aos-delay="300">
            <div class="card-com2">
              <div class="card-body">
                <div className="talkbox sb-3">
                  Ex Lorem deserunt commodo nisi aliquip reprehenderit
                  exercitation reprehenderit aliquip incididunt.
                </div>
                <div className="userinfo">
                  <img src={faker.image.avatar()} alt="" className="avatar" />
                  <div className="infos text-left">
                    <h4>{`${faker.name.firstName()} ${faker.name.lastName()}`}</h4>
                    <p>{faker.name.title()}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card card3" data-aos="fade-up" data-aos-delay="400">
            <div class="card-com3">
              <div class="card-body">
                <div className="talkbox sb-3">
                  Ex Lorem deserunt commodo nisi aliquip reprehenderit
                  exercitation reprehenderit aliquip incididunt.
                </div>
                <div className="userinfo">
                  <img src={faker.image.avatar()} alt="" className="avatar" />
                  <div className="infos text-left">
                    <h4>{`${faker.name.firstName()} ${faker.name.lastName()}`}</h4>
                    <p>{faker.name.title()}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerComment;
