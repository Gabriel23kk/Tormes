
function abrirPagina(tipo) {
    window.location.href = "./segunda pag/pag2.html?tipo=" + tipo;
}



const conteudos = {
    espelho: [
        {
            pagtitulo: "Espelho para Banheiro",
            titulo: "Espelho para Banheiro",
            paragrafo: `Se você decidiu instalar um novo espelho para o seu banheiro, pode estar se perguntando como instalá-lo.
            Você poderá escolher entre vários tipos de espelhos, incluindo sem molduras, venezianos, pivô e iluminados.
            Aqui estão algumas dicas para ajudá-lo a decidir qual espelho é adequado para o seu banheiro.`,
            titulo2: "Como instalar um Espelho para banheiro",
            paragrafo2: `O processo de instalação de um novo espelho para banheiro pode ser bem simples, dependendo do tamanho e
            estilo do seu banheiro, o processo de instalação pode ser relativamente simples ou complicado,dependendo do tipo e tamanho dos espelhos.
            Por isso procure ajuda de uma empresa com profissionais qualificados. A Vidraçaria Tormes está à sua Disposição!`,
            imageSRC: "./../assets/mirrordev.jpg"
        }
    ],
    box: [
        {
            pagtitulo: "Box de Banheiro",
            titulo: "Box de Banheiro",
            paragrafo: `Apesar de ser uma peça que não costuma aparecer nas redes sociais, o box de banheiro de vidro está ganhando cada vez mais espaço nas residências. Isso porque ele é um item que agrega sofisticação e modernidade ao ambiente, além de ser bastante funcional.`,
            titulo2: "Tamanho do Banheiro",
            paragrafo2: `Independentemente do tamanho, o Box de Banheiro é um item capaz de compor o espaço de forma elegante. Por isso, é uma ótima opção para quem está reformando ou construindo a casa nova.`,
            imageSRC: "./../assets/box.jpg"
        }
    ],
    sacada: [
        {
            pagtitulo: "Envidraçamento de Sacada",
            titulo: "Envidraçamento de Sacada",
            paragrafo: `Ao realizar o envidraçamento da sua Sacada, há muitas coisas a ter em mente.
            Algumas das coisas que você deve considerar é a espessura do vidro, vidro temperado pelo calor, trilho invisível..`,
            titulo2: "O que você deve saber",
            paragrafo2: `Além disso, você deve saber que painéis de vidro maiores serão mais difíceis de manusear.
            Este artigo ajudará você a fazer a escolha certa para sua Sacada.
            Continue lendo para saber mais sobre Envidraçamento de Sacada e ambiente.`,
            imageSRC: "./../assets/sacada.jpg"
        }
    ],
    esquadrias: [
        {
            pagtitulo: "Esquadrias de Alumínio",
            titulo: "Esquadrias de Alumínio",
            paragrafo: `As esquadrias de alumínio são uma excelente opção para quem busca qualidade e durabilidade em janelas e portas.
            Elas são leves, resistentes à corrosão e oferecem uma ótima vedação, garantindo conforto térmico e acústico.`,
            titulo2: "Vantagens das Esquadrias de Alumínio",
            paragrafo2: `Além disso, as esquadrias de alumínio são fáceis de manter e podem ser personalizadas em diversas cores e acabamentos,
            tornando-se uma escolha versátil para qualquer projeto arquitetônico.`,
            imageSRC: "./../assets/esquadria.jpg"
        }
    ]
}

const tipo = new URLSearchParams(window.location.search).get("tipo");

if (conteudos[tipo]) {
    document.getElementById("conteudo").innerHTML = conteudos[tipo][0].pagtitulo
    document.getElementById("txt-h2").innerHTML = conteudos[tipo][0].titulo
    document.getElementById("text-p1").innerHTML = conteudos[tipo][0].paragrafo
    document.getElementById("txt-h2-2").innerHTML = conteudos[tipo][0].titulo2
    document.getElementById("text-p2").innerHTML = conteudos[tipo][0].paragrafo2
    document.getElementById("mirror-img").src = conteudos[tipo][0].imageSRC
}