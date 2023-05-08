/*Para continuar celebrando el campeonato mundial de Argentina haremos un ejercicio en su
honor. Sabiendo que la fecha en que Argentina ganó la tercera fue el 2022-12-18 haga una
función para “humanizar” dicha fecha. “Domingo, 18 de diciembre de 2022”*/

const humanizeDate = () => {
  const days = [
    { id: 0, day: "Domingo" },
    { id: 1, day: "Lunes" },
    { id: 2, day: "Martes" },
    { id: 3, day: "Miércoles" },
    { id: 4, day: "Jueves" },
    { id: 5, day: "Viernes" },
    { id: 6, day: "Sábado" },
  ];

  const months = [
    { id: 0, month: "Enero" },
    { id: 1, month: "Febrero" },
    { id: 2, month: "Marzo" },
    { id: 3, month: "Abril" },
    { id: 4, month: "Mayo" },
    { id: 5, month: "Junio" },
    { id: 6, month: "Julio" },
    { id: 7, month: "Agosto" },
    { id: 8, month: "Septiembre" },
    { id: 9, month: "Octubre" },
    { id: 10, month: "Noviembre" },
    { id: 11, month: "Diciembre" },
  ];
  let dateTheThird = new Date(2022, 11, 18);
  return (
    days[dateTheThird.getDay()].day +
    ", " +
    dateTheThird.getDate() +
    " de " +
    months[dateTheThird.getMonth()].month +
    " de " +
    dateTheThird.getFullYear()
  );
};
