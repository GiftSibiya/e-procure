import React from "react";
import { Link } from "react-router-dom";
import Intro from "./Intro";

export default function NoPage() {
  return (
    <div>
      You're lost my G. Check that URL
      <Link to={"/"}>Go Back To Home</Link>
    </div>
  );
}
