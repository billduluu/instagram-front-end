import "../style.css";
import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import MyImage from "../../assets/profile.jpeg";
// import axios from "axios";
import Backdrop from "@mui/material/Backdrop";
import WatchStory from "../story/watch-story";

export const StoryBar = () => {
  //   const [user, setUser] = useState([]);
  //   useEffect(() => {
  //     axios.get("https://randomuser.me/api?results=20").then(({ data }) => {
  //       setUser(data.results);
  //     });
  //   }, []);
  const [open, setOpen] = useState(false);
  // const handleClose = () => {
  //   setOpen(false);
  // };
  const storyToggle = () => {
    setOpen(!open);
  };
  console.log(open, "hiii");
  let data = [
    {
      username: "Duluu",
      imageURL: MyImage,
    },
    {
      username: "Naraa",
      imageURL:
        "https://scontent.fuln1-1.fna.fbcdn.net/v/t1.6435-9/202165986_1309722919429221_182638336817370525_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=4sobIe_Cc5EAX8hIo6b&_nc_oc=AQkET9kxxfsw2W80p4d4ChVlxoiSMSFnoSHqWfm2b4elhAaR_ZjeirvZJMtEiWlMmqE&tn=iR2T0zKVIQGyX1Vd&_nc_ht=scontent.fuln1-1.fna&oh=8f5aeaa63cce71d5cccaa6066c3d6f49&oe=617D5E20",
    },
    {
      username: "Dashkaa",
      imageURL:
        "https://scontent.fuln1-2.fna.fbcdn.net/v/t1.6435-9/237851838_2290959274367832_3598822086458823811_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=eK45TBfds1QAX__msuO&_nc_ht=scontent.fuln1-2.fna&oh=d2f765950047d7c59d53b7f7b5ac15a9&oe=617C102C",
    },
    {
      username: "Davaa",
      imageURL:
        "https://scontent.fuln1-1.fna.fbcdn.net/v/t1.6435-9/41546269_1721406164649403_71138741619523584_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=174925&_nc_ohc=sZbKjkeZnnwAX8YTW6g&_nc_ht=scontent.fuln1-1.fna&oh=b0578a7831193e6851616384f0aae75b&oe=617E8AE1",
    },
    {
      username: "Azzayaa",
      imageURL:
        "https://scontent.fuln1-1.fna.fbcdn.net/v/t1.6435-9/190020682_1139976316502194_6811336230624305914_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=WRiIcLy5TO0AX8bzgnd&tn=iR2T0zKVIQGyX1Vd&_nc_ht=scontent.fuln1-1.fna&oh=038d6b068d5b2460e78810d66cda1345&oe=617E2777",
    },
    {
      username: "Namuunaa",
      imageURL:
        "https://scontent.fuln1-2.fna.fbcdn.net/v/t39.30808-6/234281685_1003945830423384_2057407081659087402_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ogCbunIHE_8AX8OrcBY&_nc_ht=scontent.fuln1-2.fna&oh=d9bbb8e676c1c1aff0d2dce0b8c6df46&oe=615CCD18",
    },
    {
      username: "Shagai",
      imageURL:
        "https://scontent.fuln1-2.fna.fbcdn.net/v/t1.6435-1/c0.0.480.480a/p480x480/226291675_10158714416584093_2839208157398987809_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=7206a8&_nc_ohc=wiWiCBQATfsAX96E67i&tn=iR2T0zKVIQGyX1Vd&_nc_ht=scontent.fuln1-2.fna&oh=876975e6f08b6999d909facc559de6a6&oe=617BE8F7",
    },
    {
      username: "Yesui",
      imageURL:
        "https://scontent.fuln1-1.fna.fbcdn.net/v/t1.6435-1/c0.55.480.480a/p480x480/106751036_2673607802910564_3870568068420341822_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=7206a8&_nc_ohc=QEZe2PfYc8kAX_UPcbH&_nc_ht=scontent.fuln1-1.fna&oh=e7b98b669695695bab74a59fbfef89cb&oe=617F32C6",
    },
  ];
  return (
    <div>
      <div className="story-container">
        <button className="upload-story">
          <div>
            <Avatar
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/1200px-Plus_symbol.svg.png"
              }
            />
          </div>
        </button>

        {data &&
          data.map((item, index) => (
            <div className="story" onClick={storyToggle}>
              <Avatar className="storybar-status" src={item.imageURL} />
              <div className="story-text">{item.username}</div>
              <Backdrop
                sx={{
                  color: "#fff",
                  backgroundColor: "#221D1B",
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                  opacity: "0.5",
                }}
                open={open}
              >
                <WatchStory />
              </Backdrop>
            </div>
          ))}
      </div>
    </div>
  );
};
