
const botoesCores = document.querySelectorAll(".cor-moto");

botoesCores.forEach((botao) => {
    botao.addEventListener("click", () => {

        botoesCores.forEach((item) => {
            item.classList.remove("cor-selecionada");
        });

        botao.classList.add("cor-selecionada");

        const imagemMoto = document.querySelector(".foto-principal img");
        const nomeModelo = document.querySelector(".detalhes-moto h2")?.textContent.trim();

        if (!imagemMoto) return;

        // COR PRETA
        if (botao.classList.contains("preto")) {
            if (nomeModelo === "A4") {
                imagemMoto.src = "imagens/A4 Preta.png";
                imagemMoto.alt = "A4 Preta";
            } else if (nomeModelo === "XM 2027") {
                imagemMoto.src = "imagens/XM 2027 Preta.png";
                imagemMoto.alt = "XM 2027 Preta";
            } else if (nomeModelo === "R13") {
                imagemMoto.src = "imagens/R13 Preta.png";
                imagemMoto.alt = "R13 Preta";
            } else if (nomeModelo === "T3") {
                imagemMoto.src = "imagens/T3 Preta.png";
                imagemMoto.alt = "T3 Preta";
            } else if (nomeModelo === "T2") {
                imagemMoto.src = "imagens/T2 Preta.png";
                imagemMoto.alt = "T2 Preta";
            } else if (nomeModelo === "V70") {
                imagemMoto.src = "imagens/V70 Preta.png";
                imagemMoto.alt = "V70 Preta";
            } else if (nomeModelo === "J10") {
                imagemMoto.src = "imagens/J10 Preta.png";
                imagemMoto.alt = "J10 Preta";
            } else {
                imagemMoto.src = "imagens/moto preta.png";
                imagemMoto.alt = "Moto elétrica preta";
            }
        }

        // COR AZUL
        if (botao.classList.contains("azul")) {
            imagemMoto.src = "imagens/Modelo 1 azul + branco.png";
            imagemMoto.alt = "Moto elétrica azul e branca";
        }

        // COR CARBONO
        if (botao.classList.contains("carbono")) {
            if (nomeModelo === "M6") {
                imagemMoto.src = "imagens/M6.png";
                imagemMoto.alt = "M6 Carbono";
            } else if (nomeModelo === "AG11 Tank") {
                imagemMoto.src = "imagens/AG11 TANK.png";
                imagemMoto.alt = "AG11 Tank Carbono";
            } else if (nomeModelo === "R13") {
                imagemMoto.src = "imagens/R13 Carbono.png";
                imagemMoto.alt = "R13 Carbono";
            } else {
                imagemMoto.src = "imagens/Tank 2 Geração Carbono 1.png";
                imagemMoto.alt = "Tank 2ª Geração Carbono";
            }
        }

        // COR ENG DO R13
        if (nomeModelo === "R13" && botao.classList.contains("eng")) {
            imagemMoto.src = "imagens/R13 ENG.png";
            imagemMoto.alt = "R13 ENG";
        }

        // COR CINZA
        if (botao.classList.contains("cinza")) {
            if (nomeModelo === "M15") {
                imagemMoto.src = "imagens/M15 Cinza.png";
                imagemMoto.alt = "M15 Cinza";
            } else if (nomeModelo === "M16") {
                imagemMoto.src = "imagens/M16.png";
                imagemMoto.alt = "M16 Cinza";
            } else if (nomeModelo === "XM 2027") {
                imagemMoto.src = "imagens/XM 2027 Cinza.png";
                imagemMoto.alt = "XM 2027 Cinza";
            } else if (nomeModelo === "T2") {
                imagemMoto.src = "imagens/T2 Cinza.png";
                imagemMoto.alt = "T2 Cinza";
            } else if (nomeModelo === "J10") {
                imagemMoto.src = "imagens/J10 Cinza.png";
                imagemMoto.alt = "J10 Cinza";
            } else {
                imagemMoto.src = "imagens/Tank 2 Geração Cinza.png";
                imagemMoto.alt = "Tank 2ª Geração Cinza";
            }
        }

        // COR CASTANHO DA J10
        if (nomeModelo === "J10" && botao.classList.contains("castanho")) {
            imagemMoto.src = "imagens/J10 Castanho.png";
            imagemMoto.alt = "J10 Castanho";
        }

        // COR BRANCA
        if (botao.classList.contains("branco")) {
            if (nomeModelo === "M15") {
                imagemMoto.src = "imagens/M15 Branca.png";
                imagemMoto.alt = "M15 Branca";
            } else if (nomeModelo === "A4") {
                imagemMoto.src = "imagens/A4 Branca.png";
                imagemMoto.alt = "A4 Branca";
            } else if (nomeModelo === "V70") {
                imagemMoto.src = "imagens/V70 Branca.png";
                imagemMoto.alt = "V70 Branca";
            } else if (nomeModelo === "T3 V7") {
                imagemMoto.src = "imagens/T3 V Branca.png";
                imagemMoto.alt = "T3 V7 Branca";
            }
        }

        // COR ROSA DA T3 V7
        if (nomeModelo === "T3 V7" && botao.classList.contains("rosa")) {
            imagemMoto.src = "imagens/T3 V Rosa.png";
            imagemMoto.alt = "T3 V7 Rosa";
        }

        // COR PRATA DA A4
        if (nomeModelo === "A4" && botao.classList.contains("prata")) {
            imagemMoto.src = "imagens/A4 Prata.png";
            imagemMoto.alt = "A4 Prata";
        }

        // COR PRATA DA T3
        if (nomeModelo === "T3" && botao.classList.contains("prata")) {
            imagemMoto.src = "imagens/T3 Prata.png";
            imagemMoto.alt = "T3 Prata";
        }

        // CORES DA V70
        if (nomeModelo === "V70" && botao.classList.contains("prata")) {
            imagemMoto.src = "imagens/V70 Prata.png";
            imagemMoto.alt = "V70 Prata";
        }
    });
});


// GUARDA A POSIÇÃO DO CATÁLOGO ANTES DE ABRIR UM MODELO
const linksModelos = document.querySelectorAll(
    '.cartao-moto a.botao-detalhes'
);

linksModelos.forEach((link) => {
    link.addEventListener("click", () => {
        sessionStorage.setItem("posicaoCatalogo", window.scrollY);
    });
});


// RECUPERA A POSIÇÃO AO VOLTAR PARA O CATÁLOGO
window.addEventListener("pageshow", () => {
    if (document.querySelector(".lista-motos")) {
        const posicaoSalva = sessionStorage.getItem("posicaoCatalogo");

        if (posicaoSalva !== null) {
            window.scrollTo(0, Number(posicaoSalva));
            sessionStorage.removeItem("posicaoCatalogo");
        }
    }
});


// ZOOM AUTOMÁTICO PARA TODAS AS PÁGINAS DE MODELOS
const imagemPrincipal = document.querySelector(".foto-principal img");

if (imagemPrincipal) {

    // CRIA A JANELA DE ZOOM AUTOMATICAMENTE
    const modalImagem = document.createElement("div");
    modalImagem.className = "modal-imagem";
    modalImagem.id = "modalImagem";

    const botaoFechar = document.createElement("button");
    botaoFechar.className = "fechar-modal";
    botaoFechar.type = "button";
    botaoFechar.innerHTML = "&times;";
    botaoFechar.setAttribute("aria-label", "Fechar imagem ampliada");

    const imagemAmpliada = document.createElement("img");
    imagemAmpliada.id = "imagemAmpliada";
    imagemAmpliada.alt = "Imagem ampliada da moto";

    modalImagem.appendChild(botaoFechar);
    modalImagem.appendChild(imagemAmpliada);
    document.body.appendChild(modalImagem);

    let escala = 1;
    let deslocamentoX = 0;
    let deslocamentoY = 0;
    let ponteiros = new Map();
    let distanciaInicial = 0;
    let escalaInicial = 1;
    let ultimoX = 0;
    let ultimoY = 0;

    function atualizarImagem() {
        imagemAmpliada.style.transform =
            `translate(${deslocamentoX}px, ${deslocamentoY}px) scale(${escala})`;

        imagemAmpliada.style.cursor = escala > 1 ? "grab" : "zoom-in";
    }

    function limitarEscala(valor) {
        return Math.min(4, Math.max(1, valor));
    }

    function resetarZoom() {
        escala = 1;
        deslocamentoX = 0;
        deslocamentoY = 0;
        ponteiros.clear();
        atualizarImagem();
    }

    function abrirModal() {
        imagemAmpliada.src = imagemPrincipal.src;
        imagemAmpliada.alt = imagemPrincipal.alt;

        modalImagem.classList.add("ativo");
        resetarZoom();
    }

    function fecharModal() {
        modalImagem.classList.remove("ativo");
        resetarZoom();
    }

    imagemPrincipal.addEventListener("click", abrirModal);

    // ZOOM COM A RODINHA DO MOUSE
    modalImagem.addEventListener("wheel", (evento) => {
        if (!modalImagem.classList.contains("ativo")) return;

        evento.preventDefault();

        escala = limitarEscala(
            escala + (evento.deltaY < 0 ? 0.2 : -0.2)
        );

        if (escala === 1) {
            deslocamentoX = 0;
            deslocamentoY = 0;
        }

        atualizarImagem();
    }, { passive: false });

    // MOVIMENTO E ZOOM COM MOUSE OU TOQUE
    imagemAmpliada.addEventListener("pointerdown", (evento) => {
        evento.preventDefault();

        imagemAmpliada.setPointerCapture(evento.pointerId);

        ponteiros.set(evento.pointerId, {
            x: evento.clientX,
            y: evento.clientY
        });

        if (ponteiros.size === 1) {
            ultimoX = evento.clientX;
            ultimoY = evento.clientY;
        }

        if (ponteiros.size === 2) {
            const pontos = Array.from(ponteiros.values());

            distanciaInicial = Math.hypot(
                pontos[0].x - pontos[1].x,
                pontos[0].y - pontos[1].y
            );

            escalaInicial = escala;
        }
    });

    imagemAmpliada.addEventListener("pointermove", (evento) => {
        if (!ponteiros.has(evento.pointerId)) return;

        ponteiros.set(evento.pointerId, {
            x: evento.clientX,
            y: evento.clientY
        });

        // MOVIMENTO COM UM DEDO OU MOUSE
        if (ponteiros.size === 1 && escala > 1) {
            deslocamentoX += evento.clientX - ultimoX;
            deslocamentoY += evento.clientY - ultimoY;

            ultimoX = evento.clientX;
            ultimoY = evento.clientY;

            atualizarImagem();
        }

        // ZOOM COM DOIS DEDOS
        if (ponteiros.size === 2) {
            const pontos = Array.from(ponteiros.values());

            const distanciaAtual = Math.hypot(
                pontos[0].x - pontos[1].x,
                pontos[0].y - pontos[1].y
            );

            if (distanciaInicial > 0) {
                escala = limitarEscala(
                    escalaInicial * (distanciaAtual / distanciaInicial)
                );

                if (escala === 1) {
                    deslocamentoX = 0;
                    deslocamentoY = 0;
                }

                atualizarImagem();
            }
        }
    });

    function soltarPonteiro(evento) {
        ponteiros.delete(evento.pointerId);

        if (ponteiros.size === 1) {
            const ponto = Array.from(ponteiros.values())[0];
            ultimoX = ponto.x;
            ultimoY = ponto.y;
        }

        if (ponteiros.size === 0) {
            distanciaInicial = 0;
        }
    }

    imagemAmpliada.addEventListener("pointerup", soltarPonteiro);
    imagemAmpliada.addEventListener("pointercancel", soltarPonteiro);
    imagemAmpliada.addEventListener("lostpointercapture", soltarPonteiro);

    // FECHAR PELO BOTÃO
    botaoFechar.addEventListener("click", fecharModal);

    // FECHAR CLICANDO FORA DA IMAGEM
    modalImagem.addEventListener("click", (evento) => {
        if (evento.target === modalImagem) {
            fecharModal();
        }
    });

    // FECHAR COM ESC
    document.addEventListener("keydown", (evento) => {
        if (evento.key === "Escape") {
            fecharModal();
        }
    });
}
