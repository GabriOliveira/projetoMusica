function pesquisar() {
    const secao = document.getElementById("resultados-pesquisa");
    const input = document.getElementById("input-pesquisa").value.toLowerCase();


    let resultados = "";
   
    for (let musica of musicas) {
     
        const nomeMusica = musica.nome.trim().toLowerCase();
        const generoMusica = musica.genero.trim().toLowerCase();
        const cantorMusica = musica.cantor.trim().toLowerCase();

        if (
          nomeMusica.includes(input) ||
          generoMusica.includes(input) ||
          cantorMusica.includes(input)
        ){
      resultados += `
        <div class="item-resultado">
             <img src="${musica.capa}" alt="Capa da música" class="capa-musica">
              <p>${musica.nome}</p>
             <p>Gênero: ${musica.genero}</p>
             <p>Autor: ${musica.cantor}</p>
             <div class="botoes">
                 <button class="back"><</button>
                 <button class="play">►</button>
                 <button class="next">></button>
             </div>
         </div> 
        `;//estilizar  dps
    }
  }
 
  if (!resultados) {
    resultados = "<h3>Campo de pesquisa vazio...</h3>";
   
  }
 console.log(input);
 
 
  secao.innerHTML = resultados;
}
