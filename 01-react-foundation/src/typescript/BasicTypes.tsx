export const BasicTypes = () => {
  const name: string = "Nicolas";
  const edad: number = 29;
  const isActive = true;
  const powers: string[] = ['React','Java','MySql']
  powers.push('Next');

  return (
    <>
      <h3>Tipos Basicos</h3>
      {name} {edad} {isActive ? "Activo" : "No Activo"}

      <br />

      {powers.join(" ")}

    

    </>
  );
};
