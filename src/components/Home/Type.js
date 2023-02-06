import React from "react";
import Typewriter from "typewriter-effect";
import { Configuration, OpenAIApi } from "openai";

function Type() {

 return (
    
    <Typewriter
      options={{
        strings: [

          "I can create Cover letter",
          "I can write candidature based on roles",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
