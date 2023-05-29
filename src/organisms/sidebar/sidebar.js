import React from "react";
import { Sidebardata } from "./sidebardata";
import { ContainerBar, ContainerHeader, ContainerLogo } from "./sidebar.style";
import Button from "../../components/button/button";

const Sidebar = () => {
  return (
    <>
      <ContainerBar>
        <img src="https://schedulecreation.com/logo.png" alt="Logo" />

        {Sidebardata.map((val, key) => {
          return (
            <ContainerHeader>
              <ContainerLogo
                key={key}
                id={window.location.pathname === val.link ? "active" : ""}
                onClick={() => {
                  window.location.pathname = val.link;
                }}
              >
                <div id="icon">
                  <h2>{val.icon}</h2>
                </div>
                <div id="title">
                  <h2>{val.title}</h2>
                </div>
              </ContainerLogo>
            </ContainerHeader>
          );
        })}
        <Button>Log Out</Button>
      </ContainerBar>
    </>
  );
};

export default Sidebar;
