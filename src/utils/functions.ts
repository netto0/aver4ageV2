function resetScrollInsideTable() {
  let tableBody = document.getElementById("table");
  tableBody!.scrollTo(0, tableBody!.scrollHeight);
}

function average(
  ava: number | null,
  exam: number | null,
  pim: number | null,
  rtk?: number | null,
  log?: boolean
): number | null {
  if (ava && exam && pim) {
    let regularMD: number;
    // CÁLCULO PARA MATRÍCULA A PARTIR DE 2023 - Cursos Tecnólógicos
    if (log) {
      console.log(`7 x ${exam} = ${7 * exam}`);
      console.log(`2 x ${pim} = ${2 * pim}`);
      console.log(
        `${7 * exam} + ${2 * pim} + ${ava} = ${7 * exam + 2 * pim + ava}`
      );
      console.log(
        `${7 * exam + 2 * pim + ava} / 10 = ${(7 * exam + 2 * pim + ava) / 10}`
      );
      console.log("==========================");
    }
    regularMD = (7 * exam + 2 * pim + ava) / 10;
    if (rtk) {
      return (regularMD + rtk) / 2;
    } else {
      return regularMD;
    }
  } else {
    return null;
  }
}

export { resetScrollInsideTable, average };
