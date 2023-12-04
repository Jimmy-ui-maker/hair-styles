import Link from "next/link";
import React from "react";

export default function HeroPage() {
  return (
    <section
      id="hero"
      className=" w-100 vh-100 d-flex flex-column justify-content-center align-items-center"
    >
      <div className="container text-center">
        <div class="btns" data-aos="fade-up" data-aos-delay="300">
          <h1>Hair Styles</h1>
          <h2 className=" mt-4">Check your favourite hair styles</h2>
          <Link className=" btn " href={"/mainPage"}>
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
