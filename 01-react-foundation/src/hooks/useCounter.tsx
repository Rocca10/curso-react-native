import { useState } from "react";

interface Options{
  initialValue?: number;
}

export const useCounter = ({ initialValue = 0}: Options) => {

  const [count, setCount] = useState(initialValue);

  const increaseBy = (value: number) => {
    const newValue = count + value;
    if(newValue >= 0){ //No permite poner un numero menor que 0. Sirve para 
      setCount(count + value);
    }
  };

  return {
    //Propiedades
    count,

    //Metodos
    increaseBy,
  };
};
