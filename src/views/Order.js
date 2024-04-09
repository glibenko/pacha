import React from "react";
import { Counter } from "../components/Counter";
import { Tower } from "../components/Tower";

export const Order = () => {
  return (
    <div
      style={{ maxWidth: 450 }}
      className="mx-auto flex min-h-full w-full flex-col bg-dark pb-16 pt-4"
    >
      <div className="flex flex-col">
        <div className="flex justify-end pl-6 pr-6">
          <div
            onClick={() => {
              console.log("close");
            }}
            className="size-10 self-center rounded px-4 py-2 font-bold text-white"
          >
            X
          </div>
        </div>
        <div className="mt-7 pl-5 pr-5 font-hoves text-22/[37px] font-extrabold uppercase text-white">
          How many guests on your table?
        </div>
        <Counter />
      </div>
      <Tower />
      <div className="z-50 ml-6 mr-6 flex h-16 shrink-0 grow-0 items-center justify-center rounded bg-red text-2xl font-extrabold text-white">
        NEXT
      </div>
    </div>
  );
};
