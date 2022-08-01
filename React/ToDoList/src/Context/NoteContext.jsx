import React, { createContext, useState } from "react";

export const DataContext = createContext();

export function DataContextProvaider(props) {
      const [note, setNote] = useState("");

      return <DataContext.Provider value={{ note, setNote }}>{props.children}</DataContext.Provider>;
}
