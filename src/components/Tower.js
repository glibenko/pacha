import React, { useEffect, useState, useRef } from "react";
import { AppContext } from "../store";
import {Glass} from "./Glass";

const initialTower = [
  [false, false, false, false, false],
  [false, false, false, false],
  [false, false, false, false],
];

const initialMid = [
  [true, true, true, true, true, true],
  [true, true, true, true, true],
  [true, true, true, true],
];

const initialBig = [
  [true, true, true, true, true, true],
  [true, true, true, true, true],
  [true, true, true, true],
  [true, false, false],
  [false, false],
];

const m = {
  1: [0, 2],
  2: [0, 1],
  3: [0, 3],
  4: [1, 1],
  5: [1, 2],
  6: [0, 4],
  7: [0, 0],
  8: [1, 0],
  9: [1, 3],
  10: [0, 5],
  11: [1, 4],
  12: [2, 0],
  13: [2, 1],
  14: [2, 2],
  15: [2, 3],
  16: [3, 0],
  17: [3, 1],
  18: [3, 2],
  19: [4, 0],
  20: [4, 1],
};

export const Tower = () => {
  const prevGuests = useRef(0);
  const { guests } = React.useContext(AppContext);
  const [tow, setTow] = useState(initialTower);

  useEffect(() => {
    if (guests === prevGuests.current) {
      return;
    }

    if (guests === 0) {
      prevGuests.current = 0;
      setTow(initialTower);
      return;
    }

    const arr = tow.map((el) => [...el]);

    if (guests > prevGuests.current) {
      if (guests === 16) {
        setTow(initialBig);
        prevGuests.current = guests;
        return;
      }
      const currentMap = m[String(guests)];
      arr[currentMap[0]][currentMap[1]] = true;
      if (guests === 10) {
        arr[1][4] = false;
      }
    } else {
      if (guests === 15) {
        setTow(initialMid);
        prevGuests.current = guests;
        return;
      }
      if (guests === 9) {
        arr[0].splice(5, 1);
        arr[1].splice(4, 1);
      } else {
        const currentMap = m[prevGuests.current];
        arr[currentMap[0]][currentMap[1]] = false;
      }
    }

    setTow(arr);

    prevGuests.current = guests;
  }, [guests, tow]);

  return (
    <div className="flex flex-col justify-end">
      <div className="flex shrink-0 flex-col-reverse">
        {tow.map((el, i) => (
          <div key={i} className="m-1 flex shrink-0 justify-center">
            {el.map((elm, index) =>
              i === 0 ? (
                <Glass
                  key={index}
                  small={guests < 16}
                  first={true}
                  hidden={!elm}
                />
              ) : (
                <Glass key={index} small={guests < 16} hidden={!elm} />
              ),
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
