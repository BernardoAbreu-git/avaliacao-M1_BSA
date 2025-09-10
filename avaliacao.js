const catalogo = [
    { id: 1, titulo: "Matrix", ano: 1999, nota: 8.7, genero: "Ficção Científica" },
    { id: 2, titulo: "O Poderoso Chefão", ano: 1972, nota: 9.2, genero: "Drama" },
    { id: 3, titulo: "A Origem", ano: 2010, nota: 8.8, genero: "Ficção Científica" },
    { id: 4, titulo: "Interestelar", ano: 2014, nota: 8.6, genero: "Ficção Científica" },
    { id: 5, titulo: "Pulp Fiction", ano: 1994, nota: 8.9, genero: "Crime" },
  ];

////////////////////////////////////////////////////////////////////////

  function listarFilmeDeGenero(genero) {
    let arrayGeneroEspecifico = catalogo.filter(filme => filme.genero === genero)
    console.log(arrayGeneroEspecifico)
  }
  listarFilmeDeGenero("Ficção Científica")

///////////////////////////////////////////////////////////////////////

  function gerarListaDeTitulos(filmes){
    let listaDeTitulos = filmes.map(filmes => filmes.titulo)
    console.log(listaDeTitulos)
  }
  gerarListaDeTitulos(catalogo)

///////////////////////////////////////////////////////////////////////

  function gerarRelatorioDeFilmes(anoMinimo) {
    let anoLancamento = catalogo.filter(filme => filme.ano <= anoMinimo);
    let titulos = anoLancamento.map(filme => filme.titulo);
    console.log(titulos);
}
gerarRelatorioDeFilmes(2000)
  