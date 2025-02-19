export const BasicFunctions = () => {

    const suma = (a:number,b:number)=>{
        //return a + b;
        return `${a + b}`;
    };



  return (
    <>  
        <h3>Functiones</h3>
        <span>El resultado de suma: {suma(4,6) }</span>
    </>
  )
}
