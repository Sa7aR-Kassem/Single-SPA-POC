import { useEffect, useState } from "react";

import { counter$, countUpHandler } from "@linkdev/utility";

export default function Root(props) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const counter = counter$.subscribe((data) => setCounter(data.count));

    return () => {
      counter.unsubscribe();
    };
  }, []);

  const handleClick = () => {
    setCounter((prev) => setCounter(prev + 1));
  };

  useEffect(() => {
    countUpHandler(counter);
  }, [counter]);

  return (
    <section>
      {props.name} is mounted!
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <div>
            <h4>product 1</h4>
            <button onClick={handleClick}>Add To Cart</button>
          </div>
          <div>
            <h4>product 2</h4>
            <button onClick={handleClick}>Add To Cart</button>
          </div>
          <div>
            <h4>product 3</h4>
            <button onClick={handleClick}>Add To Cart</button>
          </div>
          <div>
            <h4>product 4</h4>
            <button onClick={handleClick}>Add To Cart</button>
          </div>
        </div>
      </div>
    </section>
  );
}
