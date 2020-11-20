import React, { createContext, useCallback, useState } from 'react';

interface ContextData {
   ToggleCart: any;
   disabledCart: boolean;
   teste: any;
}

const Context = createContext<ContextData>({} as ContextData);

export const Provider: React.FC = ({ children }) => {
   const [ disabledCrt, setDisabledCrt]  = useState(true);

   const ToggleCart = useCallback(() => {
      console.log('arrrr');
      setDisabledCrt(!disabledCrt)
   }, [disabledCrt])

   function teste(params:string) {
      alert(params)
   }

   return (
      <Context.Provider value={{ 
         disabledCart: disabledCrt,
         ToggleCart,
         teste
      }}>
         {children}
      </Context.Provider>
   )
}

export default Context;