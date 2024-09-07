function pesquisar() {
  const secao = document.getElementById("resultados-pesquisa");
  const input = document.getElementById("input-pesquisa").value.toLowerCase();

  let resultados = "";

  for (let musica of musicas) {
    const nomeMusica = musica.nome.toLowerCase();
    const generoMusica = musica.genero.toLowerCase();
    const cantorMusica = musica.cantor.toLowerCase();

    if (
      nomeMusica.includes(input) ||
      generoMusica.includes(input) ||
      cantorMusica.includes(input)
    ) {
      resultados += `
        <div class="item-resultado">
             <img src="${musica.capa}" alt="Capa da música" class="capa-musica">
              <p>${nomeMusica}</p>
             <p>Gênero: ${generoMusica}</p>
             <p>Autor: ${cantorMusica}</p>
             <div class="botoes">
                 <button class="back"><</button>
                 <button class="play">►</button>
                 <button class="next">></button>
             </div>
         </div> 
        `; //estilizar  dps
    }
  }
  if (input == "") {
    resultados = `
    <div class="msg-erro">
    <h3 >Digite um dos generos:</h3>
    <ul>
  <li>Pop</li>
  <li>Hip-Hop</li>
  <li>Rock</li>
</ul>
</div>`;
  }
  if (input == " ") {
    resultados = `<div class="msg-erro">
    <h3 >Digite um dos generos:</h3>
    <ul>
  <li>Pop</li>
  <li>Hip-Hop</li>
  <li>Rock</li>
</ul>
</div>
    `;
  }
  if (!resultados) {
    resultados = `<div class="msg-erro">
    <h3 >Digite um dos generos:</h3>
    <ul>
  <li>Pop</li>
  <li>Hip-Hop</li>
  <li>Rock</li>
</ul>
</div>
    `;
  }
  console.log(input);

  secao.innerHTML = resultados;
}
