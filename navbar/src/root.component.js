import { useEffect, useState } from "react";

import { counter$ } from "@linkdev/utility";

export default function Root(props) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const counter = counter$.subscribe((data) => setCounter(data.count));

    return () => {
      counter.unsubscribe();
    };
  }, []);
  return (
    <section>
      {props.name} is mounted! <h3>Count {counter}</h3>
    </section>
  );
}
