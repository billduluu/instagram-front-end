import React from "react";
import { Button } from "@material-ui/core";
import { FiSettings } from "react-icons/fi";
import "./style.css";

export const ProfileBioCard = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "stretch",
          //   backgroundColor: "purple",
        }}
      >
        <h2>duluu01</h2>
        <Button>edit profile</Button>
        <FiSettings />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "stretch",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginRight: "10%",
          }}
        >
          <h3>8</h3>
          <p>posts</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginRight: "10%",
          }}
        >
          <h3>1k</h3>
          <p>followers</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <h3>29</h3>
          <p>following</p>
        </div>
      </div>
      <div>
        <p>𝓓𝓾𝓵𝓾𝓾</p>
        <p>📍 Ulaanbaatar, Mongolia 🇲🇳</p>
      </div>
    </>
  );
};
