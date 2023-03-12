import React from "react";
import CountUp from "react-countup";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import "./Clients.css"
const Client = () => {
  const [count, setCount] = useState(false);
  return (
    <section className="ClientsNum">
      <ScrollTrigger
        onEnter={() => setCount(true)}
        onExit={() => setCount(false)}
      >
        <div className="ClientsData">
            <div>
                <h1>Clients</h1>
            <h1>
                {count && <CountUp start={0} end={643} duration={2} delay={0} />}
            </h1>
            </div>
            <div>
                <h1>Reviews</h1>
            <h1>
                {count && <CountUp start={0} end={317} duration={2} delay={0} />}
            </h1>
            </div>
        </div>
      </ScrollTrigger>
    </section>
  );
};

export default Client;
