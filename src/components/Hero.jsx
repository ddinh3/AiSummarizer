import { logo } from "../assets";

import React from "react";

export const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/ddinh3/AiSummarizer.git")
          }
          className="black_btn">
          GitHub
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OPENAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Streamline your reading experience with Summize, a freely available
        article summarization tool that converts lengthy articles into easily
        digestible and succinct summaries.
      </h2>
    </header>
  );
};
