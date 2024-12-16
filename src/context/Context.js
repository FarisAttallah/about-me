import { createContext, useState } from "react";

export const Project_data = createContext(null);

function Context({ children }) {
  const [projectData, setProjectData] = useState();

  return (
    <Project_data.Provider value={{ projectData, setProjectData }}>
      {children}
    </Project_data.Provider>
  );
}

export default Context;