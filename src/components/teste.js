const lista = [2, 5, 1, 3, 4, 10, 7.3, 7.8, 20];
const lista2 = [
  { nome: "Pedro", idade: 13, nota: 8.3 },
  { nome: "Paulo", idade: 23, nota: 2.3 },
  { nome: "Ana", idade: 20, nota: 5 },
  { nome: "Carlos", idade: 19, nota: 6.5 },
  { nome: "Miguel", idade: 16, nota: 7.2 },
  { nome: "Júlio", idade: 22, nota: 2.1 },
];

const orderParameters = { criteria: "nota", ascending: true };
// const criteria = "nota"
// const ascending = false
const compareFunction = (a, b) => {
  if (orderParameters.ascending) {
    return (
      parseFloat(a[orderParameters.criteria]) -
      parseFloat(b[orderParameters.criteria])
    );
  } else {
    return (
        parseFloat(b[orderParameters.criteria]) -
        parseFloat(a[orderParameters.criteria])
      );
  }
  // return parseFloat(a.nota) - parseFloat(b.nota)
};

lista2.sort(compareFunction);
lista2.forEach((item) =>
  console.log(`=> ${item.nome} | ${item.idade} | ${item.nota}`)
);
