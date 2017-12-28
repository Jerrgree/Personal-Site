import React, { Component } from "react";
import github from "./img/GitHub-Mark/PNG/GitHub-Mark-120px-plus.png"
import linkedin from "./img/linkedin/linkedin_logo_package/LinkedIn [in]/Screen/2-Color/In-2C-121px-R.png"

class Links extends Component {
      render() {
            return (
                <div>
                    <h2>Links</h2>
                    <a href="https://github.com/Jerrgree/">
                        <img src = {github} alt="Github"/>
                    </a>
                    <a href="https://www.linkedin.com/in/jeremy-greenburg-852524109/">
                       <img src = {linkedin} alt="Linkedin"/>
                   </a>
                </div>

        );
    }
}

export default Links;
