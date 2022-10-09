// Anything exported from this file is importable by other in-browser modules.
import { BehaviorSubject } from "rxjs";

export const counter$ = new BehaviorSubject({
  count: 1,
});

export const countUpHandler = (val) => {
  counter$.next({
    count: val,
  });
};
