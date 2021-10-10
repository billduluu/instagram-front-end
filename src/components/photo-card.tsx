import React from "react";
import "./style.css";
import { PhotoCardInterface } from "../interfaces/index";

export const PhotoCard = ({ userData }: PhotoCardInterface) => {
  let personalData = [
    {
      imageURL:
        "https://scontent.fuln1-1.fna.fbcdn.net/v/t1.6435-9/202165986_1309722919429221_182638336817370525_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=4sobIe_Cc5EAX8hIo6b&_nc_oc=AQkET9kxxfsw2W80p4d4ChVlxoiSMSFnoSHqWfm2b4elhAaR_ZjeirvZJMtEiWlMmqE&tn=iR2T0zKVIQGyX1Vd&_nc_ht=scontent.fuln1-1.fna&oh=8f5aeaa63cce71d5cccaa6066c3d6f49&oe=617D5E20",
    },
    {
      imageURL:
        "https://scontent.fuln1-2.fna.fbcdn.net/v/t1.6435-9/237851838_2290959274367832_3598822086458823811_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=eK45TBfds1QAX__msuO&_nc_ht=scontent.fuln1-2.fna&oh=d2f765950047d7c59d53b7f7b5ac15a9&oe=617C102C",
    },
    {
      imageURL:
        "https://scontent.fuln1-1.fna.fbcdn.net/v/t1.6435-9/41546269_1721406164649403_71138741619523584_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=174925&_nc_ohc=sZbKjkeZnnwAX8YTW6g&_nc_ht=scontent.fuln1-1.fna&oh=b0578a7831193e6851616384f0aae75b&oe=617E8AE1",
    },
    {
      imageURL:
        "https://scontent.fuln1-1.fna.fbcdn.net/v/t1.6435-9/190020682_1139976316502194_6811336230624305914_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=WRiIcLy5TO0AX8bzgnd&tn=iR2T0zKVIQGyX1Vd&_nc_ht=scontent.fuln1-1.fna&oh=038d6b068d5b2460e78810d66cda1345&oe=617E2777",
    },
    {
      imageURL:
        "https://scontent.fuln1-2.fna.fbcdn.net/v/t39.30808-6/234281685_1003945830423384_2057407081659087402_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ogCbunIHE_8AX8OrcBY&_nc_ht=scontent.fuln1-2.fna&oh=d9bbb8e676c1c1aff0d2dce0b8c6df46&oe=615CCD18",
    },
    {
      imageURL:
        "https://scontent.fuln1-2.fna.fbcdn.net/v/t1.6435-1/c0.0.480.480a/p480x480/226291675_10158714416584093_2839208157398987809_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=7206a8&_nc_ohc=wiWiCBQATfsAX96E67i&tn=iR2T0zKVIQGyX1Vd&_nc_ht=scontent.fuln1-2.fna&oh=876975e6f08b6999d909facc559de6a6&oe=617BE8F7",
    },
  ];
  return (
    <div className="photo-card">
      {personalData.map((person) => {
        return (
          <div className="photo-card-space">
            <img
              src={person.imageURL}
              className="card-of-photos"
              alt="user-uploaded-photos"
            />
          </div>
        );
      })}
    </div>
  );
};
