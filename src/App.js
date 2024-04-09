import React, { useState, useMemo } from "react";
import { AppContext } from "./store";
import { Order } from "./views/Order";

function App() {
  const [guests, setGuests] = useState(1);

  const context = useMemo(() => ({ guests, setGuests }), [guests]);

  return (
    <AppContext.Provider value={context}>
      <Order />
    </AppContext.Provider>
  );
}

export default App;
