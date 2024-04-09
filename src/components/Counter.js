import React from "react";
import { AppContext } from "./store";

export const Counter = () => {
  const { guests, setGuests } = React.useContext(AppContext);

  return (
    <div className="mt-9 flex items-center justify-center gap-9 pb-4 pl-6 pr-6 pt-4">
      <button
        disabled={!guests}
        onClick={() => setGuests((prev) => prev - 1)}
        className="size-16 rounded text-4xl font-bold text-white disabled:text-gray/40"
      >
        -
      </button>
      <div className="text-gradient w-24 text-center font-hoves text-4xl font-extrabold">
        {guests}
      </div>
      <button
        disabled={guests === 20}
        onClick={() => setGuests((prev) => prev + 1)}
        className="size-16 rounded bg-red text-4xl font-semibold text-white disabled:bg-dark disabled:text-gray/40"
      >
        +
      </button>
    </div>
  );
};
