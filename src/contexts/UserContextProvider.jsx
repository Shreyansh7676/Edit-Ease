// import React, { useState } from "react";
// import UserContext from "./UserContext";

// const UserContextProvider=({children})=>{
//     const [user,setUser]=useState();
//     return(
//         <UserContext.Provider value={{user,setUser}}>
//             {children}
//         </UserContext.Provider>
//     )
// }

// export default UserContextProvider;

import React, { createContext, useState } from 'react';

// Create a context for the image
export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <UserContext.Provider value={{ selectedImage, setSelectedImage }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider