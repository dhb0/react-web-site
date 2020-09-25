import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Awesome = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      });
  return (
    <div className="awesome">
      <div className="container text-center">
        <h2>WHY THIS IS AWESOME</h2>
        <div className="orange-line mx-auto"></div>
        <p>
          Culpa exercitation tempor aliqua velit sunt et velit in tempor non
          tempor veniam cillum.
        </p>
        <div className="row boxarea">
          <div className="col-md-4 col-sm-12 box" data-aos="fade-up" data-aos-delay="200">
            <i class="fa fa-lightbulb-o fa-2x" aria-hidden="true"></i>
            <h3>Thoughtful Design</h3>
            <p>
              Irure quis fugiat duis id. Et cillum nulla fugiat enim do ea
              consequat ad consectetur. Sunt ea elit anim dolore tempor tempor
              non ut officia velit cillum enim irure.
            </p>
          </div>
          <div className="col-md-4 col-sm-12 box" data-aos="fade-up" data-aos-delay="300">
            <i class="fa fa-keyboard-o fa-2x" aria-hidden="true"></i>
            <h3>Well Crafted</h3>
            <p>
              Tempor mollit est tempor adipisicing ipsum et dolor adipisicing
              laborum velit excepteur fugiat irure. Commodo consequat mollit
              velit exercitation.
            </p>
          </div>
          <div className="col-md-4 col-sm-12 box" data-aos="fade-up" data-aos-delay="400">
            <i class="fa fa-bolt fa-2x" aria-hidden="true"></i>
            <h3>Easy to Customize</h3>
            <p>
              Laborum Lorem aliquip duis enim consectetur consectetur veniam
              reprehenderit magna ut duis occaecat. Elit quis ut ad esse est incididunt exercitation
              aliquip eu. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awesome;
