 const botoes = document.querySelectorAll(".galeria button");
    const ampliacao = document.querySelector(".ampliacao");
    const imagemAmpliada = document.querySelector(".imagem-ampliada");
    const botaoFechar = document.querySelector(".fechar");


    // Configura o clique em cada imagem da galeria.
    botoes.forEach((botao) => {
      botao.addEventListener("click", () => {
        const imagem = botao.querySelector("img");


        // Utiliza a mesma imagem e descrição na ampliação.
        imagemAmpliada.src = imagem.currentSrc || imagem.src;
        imagemAmpliada.alt = imagem.alt;


        // Abre a janela e bloqueia a rolagem da página.
        ampliacao.showModal();
        document.body.classList.add("imagem-aberta");
      });
    });


    // Clicar novamente na imagem fecha a ampliação.
    imagemAmpliada.addEventListener("click", () => {
      ampliacao.close();
    });


    // O botão X também fecha a ampliação.
    botaoFechar.addEventListener("click", () => {
      ampliacao.close();
    });


    // Clicar na área ao redor da imagem fecha a ampliação.
    ampliacao.addEventListener("click", (evento) => {
      if (evento.target === ampliacao) {
        ampliacao.close();
      }
    });


    // Executa ao fechar, inclusive pela tecla Escape.
    ampliacao.addEventListener("close", () => {
      document.body.classList.remove("imagem-aberta");
    });
