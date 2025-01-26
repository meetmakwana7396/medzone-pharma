import { Pencil } from "lucide-react";
import React from "react";
import "./feature-hover-card.css";

const FeatureHoverCard = () => {
  return (
    <a href="#" className="card education">
      <div className="overlay"></div>
      <div className="circle">
        <Pencil />
      </div>
      <p>Education</p>
    </a>
  );
};

export default FeatureHoverCard;
