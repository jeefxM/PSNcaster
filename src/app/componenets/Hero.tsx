"use client";

import { useNeynarContext } from "@neynar/react";
import React from "react";

const Hero = () => {
  const { user } = useNeynarContext();
  console.log(user);
  return (
    <div className="hero min-h-screen bg-base-200 ">
      <div className="hero-content text-center">
        {user && <p>heyy</p>}
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Unleash Your Gaming Potential</h1>
          <p className="py-6">
            Join the thriving gaming community on Farcaster, where you can
            connect with fellow gamers, showcase your achievements, and discover
            new experiences.
          </p>
          <button className="btn btn-primary btn-wide">
            Embark on Your Gaming Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
