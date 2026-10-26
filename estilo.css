/* Inclui bordas e preenchimentos no tamanho dos elementos. */
* {
  box-sizing: border-box;
}


/* Centraliza a galeria na página. */
body {
  margin: 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e8e8e8;
}


/* Organiza as imagens em três colunas. */
.galeria {
  display: grid;
  grid-template-columns: repeat(3, 200px);
  gap: 20px;
  padding: 20px;
}


/* Remove a aparência padrão dos botões. */
.galeria button {
  width: 200px;
  height: 200px;
  padding: 0;
  border: none;
  border-radius: 10px;


  /* A transparência da imagem revela este fundo branco. */
  background: white;


  box-shadow: 0 2px 5px #0005;
  overflow: hidden;
  cursor: zoom-in;
}


/* Aparência inicial das imagens. */
.galeria img {
  display: block;
  width: 100%;
  height: 100%;


  /* Preenche o quadrado sem distorcer a imagem. */
  object-fit: cover;


  /* Cria o efeito esbranquiçado sobre o fundo branco. */
  opacity: 0.4;


  /* Suaviza a retirada e o retorno do efeito. */
  transition: opacity 0.3s;
}


/* Retira o efeito ao passar o mouse. */
@media (hover: hover) {
  .galeria button:hover img {
    opacity: 1;
  }
}


/* Também revela a imagem ao selecioná-la pelo teclado. */
.galeria button:focus-visible img {
  opacity: 1;
}


.galeria button:focus-visible {
  outline: 3px solid #2563eb;
  outline-offset: 4px;
}


/* Janela de ampliação: ocupa toda a tela. */
.ampliacao {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  max-width: none;
  max-height: none;
  margin: 0;
  padding: 24px;
  border: none;
  background: transparent;
  cursor: zoom-out;
}


/* Centraliza o conteúdo somente quando a janela está aberta. */
.ampliacao[open] {
  display: flex;
  justify-content: center;
  align-items: center;
}


/* Escurece a página atrás da imagem ampliada. */
.ampliacao::backdrop {
  background: rgb(0 0 0 / 80%);
}


/* Apresenta a imagem inteira e sem esbranquiçamento. */
.imagem-ampliada {
  display: block;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: calc(100vh - 48px);
  max-height: calc(100dvh - 48px);
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 8px 30px #0008;
  cursor: zoom-out;
}


/* Botão para fechar a ampliação. */
.fechar {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 44px;
  height: 44px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: #fff;
  color: #222;
  font-size: 32px;
  line-height: 1;
  cursor: pointer;
}


.fechar:focus-visible {
  outline: 3px solid #60a5fa;
  outline-offset: 3px;
}


/* Bloqueia a rolagem enquanto a imagem está ampliada. */
body.imagem-aberta {
  overflow: hidden;
}


/* Em telas menores, utiliza duas colunas. */
@media (max-width: 700px) {
  .galeria {
    grid-template-columns: repeat(2, 130px);
    gap: 12px;
    padding: 12px;
  }


  .galeria button {
    width: 130px;
    height: 130px;
  }
}


/* Ajusta a galeria para telas muito estreitas. */
@media (max-width: 300px) {
  .galeria {
    grid-template-columns: 130px;
  }
}
