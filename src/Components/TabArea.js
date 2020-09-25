import React from "react";
import building from "../imgs/building.png";

const TabArea = () => {
  return (
    <div className="tabarea">
      <div className="container">
        <div class="row">
          <div class="col-md-2 col-sm-12">
            <div
              class="nav flex-column nav-pills"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <a
                class="nav-link active"
                id="v-pills-home-tab"
                data-toggle="pill"
                href="#v-pills-home"
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
              >
                TAB
              </a>
              <a
                class="nav-link"
                id="v-pills-profile-tab"
                data-toggle="pill"
                href="#v-pills-profile"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
              >
                TAB
              </a>
              <a
                class="nav-link"
                id="v-pills-messages-tab"
                data-toggle="pill"
                href="#v-pills-messages"
                role="tab"
                aria-controls="v-pills-messages"
                aria-selected="false"
              >
                TAB
              </a>
            </div>
          </div>
          <div class="col-md-10 col-sm-12">
            <div class="tab-content" id="v-pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
              >
                <div className="tabtext">
                    <h3>Tabs with transitioning effects.</h3>
                    <p>Dolor ullamco ad culpa ad aliquip sint qui. Culpa culpa sunt laboris adipisicing adipisicing enim. Eu ullamco qui et esse veniam.</p>
                    <p>Adipisicing do labore do dolore ex dolor. Reprehenderit ea culpa ad minim velit ex proident minim irure enim velit pariatur. Reprehenderit eiusmod consequat do nisi sunt consectetur incididunt cillum exercitation sunt. Non non culpa sit qui velit aute et consequat. Cillum elit est cupidatat occaecat ut culpa quis qui. Quis in reprehenderit laborum adipisicing laboris incididunt eiusmod consectetur cupidatat. Ullamco exercitation excepteur consectetur labore ullamco sint ipsum pariatur esse ad velit reprehenderit ullamco.</p>
                </div>
                <div className="tabimage">
                <img src={building} alt=""/></div>
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-profile"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
              >
                ...
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-messages"
                role="tabpanel"
                aria-labelledby="v-pills-messages-tab"
              >
                ...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabArea;
