import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const PricingOptions = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <div className="pricing">
      <div className="container text-center">
        <h2>PRICING OPTIONS</h2>
        <div className="orange-line mx-auto"></div>
        <p>
          Culpa exercitation tempor aliqua velit sunt et velit in tempor non
          tempor veniam cillum.
        </p>

        <div class="card-deck">
          <div class="card card1" data-aos="fade-up" data-aos-delay="200">
            <div class="card-body">
              <div className="card-header">BASIC</div>
              <div className="price">
                <h2>
                  $ <span className="display-3">0</span>
                </h2>
                <p>Free for Life</p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Cras justo odio</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Morbi leo risus</li>
                <li class="list-group-item">Porta ac consectetur ac</li>
                <li class="list-group-item">Vestibulum at eros</li>
              </ul>
            </div>
          </div>
          <div class="card card2" data-aos="fade-up" data-aos-delay="300">
            <div class="card-body">
              <div className="card-header">PROFESSIONAL</div>
              <div className="price">
                <h2>
                  $ <span className="display-3 counter">19</span>
                </h2>
                <p>Monthly Payment</p>
              </div>
              <div className="popular">
                    <h3>Our Most Popular</h3>
                </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Cras justo odio</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Morbi leo risus</li>
                <li class="list-group-item">Porta ac consectetur ac</li>
                <li class="list-group-item">Vestibulum at eros</li>
              </ul>
            </div>
          </div>
          <div class="card card3" data-aos="fade-up" data-aos-delay="400">
            <div class="card-body">
              <div className="card-header">ENTERPRISE</div>
              <div className="price">
                <h2>
                  $ <span className="display-3 counter">70</span>
                </h2>
                <p>Monthly Payment</p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Cras justo odio</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Morbi leo risus</li>
                <li class="list-group-item">Porta ac consectetur ac</li>
                <li class="list-group-item">Vestibulum at eros</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingOptions;
