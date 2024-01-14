//Array com os dados dos personagens

const personagens = [

//Diluc 0
{
     nome: "diluc",
     imagem: "./image/dilucBack.mp4",
     dica: "Este personagem de Genshin Impact comanda as chamas e é dono da Taverna Dawn Winery. Quem é?",
     desc: "",
     bonus:"Este herdeiro da Casa Ragnvindr é tanto o mestre das chamas quanto o proprietário da Taverna Dawn Winery.",
     icon: './icon/Element_Pyro.png',
     img: './image/dilucCheck.png',
     star: '⭐⭐⭐⭐⭐', 
     nomeCaracter: "Diluc",  
},

//Venti 1
{
     nome: "venti",
     imagem: "./image/ventiBack.mp4",
     dica: "Este personagem de Mondstadt é leve como o vento, toca uma melodia encantadora com sua lira e seu nome significa 'vento' em italiano. Quem é?",
     desc: "",
     bonus:"um aventureiro de Mondstadt que comanda o vento com maestria. Seu passado é envolto em mistério, mas sua melodia ressoa como uma suave brisa. Quem é esse virtuoso que leva consigo a harmonia do Anemo?",
     icon: './icon/Element_Anemo.png',
     img: './image/ventiCheck.png',
     star: '⭐⭐⭐⭐⭐', 
     nomeCaracter: "Venti",  
},

//Jean 2
{
    nome: "jean",
    imagem: "./image/jeanBack.mp4",
    dica: "Esta Cavalheira de Favonius é uma líder dedicada de Mondstadt, habilidosa no uso da espada e usuária do elemento Anemo. Ela é conhecida por sua compaixão e liderança exemplar. Quem é essa personagem que protege Mondstadt com graciosidade e poder?",
    desc: "",
    bonus: " Como a Grande Mestra dos Cavaleiros de Favonius, esta líder diligente de Mondstadt é conhecida por sua generosidade, habilidades anemo e dedicação em proteger a cidade.",
    icon: './icon/Element_Anemo.png',
    img: './image/jeanCheck.png',
    star: '⭐⭐⭐⭐⭐', 
    nomeCaracter: "Jean",  
},

//Klee 3
{
    nome: "klee",
    imagem: "./image/kleeBack.mp4",
    dica: "Esta pequena piromaniaca é uma explosiva usuária de Pyro, conhecida por sua paixão por explosões e bombas. Seu nome começa com a letra 'K' e ela é uma verdadeira amante da diversão. Quem é essa adorável e ardente arremessadora de bombas em Teyvat?",
    desc: "",
    bonus: "Esta pequena e explosiva cavaleira de Mondstadt é uma alquimista mirim com uma paixão por bombas.",
    icon: './icon/Element_Pyro.png',
    img: './image/kleeCheck.png',
    star: '⭐⭐⭐⭐⭐', 
    nomeCaracter: "Klee",  
},

//Mona 4
{
    nome: "mona",
    imagem: "./image/monaBack.mp4",
    dica: 'Ela tem pele clara, olhos verde-mar claros e cabelo roxo escuro na altura da cintura que fica levemente vermelho nas pontas',
    desc: "",
    bonus: 'Uma misteriosa jovem astróloga que se autoproclama a "Astróloga Mona Megistus" e que possui habilidades que correspondem ao título',
    icon: './icon/Element_Hydro.png',
    img: './image/monaCheck.png',
    star: '⭐⭐⭐⭐⭐', 
    nomeCaracter: "Mona",  
},

//Albedo 5
{
    nome: "albedo",
    imagem: "https://s2-techtudo.glbimg.com/xY3o6KBQ8UZsMFrabc1s-GuHSSA=/0x0:1919x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/B/b/Hsts0eSXAjTYrfOJBTTA/albedo-genshin-impact-techtudo.png",
    dica: "Este alquimista talentoso e estudioso de Mondstadt é conhecido por sua habilidade em manipular o poder do elemento Geo. Sua paixão pela alquimia e suas vestimentas brancas são características marcantes. Quem é este personagem que explora o poder dos elementos em Teyvat?",
    desc: "",
    bonus: " Como o Capitão da Ordem dos Alquimistas em Mondstadt, este mestre da alquimia busca desvendar os segredos do mundo. ",
    icon: './icon/Element_Geo.png',
    img: './image/albedoCheck.png',
    star: '⭐⭐⭐⭐⭐', 
    nomeCaracter: "Albedo",  
},

//Eula 6
{
    nome: "eula",
    imagem: "./image/eulaBack.mp4",
    dica: 'Os Cavaleiros de Favonius valorizam mais as habilidades e ações de alguém do que sua origem e linhagem. Ela é de fato uma cavaleira notável, e não há necessidade de usar sua identidade como descendente dos antigos nobres contra ela.',
    desc: "",
    bonus: 'Ela tem pele pálida e olhos que parecem exibir heterocromia setorial , passando do roxo escuro ao amarelo pálido. Ela tem cabelo azul claro despenteado e com corte irregular.',
    icon: './icon/Element_Cryo.png',
    img: './image/eulaCheck.png',
    star: '⭐⭐⭐⭐⭐',
    nomeCaracter: "Eula",
},

//Barbara 7
{
    nome: "barbara",
    imagem: "./image/barbaraBack.mp4",
    dica: "Esta encantadora barda de Mondstadt é conhecida por sua paixão pela música e medicina. Seu nome começa com a letra 'B' e ela é frequentemente associada a um elemento que tem propriedades refrescantes. Quem é essa personagem?",
    desc: "",
    bonus:"Esta doce cantora de Mondstadt é a Irmã Deaconess da Igreja de Favonius, conhecida por suas habilidades de cura e alegres apresentações musicais.",
    icon: './icon/Element_Hydro.png',
    img: './image/barbaraCheck.png',
    star: '⭐⭐⭐⭐', 
    nomeCaracter: "Barbara",  
},

//Amber 8
{
    nome: "amber",
    imagem: "https://images6.alphacoders.com/128/1283847.jpg",
    dica: "Esta intrépida arqueira é a defensora de Mondstadt, conhecida por sua habilidade com arco e flecha. Ela tem um espírito livre, sempre pronta para ajudar em qualquer situação. Seu nome começa com a letra 'A'. Quem é essa atiradora destemida?",
    desc: "",
    bonus: "Esta arqueira de Outrora-Knights em Mondstadt é conhecida por sua atitude otimista, habilidades pirotécnicas e paixão por aventuras.",
    icon: './icon/Element_Pyro.png',
    img: './image/amberCheck.png',
    star: '⭐⭐⭐⭐', 
    nomeCaracter: "Amber",  
},

//Bennett 9
{
    nome: "bennett",
    imagem: "./image/bennettBack.mp4",
    dica: 'Um dos poucos jovens aventureiros da Guilda dos Aventureiros de Mondstadt, ele é sempre atormentado por um azar inexplicável.',
    desc: "",
    bonus: 'Ele tem cabelos grisalhos claros, pele bronzeada clara e olhos verdes brilhantes. Parece que ele continua ficando marcado por suas várias desventuras e por uma sorte categoricamente terrível. Ele tem uma cicatriz proeminente no ombro esquerdo.',
    icon: './icon/Element_Pyro.png',
    img: './image/bennettCheck.png',
    star: '⭐⭐⭐⭐',
    nomeCaracter: "Bennett",
},

//Fischl 10
{
    nome: "fischl",
    imagem: "./image/fischlBack.mp4",
    dica: 'Uma garota misteriosa que se autodenomina "Prinzessin der Verurteilung" e viaja com um corvo noturno chamado Oz. Atualmente atua como investigador na Guilda dos Aventureiros.',
    desc: "",
    bonus: 'Ela tem pele clara e cabelos loiros que se estendem até o meio das costas. Seu olho visível é verde claro. Sobre o olho esquerdo, ela usa um tapa-olho que é quase totalmente coberto pela franja.',
    icon: './icon/Element_Electro.png',
    img: './image/fischlCheck.png',
    star: '⭐⭐⭐⭐',
    nomeCaracter: "Fischl",
},

//Kaeya 11
{
    nome: "kaeya",
    imagem: "./image/kaeyaBack.mp4",
    dica: 'Nos Cavaleiros de Favonius, ele é o assessor de maior confiança do Grão-Mestre Interino Jean. Você sempre pode contar com ele para resolver quaisquer problemas intratáveis. Todos em Mondstadt o amam, mas ninguém sabe quais segredos esse cavaleiro espirituoso e charmoso tem...',
    desc: "",
    bonus: 'Ele tem pele bronzeada e cabelo azul marinho com mechas de um azul mais claro, acompanhado por uma mecha de cabelo na altura da cintura que começa na base do couro cabeludo, na parte de trás da cabeça, à esquerda.',
    icon: './icon/Element_Cryo.png',
    img: './image/kaeyaCheck.png',
    star: '⭐⭐⭐⭐',
    nomeCaracter: "Kaeya",
},

//Noelle 12
{
    nome: "noelle",
    imagem: "./image/noelleBack.mp4",
    dica: 'Uma empregada que serve fielmente os Cavaleiros de Favonius. Ela sonha em se juntar a eles algum dia.',
    desc: "",
    bonus: 'Ela tem cabelos grisalhos curtos, na altura do pescoço, com franja reta e mechas tortas emoldurando seu rosto. Uma mecha de cabelo está trançada sobre a franja e presa no lado direito do rosto com um clipe de escudo dourado. Seus olhos são verde oliva.',
    icon: './icon/Element_Geo.png',
    img: './image/noelleCheck.png',
    star: '⭐⭐⭐⭐',
    nomeCaracter: "Noelle",
},

//Lisa 13
{
    nome: "lisa",
    imagem: "./image/lisaBack.mp4",
    dica: 'Ela é uma bruxa intelectual que nunca consegue cochilar o suficiente. Como bibliotecária dos Cavaleiros de Favonius, ela é inteligente porque sempre sabe exatamente o que fazer com tudo o que a incomoda.',
    desc: "",
    bonus: 'Ela adora chá e acha que o chá da tarde é a parte mais importante do seu dia. Ela às vezes toma chá com sopa de legumes, como costumava fazer com Jean no restaurante Good Hunter . Ela também sofre de cucurbitofobia, medo de abóboras.',
    icon: './icon/Element_Electro.png',
    img: './image/lisaCheck.png',
    star: '⭐⭐⭐⭐',
    nomeCaracter: "Lisa",
},

//Razor 14
{
    nome: "razor",
    imagem: "./image/razorBack.mp4",
    dica: 'Até hoje, o menino lobo pode ser encontrado rondando a floresta, onde ele e sua matilha caçam para sobreviver usando nada mais do que seus instintos animais.',
    desc: "",
    bonus: 'Alguns dizem que ele é um órfão criado por lobos. Outros dizem que ele é um espírito lobo em forma humana. Ele se sente mais à vontade na selva, lutando com garras e trovões.',
    icon: './icon/Element_Electro.png',
    img: './image/razorCheck.png',
    star: '⭐⭐⭐⭐',
    nomeCaracter: "Razor",
},

//Sucrose 15 
{
    nome: "sucrose",
    imagem: "./image/sucroseBack.mp4",
    dica: 'Uma alquimista cheia de curiosidade sobre todas as coisas. Ela pesquisa bioalquimia.',
    desc: "",
    bonus: 'Ela tem pele clara, olhos âmbar e cabelo verde claro que vai até o queixo, exceto por uma mecha na parte de trás da cabeça que desce até os quadris.',
    icon: './icon/Element_Anemo.png',
    img: './image/sucroseCheck.png',
    star: '⭐⭐⭐⭐',
    nomeCaracter: "Sucrose",
},

//Diona 16
{
    nome: "diona",
    imagem: "./image/dionaBack.mp4",
    dica: "Uma jovem que herdou vestígios de sangue não humano. Ela é a incrível bartender popular da taverna Cat's Tail.",
    desc: "",
    bonus: 'Ela tem pele clara, cabelo curto rosa, olhos verdes esverdeados e sobrancelhas redondas. As orelhas e cauda de gato de Diona parecem ser de um gato malhado.',
    icon: './icon/Element_Cryo.png',
    img: './image/dionaCheck.png',
    star: '⭐⭐⭐⭐',
    nomeCaracter: "Diona",
},

//Rosaria 17 
{
    nome: "rosaria",
    imagem: "./image/rosariaBack.mp4",
    dica: 'uma irmã da Igreja de Favonius de Mondstadt. Uma irmã da igreja, embora você não saberia disso se não fosse por seu traje. Uma mulher incomum, com palavras cortantes e penetrantes e modos frios.',
    desc: "",
    bonus: 'Ela tem uma pele cinza-clara fantasmagórica, olhos magenta-claros com pupilas brancas estreitas e cabelo cor de vinho agitado cortado curto na parte de trás com uma franja na altura dos ombros e alguns fios de sua franja coloridos em um vermelho mais escuro.',
    icon: './icon/Element_Cryo.png',
    img: './image/rosariaCheck.png',
    star: '⭐⭐⭐⭐',
    nomeCaracter: "Rosaria",
},

//Mika 18
{
    nome: "mika",
    imagem: "./image/mikaBack.mp4",
    dica: 'Um jovem cavaleiro que é um membro importante da equipe de escoteiros da linha de frente. Calmo e despretensioso, trata cada tarefa com seriedade e pode preparar uma boa porção de rações de campo.',
    desc: "",
    bonus: 'Ele tem pele clara, olhos azuis e cabelos dourados cacheados que se destacam em tufos irregulares e são castanho-dourados nas pontas.',
    icon: './icon/Element_Cryo.png',
    img: './image/mikaCheck.png',
    star: '⭐⭐⭐⭐',
    nomeCaracter: "Mika",
},

//Liyue

//Hutao 19
{
     nome: "hutao",
     imagem: "./image/hutaoBack.mp4",
     dica: "Quem em Liyue adora assustar os outros, tem um amuleto especial e comanda um Urso de Papel Flamejante? Descubra o nome dessa piromaníaca divertida!",
     desc: "",
     bonus: "Em Liyue, ela é a diretora alegre do Funeral Parlor, fascinada por histórias assustadoras e com um espírito animado.",
     icon: './icon/Element_Pyro.png',
     img: './image/hutaoCheck.png',
     star: '⭐⭐⭐⭐⭐', 
     nomeCaracter: "Hu tao",  
},

//Zhongli 20
{
     nome: "zhongli",
     imagem: "./image/zhongliBack.mp4",
     dica: "Em Liyue, quem é conhecido como o guardião das rochas, mestre da petrificação, e que carrega consigo a essência de uma serpente?",
     desc: "",
     bonus: "Em Liyue, este arconte da terra é conhecido por sua serenidade, mestria nas rochas e compromisso com contratos.",
     icon: './icon/Element_Geo.png',
     img: './image/zhongliCheck.png',
     star: '⭐⭐⭐⭐⭐', 
     nomeCaracter: "Zhongli",  
},

//Xiao 21
{
     nome: "xiao",
     imagem: "./image/xiaoBack.mp4",
     dica: "Este vigilante solitário de Liyue, com uma paixão pelos céus e um passado misterioso, empunha a Lâmina Alada para proteger a justiça. Quem é este guardião das sombras em Genshin Impact?",
     desc: "",
     bonus: "Vagando pelos céus de Liyue, este guardião solitário possui uma ligação única com os yakshas e uma busca incessante por aniquilar os demônios.",
     icon: './icon/Element_Anemo.png',
     img: './image/xiaoCheck.png',
     star: '⭐⭐⭐⭐⭐', 
     nomeCaracter: "Xiao",  
},

//Qiqi 22
{
    nome: "qiqi",
    imagem: "./image/qiqiBack.mp4",
    dica: "Esta jovem e adorável zumbi de Liyue é uma usuária de Cryo, especializada em cura. Seu nome começa com a letra 'Q' e ela é frequentemente acompanhada por um pequeno amigo. Quem é essa personagem que traz um toque gelado ao grupo?",
    desc: "",
    bonus: "Esta adorável e zumbi fofa de Liyue é conhecida como a Assistente da Florista.",
    icon: './icon/Element_Cryo.png',
    img: './image/qiqiCheck.png',
    star: '⭐⭐⭐⭐⭐', 
    nomeCaracter: "Qiqi",  
},

//Ganyu 23
{
    nome: "ganyu",
    imagem: "./image/ganyuBack.mp4",
    dica: "Esta arqueira de Genshin Impact é originária da região de Liyue e tem uma conexão especial com os adeptos. Seu ataque carregado desencadeia uma tempestade de flechas que pode congelar até mesmo os inimigos mais quentes. Quem é essa talentosa usuária de Cryo?",
    desc: "",
    bonus: 'Esta arqueira de cabelos azuis, cujo nome começa com "G", é uma especialista em gelo que ataca com graciosidade, lembrando a beleza e a serenidade de uma paisagem congelada. Quem é ela?',
    icon: './icon/Element_Cryo.png',
    img: './image/ganyuCheck.png',
    star: '⭐⭐⭐⭐⭐', 
    nomeCaracter: "Ganyu",  
},

//Yelan 24
{
    nome: "yelan",
    imagem: "./image/yelanBack.mp4",
    dica: 'Uma pessoa misteriosa que afirma trabalhar para o Ministério dos Assuntos Civis de Liyue. No entanto, ela é na verdade a chefe da Casa de Chá Yanshang.',
    desc: "",
    bonus: 'É uma arqueira excepcional, no jogo é uma personagem indispensável para combinação de time para hu tão',
    icon: './icon/Element_Hydro.png',
    img: './image/yelanCheck.png',
    star: '⭐⭐⭐⭐⭐', 
    nomeCaracter: "Yelan",  
},

//Shenhe 25
{
    nome: "shenhe",
    imagem: "./image/shenheBack.mp4",
    dica: 'Filha de um casal de exorcistas não identificados, foi acolhida e criada por Cloud Retainer como discípula após um incidente traumático durante sua infância.',
    desc: "",
    bonus: 'Ela tem uma pele clara, cabelos longos que vão do branco prateado na raiz ao preto escuro nas pontas, e olhos claros e iridescentes com pupilas brancas.',
    icon: './icon/Element_Cryo.png',
    img: './image/shenheCheck.png',
    star: '⭐⭐⭐⭐⭐', 
    nomeCaracter: "Shenhe",  
},

//Baizhu 26
{
    nome: "baizhu",
    imagem: "./image/baizhuBack.mp4",
    dica: 'Proprietário da Farmácia Bubu e guardião de Qiqi , o Doutor é um mestre nas artes medicinais e o mais recente destinatário de um contrato geracional com uma cobra branca chamada Changsheng.',
    desc: "",
    bonus: 'Ele busca alcançar a imortalidade para garantir que será o último a cumprir seu contrato, salvando potenciais herdeiros e até a própria Changsheng do custo que vem com seu poder.',
    icon: './icon/Element_Dendro.png',
    img: './image/baizhuCheck.png',
    star: '⭐⭐⭐⭐⭐',
    nomeCaracter: "Baizhu",
},

//Keqing 27
{
    nome: "keqing",
    imagem: "./image/keqingBack.mp4",
    dica: 'Como Yuheng do Liyue Qixing , ela é alguém que busca suas próprias respostas em vez de deixar o caos tomar conta de Liyue . Ela escolhe seu próprio caminho com seu próprio poder e habilidade, em vez de deixar que os deuses determinem seu destino.',
    desc: "",
    bonus: 'Ela tem pele clara, olhos ametistas com pupilas ovais apoiadas por um formato que lembra seu estilete e cabelo roxo na altura da cintura que se transforma em roxo prateado nas pontas.',
    icon: './icon/Element_Electro.png',
    img: './image/keqingCheck.png',
    star: '⭐⭐⭐⭐⭐',
    nomeCaracter: "Keqing",
},

//Yaoyao 28
{
    nome: "yaoyao",
    imagem: "./image/yaoyaoBack.mp4",
    dica: 'Ela está acostumada a cuidar de todos ao seu redor. Ela treina com seu mestre em porto de Liyue e viaja regularmente entre as montanhas e a cidade.',
    desc: "",
    bonus: 'Ela tem pele clara, olhos vermelho-escuros claros que são dourados na parte inferior e cabelo castanho dourado.',
    icon: './icon/Element_Dendro.png',
    img: './image/yaoyaoCheck.png',
    star: '⭐⭐⭐⭐',
    nomeCaracter: "Yaoyao",
},

//Yunjin 29
{
    nome: "yunjin",
    imagem: "./image/yunjinBack.mp4",
    dica: 'A atual diretora da Trupe de Ópera Yun-Han, uma renomada cantora de ópera de Liyue com habilidade tanto em dramaturgia quanto em canto',
    desc: "",
    bonus: 'Ela tem uma pele clara, olhos vermelhos ricos com maquiagem vermelha proeminente pintada nos cantos e cabelo preto na altura do quadril com mechas roxas estilizadas em um corte Hime.',
    icon: './icon/Element_Geo.png',
    img: './image/yunjinCheck.png',
    star: '⭐⭐⭐⭐',
    nomeCaracter: "Yunjin",
},

//Yanfei 30
{
    nome: "yanfei",
    imagem: "./image/yanfeiBack.mp4",
    dica: 'Uma conhecida consultora jurídica ativa no porto de Liyue. Uma jovem brilhante em cujas veias corre o sangue de uma fera iluminada.',
    desc: "",
    bonus: 'Ela tem uma pele pálida, olhos verdes brilhantes com pupilas ovóides e cabelos cor de salmão que vão até os ombros e se transformam em um pêssego pálido nas pontas.',
    icon: './icon/Element_Pyro.png',
    img: './image/yanfeiCheck.png',
    star: '⭐⭐⭐⭐',
    nomeCaracter: "Yanfei",
},

//Xinyan 31
{
    nome: "xinyan",
    imagem: "./image/xinyanBack.mp4",
    dica: "A única música de rock 'n' roll de Liyue. Ela se rebela contra preconceitos ossificados usando sua música e canto apaixonado.",
    desc: "",
    bonus: 'Ela tem pele escura, olhos âmbar e cabelo castanho escuro na altura dos ombros com mechas vermelhas escuras e parte inferior laranja.',
    icon: './icon/Element_Pyro.png',
    img: './image/xinyanCheck.png',
    star: '⭐⭐⭐⭐',
    nomeCaracter: "Xinyan",
},

//Xiangling 32
{
    nome: "xiangling",
    imagem: "./image/xianglingBack.mp4",
    dica: 'Uma renomada chef de Liyue. Ela é extremamente apaixonada por culinária e se destaca em preparar seus pratos quentes e picantes exclusivos.',
    desc: "",
    bonus: 'Fora da culinária, ela é fácil de assustar e costuma receber pegadinhas de Hu Tao. Apesar de não gostar de suas pegadinhas, ela não guarda rancor dela porque ocasionalmente ela traz presentes em troca de lhe dar boas risadas.',
    icon: './icon/Element_Pyro.png',
    img: './image/xianglingCheck.png',
    star: '⭐⭐⭐⭐',
    nomeCaracter: "Xiangling",
},

//Beidou 33
{
    nome: "beidou",
    imagem: "./image/beidouBack.mp4",
    dica: 'Capitão de sua tripulação, The Crux. Ela é uma mulher bastante livre e franca.',
    desc: "",
    bonus: 'Ela tem longos cabelos castanhos escuros na altura da cintura e pele clara. Seu olho direito tem uma tonalidade rubi profunda que se funde em ouro. Seu olho esquerdo está coberto por um tapa-olho vermelho.',
    icon: './icon/Element_Electro.png',
    img: './image/beidouCheck.png',
    star: '⭐⭐⭐⭐',
    nomeCaracter: "Beidou",
},

//Xingqiu 34
{
    nome: "xingqiu",
    imagem: "./image/xingqiuBack.mp4",
    dica: 'Um jovem carregando uma espada longa que é frequentemente visto em livrarias. Ele tem um coração cavalheiresco e anseia por justiça e imparcialidade para todos.',
    desc: "",
    bonus: 'Ele tem olhos âmbar dourados, tom de pele claro e cabelo azul marinho escuro com franja assimétrica.',
    icon: './icon/Element_Hydro.png',
    img: './image/xingqiuCheck.png',
    star: '⭐⭐⭐⭐',
    nomeCaracter: "Xingqiu",
},

//Chongyun 35
{
    nome: "chongyun",
    imagem: "./image/chongyunBack.mp4",
    dica: 'Um jovem exorcista de uma família de exorcistas. Ele faz tudo o que pode para suprimir sua abundância de energia yang.',
    desc: "",
    bonus: 'Ele tem cabelo azul claro chegando às orelhas, pele clara e olhos de gato azul-gelo.',
    icon: './icon/Element_Cryo.png',
    img: './image/chongyunCheck.png',
    star: '⭐⭐⭐⭐',
    nomeCaracter: "Chongyun",
},

//Ningguang 36
{
    nome: "ningguang",
    imagem: "./image/ningguangBack.mp4",
    dica: 'É uma empresária profissional que acumulou riqueza através de muito trabalho e perseverança.',
    desc: "",
    bonus: 'Ela tem pele clara, olhos vermelhos e cabelos lisos, na altura dos joelhos, bege-esbranquiçados, que desbotam em uma cor acinzentada nas pontas.',
    icon: './icon/Element_Geo.png',
    img: './image/ningguangCheck.png',
    star: '⭐⭐⭐⭐',
    nomeCaracter: "Ningguang",
},

//Inazuma

//Kazuha 37 
{
     nome: "kazuha",
     imagem: "./image/kazuhaBack.mp4",
     dica: "Vagando pelos ventos de Inazuma, este viajante anemo é um amante da poesia e da natureza. Seus versos dançam no ar enquanto ele manipula a energia do vento. Quem é esse poeta errante em Genshin Impact?",
     desc: "",
     bonus: "Este viajante anemo de Mondstadt é conhecido por sua paixão pela poesia e pela brisa suave que o envolve.",
     icon: './icon/Element_Anemo.png',
     img: './image/kazuhaCheck.png',
     star: '⭐⭐⭐⭐⭐', 
     nomeCaracter: "Kaedehara Kazuha",  
},

//Raiden 38
{
     nome: "raiden",
     imagem: "./image/raidenBack.mp4",
     dica: "Em Inazuma, a comandante supremo governa com autoridade, equilibrando seu papel divino e humano. Ela é a portadora da visão Eletro e anseia por alcançar a eternidade. Quem é essa governante de Inazuma em Genshin Impact?",
     desc: "",
     bonus: "Seu nome começa com Ra...",
     icon: './icon/Element_Electro.png',
     img: './image/raidenCheck.png',
     star: '⭐⭐⭐⭐⭐', 
     nomeCaracter: "Shogun Raiden",  
},

//Yae Miko 39
{
     nome: "yaemiko",
     imagem: "./image/yaemikoBack.mp4",
     dica: "Esta personagem carismática em Genshin Impact é uma usuária de Electro, proveniente da região de Inazuma. Ela detém um catalizador e é associada a uma divindade local. Quem é essa carismática líder de visão eletro?",
     desc: "",
     bonus: 'Esta usuária de Electro em Genshin Impact, com o nome começando por "Y", é uma sacerdotisa que emana charme e mistério. Quem é essa personagem eletricamente encantadora?',
     icon: './icon/Element_Electro.png',
     img: './image/yaemikoCheck.png',
     star: '⭐⭐⭐⭐⭐', 
     nomeCaracter: "Yae Miko",  
},

//Arataki Itto 40
{
    nome: "arataki",
    imagem: "./image/aratakiBack.mp4",
    dica: 'Rápido como o vento, majestoso como o trovão, ele é um homem com o sangue de Povo Oni fluindo em suas veias. Pelos seus chifres dos Oni chamativos e pela sua voz sempre alta, ele se destacou.',
    desc: "",
    bonus: 'Seu segundo nome é "Itto" e seu primeiro nome começa com "A"',
    icon: './icon/Element_Geo.png',
    img: './image/aratakiCheck.png',
    star: '⭐⭐⭐⭐⭐', 
    nomeCaracter: "Arataki Itto",  
},

//Yoimiya 41
{
    nome: "yoimiya",
    imagem: "./image/yoimiyaBack.mp4",
    dica: 'Especialista em fogos de artifício mais habilidosa de Inazuma e conhecida como “Rainha dos Festivais de Verão”',
    desc: "",
    bonus: 'Herdou o manto de "Naganohara", é capaz de proporcionar para as pessoas uma experiência incomparável com seus fogos de artifício espetaculares e sempre cheios de novidades.',
    icon: './icon/Element_Pyro.png',
    img: './image/yoimiyaCheck.png',
    star: '⭐⭐⭐⭐⭐', 
    nomeCaracter: "Yoimiya",  
},

//Ayaka 42
{
    nome: "ayaka",
    imagem: "./image/ayakaBack.mp4",
    dica: 'Filha da família Kamisato da Comissão de Yashiro. Solene e elegante, também sábia e forte.',
    desc: "",
    bonus: 'É uma mulher de estatura ligeiramente abaixo da média. Ela mantém seu longo cabelo branco-azulado preso em um rabo de cavalo alto por um laço.',
    icon: './icon/Element_Cryo.png',
    img: './image/ayakaCheck.png',
    star: '⭐⭐⭐⭐⭐', 
    nomeCaracter: "Kamisato Ayaka",  
},

//Kokomi 43
{
    nome: "kokomi",
    imagem: "./image/kokomiBack.mp4",
    dica: 'É a Sacerdotisa Divina da Ilha Watatsumi e também atua como sua líder suprema. Ela é versada na arte da guerra, é boa em estratégias e tem insights aguçados sobre assuntos militares.',
    desc: "",
    bonus: 'Ela tem longos cabelos rosa salmão claro e olhos índigo claros, sem pupila e um grande destaque branco no topo da íris.',
    icon: './icon/Element_Hydro.png',
    img: './image/kokomiCheck.png',
    star: '⭐⭐⭐⭐⭐', 
    nomeCaracter: "Sangonomiya Kokomi",  
},

//Ayato 44
{
    nome: "ayato",
    imagem: "./image/ayatoBack.mp4",
    dica: 'O jovem promissor e chefe atual da Comissão Yashiro e do Clã Kamisato, é culto e educado, e sempre tem uma forma de fazer as coisas.',
    desc: "",
    bonus: 'Ele é o atual chefe do Clã Kamisato , o irmão mais velho de Kamisato Ayaka , e o Comissário Yashiro .',
    icon: './icon/Element_Hydro.png',
    img: './image/ayatoCheck.png',
    star: '⭐⭐⭐⭐⭐', 
    nomeCaracter: "Kamisato Ayato",  
},

//Kirara 45
{
    nome: "kirara",
    imagem: "./image/kiraraBack.mp4",
    dica: 'Uma mensageira do Komaniya Express, empresa de entregas em Inazuma. Uma Nekomata que ama seu trabalho e a sociedade humana.',
    desc: "",
    bonus: 'Tem orelhas de gato e um longo cabelo loiro',
    icon: './icon/Element_Dendro.png',
    img: './image/kiraraCheck.png',
    star: '⭐⭐⭐⭐', 
    nomeCaracter: "Kirara",  
},

//Sara 46
{
    nome: "sara",
    imagem: "./image/saraBack.mp4",
    dica: 'Uma general da Comissão Tenryou. Ousada, decisiva e habilidosa em batalha',
    desc: "",
    bonus: 'Ela tem cabelo índigo cortado em um corte irregular, pele clara e olhos dourados.',
    icon: './icon/Element_Electro.png',
    img: './image/saraCheck.png',
    star: '⭐⭐⭐⭐',
    nomeCaracter: "Kujou Sara",
},

//Sayu 47
{
    nome: "sayu",
    imagem: "./image/sayuBack.mp4",
    dica: 'Uma pequeno ninja ligado ao Shuumatsuban, que sempre parece privada de sono.',
    desc: "",
    bonus: 'Ela tem cabelo bege curto e olhos avermelhados.',
    icon: './icon/Element_Anemo.png',
    img: './image/sayuCheck.png',
    star: '⭐⭐⭐⭐',
    nomeCaracter: "Sayu",
},

//Thoma 48
{
    nome: "thoma",
    imagem: "./image/thomaBack.mp4",
    dica: 'Ele deposita grande lealdade ao Clã Kamisato. Apesar de sua aparência descontraída, ele não mostra piedade daqueles que ameaçam os irmãos Kamisato e a Comissão Yashiro . Ele não usa suas conexões para ganhos pessoais.',
    desc: "",
    bonus: 'Ele tem olhos verdes, pele clara e cabelo loiro bagunçado que é curto, exceto por uma mecha na parte de trás da cabeça que desce até os ombros.',
    icon: './icon/Element_Pyro.png',
    img: './image/thomaCheck.png',
    star: '⭐⭐⭐⭐',
    nomeCaracter: "Thoma",
},

//Gorou 49
{
    nome: "gorou",
    imagem: "./image/gorouBack.mp4",
    dica: 'O grande general das forças da Ilha Watatsumi. Ele tem a confiança profunda de seus subordinados.',
    desc: "",
    bonus: 'Ele tem pele clara, cabelo castanho-alaranjado claro com uma mecha branca e olhos azuis-esverdeados. Ele tem orelhas pontudas e eretas, brancas por dentro e uma cauda espessa com a parte inferior branca.',
    icon: './icon/Element_Geo.png',
    img: './image/gorouCheck.png',
    star: '⭐⭐⭐⭐',
    nomeCaracter: "Gorou",
},

//Kuki 50
{
    nome: "kuki",
    imagem: "./image/kukiBack.mp4",
    dica: 'Ao contrário do resto de sua família que trabalha como sacerdotisas, Shinobu prefere seguir seu próprio caminho, tendo tentado vários ofícios, estudando em Liyue e até ingressando na Gangue Arataki',
    desc: "",
    bonus: 'Ela tem cabelo verde claro, pele clara e olhos estreitos violeta-avermelhados. Ela também tem marcas roxo-avermelhadas na pele nas laterais da cintura.',
    icon: './icon/Element_Electro.png',
    img: './image/kukiCheck.png',
    star: '⭐⭐⭐⭐',
    nomeCaracter: "Kuki Shinobu",
},

//Heizou 51
{
    nome: "heizou",
    imagem: "./image/heizouBack.mp4",
    dica: 'Um jovem detetive prodígio da Comissão Tenryou. Seus sentidos são aguçados e seus pensamentos são claros.',
    desc: "",
    bonus: ' Ele tem cabelo cor de vinho com mechas escuras, olhos verde-oliva claros e uma verruga abaixo de cada olho.',
    icon: './icon/Element_Anemo.png',
    img: './image/heizouCheck.png',
    star: '⭐⭐⭐⭐',
    nomeCaracter: "Shikanoin Heizou",
},

//Sumeru

//Scaramouche 52
{
    nome: "scaramouche",
    imagem: "./image/scaraBack.mp4",
    dica: "Este membro da Fatui em Inazuma é conhecido por seu comportamento extravagante e atitude provocadora. Com sua máscara eletrovisionária, ele mantém suas verdadeiras intenções ocultas. Quem é esse agente ardiloso em Genshin Impact?",
    desc: "",
    bonus:"Seu nome de fatui começa com Sca...",
    icon: './icon/Element_Anemo.png',
    img: './image/wandererCheck.png',
    star: '⭐⭐⭐⭐⭐', 
    nomeCaracter: "Andarilho",  
},

//Nahida 53
{
     nome: "nahida",
     imagem: "./image/nahidaBack.mp4",
     dica: 'Esta misteriosa arconte de Sumeru em Genshin Impact, conhecida como a "Lorde Menor", domina o elemento Dendro e empunha um catalisador. Sua aura de mistério e ligação com a natureza a destacam como uma presença singular. Quem é essa enigmática representante de Sumeru?',
     desc: "",
     bonus: 'Ela é a Deusa da Sabedoria, seu nome comça com "N" quem é essa personagem?',
     icon: './icon/Element_Dendro.png',
     img: './image/nahidaCheck.png',
     star: '⭐⭐⭐⭐⭐', 
     nomeCaracter: "Nahida",  
},

//Cyno 54
{
     nome: "cyno",
     imagem: "./image/cynoBack.mp4",
     dica: 'É um experiente estudioso da Academia de Sumeru que parece ser uma pessoa um tanto indiferente e misteriosa, preferindo manter as coisas claras e concisas.',
     desc: "",
     bonus: 'Portador de uma lança ele a utiliza com maestria, seu nome termina com "no".',
     icon: './icon/Element_Electro.png',
     img: './image/cynoCheck.png',
     star: '⭐⭐⭐⭐⭐', 
     nomeCaracter: "Cyno",  
},

//Nilou 55
{
     nome: "nilou",
     imagem: "./image/nilouBack.mp4",
     dica: 'É uma personagem cinco estrelas que usa uma espada como arma sob o elemento Hydro. Dançarina do Teatro Zubayr, seu cabelo chama atenção pela cor avermelhada',
     desc: "",
     bonus: 'Dançarina do Teatro Zubayr, é elegante e graciosa, no entanto, fora dos holofotes do palco, ela é como qualquer garota de sua idade; calorosa, sorridente e amigável.',
     icon: './icon/Element_Hydro.png',
     img: './image/nilouCheck.png',
     star: '⭐⭐⭐⭐⭐', 
     nomeCaracter: "Nilou",  
},

// Alhaitham 56
{
    nome: "alhaitham",
    imagem: "./image/alhaithamBack.mp4",
    dica: 'O atual escriba da Sumeru Akademiya, um homem dotado de inteligência e talento extraordinários. Ele vive livre – pelo menos, livre dos olhos curiosos das pessoas comuns.',
    desc: "",
    bonus: ' Ele tem pele clara, cabelos grisalhos que ficam mais claros nas pontas e com algumas mechas que têm a parte inferior turquesa clara, e olhos turquesa claros com pupilas amarelas com anéis laranja. Ele usa dois grandes fones de ouvido dourados e verdes.',
    icon: './icon/Element_Dendro.png',
    img: './image/alhaithamCheck.png',
    star: '⭐⭐⭐⭐⭐', 
    nomeCaracter: "Alhaitham",  
},

//Tighnari 57
{
    nome: "tighnari",
    imagem: "./image/tighnariBack.mp4",
    dica: 'Um jovem pesquisador versado em botânica que atualmente atua como Vigilante Florestal na Floresta Avidya. Ele é um atirador direto, com um coração caloroso - e uma mão habilidosa para guiar até mesmo os alunos mais estúpidos.',
    desc: "",
    bonus: 'Ele tem pele clara, cabelo verde escuro na altura do queixo com raízes pretas e mechas verdes claras na frente, e olhos com pupilas claras que vão do marrom ao verde. Ele também possui orelhas pretas grandes e pontudas e uma cauda fofa em dois tons de verde escuro.',
    icon: './icon/Element_Dendro.png',
    img: './image/tighnariCheck.png',
    star: '⭐⭐⭐⭐⭐',
    nomeCaracter: "Tighnari",
},

//Deyha 58
{
    nome: "dehya",
    imagem: "./image/dehyaBack.mp4",
    dica: 'Membro dos Eremitas, uma organização mercenária que vaga pelas areias de Sumeru. Valente e poderosa, ela goza de grande fama entre seus companheiros eremitas.',
    desc: "",
    bonus: 'Ela tem pele levemente bronzeada, olhos azul-celeste com pupilas amarelas de "olho de gato" e cabelo castanho escuro com detalhes loiros escuros.',
    icon: './icon/Element_Pyro.png',
    img: './image/dehyaCheck.png',
    star: '⭐⭐⭐⭐⭐',
    nomeCaracter: "Dehya",
},
 
//Layla 59
{
     nome: "layla",
     imagem: "./image/laylaBack.mp4",
     dica: 'Ela é estudante do Rtawahist Darshan, com especialização em Astrologia Teórica. Como resultado, cronicamente privada de sono e com problemas de saúde, ela acredita que "A Bênção das Estrelas" é a razão pela qual ela acorda do sonambulismo e encontra seus papéis totalmente preenchidos.',
     desc: "",
     bonus: 'Ela tem pele clara, olhos dourados com pupilas brancas, cabelo azul escuro que desbota para um tom mais claro nas pontas e orelhas pontudas.',
     icon: './icon/Element_Cryo.png',
     img: './image/laylaCheck.png',
     star: '⭐⭐⭐⭐⭐', 
     nomeCaracter: "Layla",  
 
},

//Collei 60
{
    nome: "collei",
    imagem: "./image/colleiBack.mp4",
    dica: 'Uma guarda florestal estagiário ativo na Floresta Avidya. Por trás de suas palavras e ações entusiasmadas esconde-se uma personalidade ligeiramente introvertida.',
    desc: "",
    bonus: 'Ela tem cabelos verdes claros curtos e ondulados que chegam aos ombros e olhos roxos, quase magentas.',
    icon: './icon/Element_Dendro.png',
    img: './image/colleiCheck.png',
    star: '⭐⭐⭐⭐',
    nomeCaracter: "Collei",
},

//Faruzan 61
{
    nome: "faruzan",
    imagem: "./image/faruzanBack.mp4",
    dica: 'Uma pesquisador de “cem anos atrás”. Ela gosta de se identificar como a mais velha de todos e tem um conhecimento significativo de escritas antigas e máquinas de todos os tipos.',
    desc: "",
    bonus: 'Ela tem pele clara e seu cabelo tem um gradiente turquesa, do turquesa claro na raiz até um turquesa mais escuro nas pontas. Ela tem uma franja bagunçada que emoldura os lados do rosto, e seu cabelo é cortado curto, exceto por duas mechas que imitam caudas duplas. ',
    icon: './icon/Element_Anemo.png',
    img: './image/faruzanCheck.png',
    star: '⭐⭐⭐⭐',
    nomeCaracter: "Faruzan",
},

//Candace 62 
{
    nome: "candace",
    imagem: "./image/candaceBack.mp4",
    dica: 'Uma descendente do Rei Deshret com olho esquerdo âmbar. A defensora da Vila Aaru.',
    desc: "",
    bonus: 'Ela tem pele bronzeada e cabelo azul escuro. Seus olhos exibem uma forma de heterocromia iridum : seu olho direito é azul escuro e seu olho esquerdo é amarelo dourado.',
    icon: './icon/Element_Hydro.png',
    img: './image/candaceCheck.png',
    star: '⭐⭐⭐⭐',
    nomeCaracter: "Candace",
},

//Dori 63
{
    nome: "dori",
    imagem: "./image/doriBack.mp4",
    dica: 'Não importa quão raros sejam os materiais experimentais, você pode comprá-los dela. Não sei de onde ela consegue seus produtos... Além disso, preste atenção ao preço ao comprar dela. Meu coração dói toda vez que pago a conta.',
    desc: "",
    bonus: 'Ela tem pele clara, olhos castanhos dourados e cabelo rosa curto. Ela também usa um par de óculos pequenos com lentes avermelhadas e armação dourada em formato de diamante.',
    icon: './icon/Element_Electro.png',
    img: './image/doriCheck.png',
    star: '⭐⭐⭐⭐',
    nomeCaracter: "Dori",
},

//Kaveh 64
{
    nome: "kaveh",
    imagem: "./image/kavehBack.mp4",
    dica: 'Um renomado arquiteto de Sumeru que talvez se preocupe demais com muitas coisas. Ele é um esteta preocupado com a realidade.',
    desc: "",
    bonus: 'Ele tem cabelos loiros distintos, de comprimento médio, com pontas loiras sujas e olhos penetrantes com íris vermelhas.',
    icon: './icon/Element_Dendro.png',
    img: './image/kavehCheck.png',
    star: '⭐⭐⭐⭐',
    nomeCaracter: "Kaveh",
},

//Fontaine

// Lyney 65
{
     nome: "lyney",
     imagem: "./image/lyneyBack.mp4",
     dica: 'Um gênio de um mágico famoso em Fontaine. Ele emociona seu público com uma combinação de prestidigitação e o dom da palavra. Eloqüente, engenhoso e com uma mente tão difícil de compreender quanto a de um gato.',
     desc: "",
     bonus: 'Habilidoso e eloqüente, é irmão gêmeo de Lynette. Após a morte de seus pais e tendo sido salvo de um nobre abusivo por seu “ Pai ”, empreendeu missões para a Casa da Lareira e disse que eventualmente se tornaria o sucessor do “Pai”.',
     icon: './icon/Element_Pyro.png',
     img: './image/lyneyCheck.png',
     star: '⭐⭐⭐⭐⭐', 
     nomeCaracter: "Lyney", 
},

// Wriothesley 66
{
     nome: "wriothesley",
     imagem: "./image/wriothesleyBack.mp4",
     dica: 'Tendo matado seus pais adotivos abusivos para salvar seus irmãos adotivos, foi condenado e exilado na Fortaleza de Meropide na adolescência. Ele acabou se tornando seu administrador e impôs uma série de reformas sob seu governo, servindo de modelo para os prisioneiros.',
     desc: "",
     bonus: 'Administrador da Fortaleza de Meropide, recebeu o título honorário mais elevado de Fontaine, de "Duque". Discreto e confiável.',
     icon: './icon/Element_Cryo.png',
     img: './image/wriothesleyCheck.png',
     star: '⭐⭐⭐⭐⭐', 
     nomeCaracter: "Wriothesley", 
},

// Neuvillette 67
{
     nome: "neuvillette",
     imagem: "./image/neuvilletteBack.mp4",
     dica: 'Você não descreveria exatamente o Iudex de Fontaine como “acessível”. É difícil dizer se é apenas da natureza dele ou porque ele tem segredos a esconder.',
     desc: "",
     bonus: 'Embora cumpra as regras do tribunal com a maior reverência, ele é bastante indiferente ao lidar com as emoções humanas e muitas vezes se distancia dos olhos do público.',
     icon: './icon/Element_Hydro.png',
     img: './image/neuvilletteCheck.png',
     star: '⭐⭐⭐⭐⭐', 
     nomeCaracter: "Neuvillette", 
},

// Furina 68
{
     nome: "furina",
     imagem: "./image/furinaBack.mp4",
     dica: 'Amaldiçoada com a imortalidade, ela supervisionou Fontaine, por 500 anos, a fim de realizar os planos do verdadeiro Arconte de enganar os Princípios Celestiais para salvar Fontaine de uma grande profecia',
     desc: "",
     bonus: 'A “Regina de Todas as Águas, Famílias, Povos e Leis” é profundamente amada por seu povo. Ela acompanha cada julgamento realizado na Ópera Epiclese com uma paixão inextinguível e está sempre consciente de como o “público” vê as coisas.',
     icon: './icon/Element_Hydro.png',
     img: './image/furinaCheck.png',
     star: '⭐⭐⭐⭐⭐', 
     nomeCaracter: "Furina", 
},
  
// Charlotte 69
{
     nome: "charlotte",
     imagem: "./image/charlotteBack.mp4",
     dica: 'Repórter infatigável do The Steambird, constantemente em busca da "verdade".',
     desc: "",
     bonus: 'Está sempre em busca de novidades exclusivas. Sempre tão implacável e infatigável, ela não vai parar até descobrir a verdade, mesmo que esteja mais perto do perigo.',
     icon: './icon/Element_Cryo.png',
     img: './image/charlotteCheck.png',
     star: '⭐⭐⭐⭐', 
     nomeCaracter: "Charlotte", 
},

// Freminet 70
{
     nome: "freminet",
     imagem: "./image/freminetBack.mp4",
     dica: "Apesar de sua habilidade e experiência como mergulhador profissional, ele prefere ficar fora dos holofotes, contentando-se em simplesmente cumprir ordens e encontrar paz ao lado das Flores Tidalga e Romaritime debaixo d'água.",
     desc: "",
     bonus: 'Jovem taciturno e mergulhador experiente, seu coração permanece tão inocente quanto os contos de fadas que nunca param de absorvê-lo.',
     icon: './icon/Element_Cryo.png',
     img: './image/freminetCheck.png',
     star: '⭐⭐⭐⭐', 
     nomeCaracter: "Freminet", 
},

// Lynette 71
{
     nome: "lynette",
     imagem: "./image/lynetteBack.mp4",
     dica: 'Alma e reservada, ela funciona como assistente de mágico de seu irmão Lyney. Após a morte de seus pais e tendo sido salva de um nobre abusivo por seu “ Pai ”, ela também serviu como “olhos” e “ouvidos” para a Casa da Lareira.',
     desc: "",
     bonus: 'Uma assistente de mágico escondida nas sombras que se refere a si mesma como uma "Assistente Mágica Multifuncional". Com cara de pôquer, reticente em falar e tão imprevisível em seus movimentos quanto um gato.',
     icon: './icon/Element_Anemo.png',
     img: './image/lynetteCheck.png',
     star: '⭐⭐⭐⭐', 
     nomeCaracter: "Lynette", 
},

// Tartaglia 72
 {
     nome: "tartaglia",
     imagem: "./image/tartagliaBack.mp4",
     dica: 'Nº 11 de The Harbingers, também conhecido como "Childe". Seu nome é altamente temido no campo de batalha.',
     desc: "",
     bonus: 'Ele tem cabelo curto ruivo e olhos azuis opacos. Ele usa uma máscara Fatui vermelha puxada para o lado esquerdo da cabeça e um brinco de contas com um cristal vermelho na orelha esquerda.',
     icon: './icon/Element_Hydro.png',
    img: './image/tartagliaCheck.png',
    star: '⭐⭐⭐⭐⭐', 
    nomeCaracter: "Tartaglia", 
 },

// Navia 73
{
    nome: "navia",
    imagem: "./image/naviaBack.mp4",
    dica: 'Ela é a presidente da Spina di Rosula , manto anteriormente ocupado por seu falecido pai Callas.',
    desc: "",
    bonus: 'Apesar de ter perdido muitos entes queridos ao longo dos anos, principalmente seus pais Callas e Clementine , junto com seus subordinados de confiança Melus e Silver , ela ainda segue em frente por um futuro melhor, não querendo que seus sacrifícios sejam em vão.',
    icon: './icon/Element_Geo.png',
    img: './image/naviaCheck.png',
    star: '⭐⭐⭐⭐⭐', 
    nomeCaracter: "Navia", 
},

// Chevreuse 74
{
    nome: "chevreuse",
    imagem: "./image/chevreuseBack.mp4",
    dica: 'Nas horas vagas, ela gosta de ler, principalmente livros em que a justiça prevalece sobre o mal. Ela também tem uma obsessão doentia por junk food.',
    desc: "",
    bonus: 'Ela cresceu em Flueve Cendre. Ela é a atual Capitã da Patrulha Especial de Segurança e Vigilância e cliente frequente da Oficina Beaumont , muitas vezes comprando materiais caros para manter seu mosquete.',
    icon: './icon/Element_Pyro.png',
    img: './image/chevreuseCheck.png',
    star: '⭐⭐⭐⭐', 
    nomeCaracter: "Chevreuse", 
},
 ];

 const skins = [
    //Diluc
    {
        nome: 'diluc',
        icon: './icon/Element_Pyro.png',
        img: './image/dilucSkinCheck.png',
        star: '⭐⭐⭐⭐⭐', 
        nomeCaracter: "Red Dead of Night", 
    },
    //Jean
    {
        nome: 'jean',
        icon: './icon/Element_Anemo.png',
        img: './image/jeanSkinCheck.png',
        star: '⭐⭐⭐⭐⭐', 
        nomeCaracter: "Sea Breeze", 
    },
    //Klee
    {
        nome: 'klee',
        icon: './icon/Element_Pyro.png',
        img: './image/kleeSkinCheck.png',
        star: '⭐⭐⭐⭐⭐', 
        nomeCaracter: "Blossoming Starlight", 
    },
    //Barbara
    {
        nome: 'barbara',
        icon: './icon/Element_Hydro.png',
        img: './image/barbaraSkinCheck.png',
        star: '⭐⭐⭐⭐', 
        nomeCaracter: "Summertime Sparkle", 
    },
    //Fischl
    {
        nome: 'fischl',
        icon: './icon/Element_Electro.png',
        img: './image/fischlSkinCheck.png',
        star: '⭐⭐⭐⭐', 
        nomeCaracter: "An endless dream", 
    },
    //Kaeya
    {
        nome: 'kaeya',
        icon: './icon/Element_Cryo.png',
        img: './image/kaeyaSkinCheck.png',
        star: '⭐⭐⭐⭐', 
        nomeCaracter: "Sailwind Shadow", 
    },
    //Lisa
    {
        nome: 'lisa',
        icon: './icon/Element_Electro.png',
        img: './image/lisaSkinCheck.png',
        star: '⭐⭐⭐⭐', 
        nomeCaracter: "A Sobriquer Under Shade", 
    },
    //Keqing
    {
        nome: 'keqing',
        icon: './icon/Element_Electro.png',
        img: './image/keqingSkinCheck.png',
        star: '⭐⭐⭐⭐⭐', 
        nomeCaracter: "Opulent Spendor", 
    },
    //Ningguang
    {
        nome: 'ningguang',
        icon: './icon/Element_Geo.png',
        img: './image/ningguangSkinCheck.png',
        star: '⭐⭐⭐⭐', 
        nomeCaracter: "Orchid's Evening Gown", 
    },
    //Ayaka
    {
        nome: 'ayaka',
        icon: './icon/Element_Cryo.png',
        img: './image/ayakaSkinCheck.png',
        star: '⭐⭐⭐⭐⭐', 
        nomeCaracter: "Springbloom Missive", 
    },
 ];
