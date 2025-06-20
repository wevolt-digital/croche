import { Product, Recipe, Testimonial } from '@/lib/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Chocalhos',
    description: 'Produzidos com linha 100% algodão, enchimento anti-alérgico, olhinhos com trava de segurança e guizo.',
    images: [
      'bebe/chocalho-ursinho-aviador.webp',
      'bebe/chocalho-cachorro.webp',
      'bebe/chocalho-girafa.webp',
      'bebe/chocalho-leao.webp',
      'bebe/chocalho-abelha.webp',
      'bebe/chocalho-raposa.webp',
      'bebe/chocalho-hipo.webp'
    ],
    category: 'Bebê',
  },
  {
    id: '2',
    name: 'Porta Maternidade',
    description: 'Personalize o primeiro cantinho do seu bebê com um porta maternidade exclusivo feito à mão.',
    images: [
      'bebe/porta-maternidade1.webp',
      'bebe/porta-maternidade2.webp',
      'bebe/porta-maternidade3.webp'
    ],
    category: 'Bebê',
  },
  {
    id: '3',
    name: 'Faixinha de Cabelo',
    description: 'Um toque de charme e delicadeza para o visual das pequenas.',
    images: [
      'bebe/faixinha-cabeca1.webp',
      'bebe/faixinha-cabeca2.webp',
      'bebe/faixinha-cabeca3.webp',
      'bebe/faixinha-cabeca4.webp',
      'bebe/faixinha-cabeca5.webp',
      'bebe/faixinha-cabeca6.webp'
    ],
    category: 'Bebê',
  },
  {
    id: '4',
    name: 'Kit Higiene',
    description: 'Nosso kit higiene em crochê artesanal é perfeito para guardar itens essenciais com muito cuidado e estilo.',
    image: 'bebe/kit-higiene.webp',
    category: 'Bebê',
  },
  {
    id: '5',
    name: 'Personagens',
    description: 'Personagens de filmes, séries, desenhos e jogos ganham vida em versões exclusivas de crochê.',
    images: [
      'amigurumi/lilo.webp',
      'amigurumi/stich.webp',
      'amigurumi/charmander.webp',
      'amigurumi/baby-yoda.webp',
      'amigurumi/scooby.webp',
      'amigurumi/mulher-maravilha.webp',
      'amigurumi/minion.webp',
      'amigurumi/sonic.webp'
    ],
    category: 'Amigurumi',
  },
  {
    id: '6',
    name: 'Animais',
    description: 'Animais encantadores feitos com muito carinho e uma dose extra de fofura.',
    images: [
      'amigurumi/raposa.webp',
      'amigurumi/passarinho.webp',
      'amigurumi/abelha.webp',
      'amigurumi/girafa.webp',
      'amigurumi/leao.webp',
      'amigurumi/pinguim.webp',
      'amigurumi/ovelha.webp',
      'amigurumi/tartaruga.webp',
      'amigurumi/preguica.webp',
      'amigurumi/burrinho.webp'
    ],
    category: 'Amigurumi',
  },
  {
    id: '7',
    name: 'Naninhas',
    description: 'Conforto e carinho em cada detalhe. Perfeitas para acompanhar os momentos de descanso dos pequenos.',
    images: [
      'amigurumi/naninha-leaozinho.webp',
      'amigurumi/naninha-ursinho-dormindo.webp',
      'amigurumi/naninha-margarida.webp',
      'amigurumi/naninha-ursinho-aviador.webp'
    ],
    category: 'Amigurumi',
  },
  {
    id: '8',
    name: 'Santinhos',
    description: 'Os amigurumis de santos são perfeitos para presentear, decorar ambientes ou acompanhar momentos de oração.',
    images: [
      'amigurumi/anjo-da-guarda.webp',
      'amigurumi/santa-teresinha.webp',
      'amigurumi/sagrada-familia.webp',
      'amigurumi/ns-fatima.webp',
      'amigurumi/santa-cecilia.webp',
      'amigurumi/santo-antonio.webp',
      'amigurumi/ns-gracas.webp',
      'amigurumi/santo-anjo.webp',
      'amigurumi/ns-aparecida.webp'
    ],
    category: 'Amigurumi',
  },
  {
    id: '9',
    name: 'Cachepôs',
    description: 'Um toque artesanal para deixar sua decoração ainda mais charmosa.',
    images: [
      'casa/cachepo-colmeia.webp',
      'casa/cachepo.webp'
    ],
    category: 'Casa e Decoração',
  },
  {
    id: '10',
    name: 'Flores',
    description: 'Flores que não murcham e carregam carinho em cada ponto. Feitas à mão com delicadeza.',
    images: [
      'casa/gerbera.webp',
      'casa/lavanda.webp',
      'casa/rosa.webp',
      'casa/tulipa.webp',
      'casa/dente-de-leao.webp',
      'casa/rosa-c.webp',
      'casa/girassol.webp',
      'casa/orquidea.webp',
      'casa/folha.webp',
      'casa/ramo.webp'
    ],
    category: 'Casa e Decoração',
  },
  {
    id: '11',
    name: 'Cestos',
    description: 'Organização com charme e personalidade. Nossos cestos são para acomodar itens do dia a dia.',
    images: [
      'casa/cesto-raposa.webp',
      'casa/cestao.webp',
      'casa/cesto.webp',
      'casa/cesto-pao.webp'
    ],
    category: 'Casa e Decoração',
  },
  {
    id: '12',
    name: 'Porta Lenço',
    description: 'Nossos porta lenço trazem beleza até aos pequenos cantinhos da casa. Eles unem funcionalidade e delicadeza na medida certa.',
    images: [
      'casa/porta-lenco1.webp',
      'casa/porta-lenco2.webp'
    ],
    category: 'Casa e Decoração',
  },
  {
    id: '13',
    name: 'Bolsas',
    description: 'Estilo e delicadeza em cada fio. Nossas bolsas unem beleza e funcionalidade',
    images: [
      'presentes/bolsa-sacola.webp',
      'presentes/bolsa-boho.webp',
      'presentes/clutch.webp',
      'presentes/bolsa-baguete.webp',
      'presentes/bolsa-colors.webp'
    ],
    category: 'Presentes',
  },
  {
    id: '14',
    name: 'Tiaras',
    description: 'Delicadeza que faz toda a diferença. Tiaras perfeitas para completar o visual das pequenas',
    images: [
      'presentes/tiara1.webp',
      'presentes/tiara2.webp',
      'presentes/tiara3.webp'
    ],
    category: 'Presentes',
  },
  {
    id: '15',
    name: 'Ursinhos e Bonecas',
    description: 'Cada peça carrega delicadeza, afeto e um toque especial que transforma memórias em aconchego.',
    images: [
      'presentes/ursinho-cachecol.webp',
      'presentes/boneca-lily.webp',
      'presentes/ursinho-coroa.webp',
      'presentes/boneca-camponesa.webp',
      'presentes/ursinha-turbante.webp',
      'presentes/boneca-girassol.webp'
    ],
    category: 'Presentes',
  },
  {
    id: '16',
    name: 'Mandalas',
    description: 'Ideias para decorar entradas, quartos ou salas com um toque de beleza e fé.',
    images: [
      'presentes/mandala-g.webp',
      'presentes/mandala-p.webp',
      'presentes/mandala-m.webp'
    ],
    category: 'Presentes',
  },
  {
    id: '17',
    name: 'Natal',
    description: 'Deixe o seu Natal ainda mais especial com peças artesanais cheias de encanto.',
    images: [
      'datas/presepio.webp',
      'datas/bola-natal.webp',
      'datas/vela-natal.webp'
    ],
    category: 'Datas comemorativas',
  },
  {
    id: '18',
    name: 'Dia dos Professores',
    description: 'Uma forma delicada de agradecer quem ensina com o coração.',
    images: [
      'datas/chaveiro-maca-professor.webp',
      'datas/clips-professor.webp',
      'datas/chaveiro-professor.webp'
    ],
    category: 'Datas comemorativas',
  },
  {
    id: '19',
    name: 'Casamentos',
    description: 'Uma lembrança divertida, delicada e cheia de significado para casamentos e chás de panela.',
    image: 'datas/buque-santo-antonio.webp',
    category: 'Datas comemorativas',
  },
  {
    id: '20',
    name: 'Lembrancinhas',
    description: 'Encanto em cada detalhe, transmitem carinho, gratidão e afeto em uma lembrança única e personalizada.',
    images: [
      'datas/clips3-aniversario.webp',
      'datas/batizado2.webp',
      'datas/clips1-aniversario.webp',
      'datas/batizado1.webp',
      'datas/clips2-aniversario.webp',
      'datas/batizado3.webp'
    ],
    category: 'Datas comemorativas',
  },
  {
    id: '21',
    name: 'Pets',
    description: 'Uma lembrança única, perfeita para eternizar o amor por quem faz parte da sua vida.',
    images: [
      'custom/coruja.webp',
      'custom/poodle.webp',
      'custom/gato-preto.webp',
      'custom/beagle.webp',
      'custom/shitzu.webp',
      'custom/salsicha.webp'
    ],
    category: 'Personalizados',
  },
  {
    id: '22',
    name: 'Funko Pop Real',
    description: 'Uma mini versão sua ou de alguém que você quer presentear inspirada no estilo Funko Pop.',
    image: 'custom/funko.webp',
    category: 'Personalizados',
  },
  {
    id: '23',
    name: 'Chaveiros',
    description: 'Personalizados com mascotes, profissões, personagens ou qualquer ideia que represente você.',
    images: [
      'custom/chaveiro-mascote.webp',
      'custom/chaveiro-profissoes.webp'
    ],
    category: 'Personalizados',
  },
  {
    id: '24',
    name: 'Ideias',
    description: 'Tem uma ideia diferente? Criamos peças exclusivas sob encomenda a partir da sua inspiração.',
    images: [
      'custom/pulmao.webp',
      'custom/cereja.webp',
      'custom/unicornio.webp',
      'custom/lua.webp'
    ],
    category: 'Personalizados',
  },
];

export const recipes: Recipe[] = [
  {
    id: '1',
    name: 'Sr. Esquilo',
    description: 'Receita (PDF)',
    image: 'receitas/esquilo.webp',
    price: 33.50,
    isPaid: true,
    link: 'https://www.mercadopago.com.br/checkout/v1/payment/redirect/7637ff19-dde2-449a-a617-31f17be2612f/payment-option-form-v2/?source=link&preference-id=150955773-97180d94-e20a-44f9-ac58-07c3507c2fb7&router-request-id=3e2bd385-0791-4796-98f7-0f4b7716bd11&p=d02b4a07a5ddc6512bcb212163166d70',
  },
  {
    id: '2',
    name: 'Bolsa Margarida',
    description: 'Receita (PDF)',
    image: 'receitas/bolsa-margarida.webp',
    price: 30.50,
    isPaid: true,
    link: 'https://www.mercadopago.com.br/checkout/v1/payment/redirect/6ceb6914-8194-41f4-8678-c8689daa6609/payment-option-form-v2/?source=link&preference-id=150955773-57561842-3c26-4f39-9425-e3c662e61661&router-request-id=e7d4c04e-0749-443b-91ae-e293c91cef02&p=d02b4a07a5ddc6512bcb212163166d70',
  },
  {
    id: '3',
    name: 'Abelha Beelinda',
    description: 'Receita (PDF)',
    image: 'receitas/abelha.webp',
    price: 33.50,
    isPaid: true,
    link: 'https://www.mercadopago.com.br/checkout/v1/payment/redirect/0b7f0bec-9444-48fc-b194-99aa7f4d4405/payment-option-form-v2/?source=link&preference-id=150955773-9e3e880c-c079-4ec6-9b88-c8484ca92d09&router-request-id=e79de84c-725f-443b-83a9-0e2e95ae14d2&p=d02b4a07a5ddc6512bcb212163166d70',
  },
  {
    id: '4',
    name: 'Mini noz',
    description: 'Receita (PDF)',
    image: 'receitas/mini-noz.webp',
    isPaid: false,
    link: 'https://www.instagram.com/p/C92j3N2J12Y/?img_index=1',
  },
  {
    id: '5',
    name: 'Marcador de páginas',
    description: 'Receita (PDF)',
    image: 'receitas/marcador-paginas.webp',
    isPaid: false,
    link: 'https://www.instagram.com/p/DBFCFnaxORC/?img_index=1',
  },
  {
    id: '6',
    name: 'Mini abelha',
    description: 'Receita (PDF)',
    image: 'receitas/mini-abelha.webp',
    isPaid: false,
    link: 'https://www.instagram.com/p/DAdmZWBxLGq/?img_index=1',
  },
  {
    id: '7',
    name: 'Mini margarida',
    description: 'Receita (PDF)',
    image: '/receitas/mini-margarida',
    isPaid: false,
    link: 'https://www.instagram.com/p/DAjxiJjx3ak/',
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Jessica Fernandes',
    text: 'Pri, estou encantada com suas receitas. Achei muito fácil de crochetar com as fotos lindas do processo.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
  },
  {
    id: '2',
    name: 'Amanda S. Sousa',
    text: 'Apaixonada pela receita da abelhinha Pri, é uma delicia de crochetar.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
  },
  {
    id: '3',
    name: 'Bianca Monta',
    text: 'Adorei sua receita, estava procurando uma dessa a tempos, procurei até em receitas americanas e não encontrava. Obrigada',
    image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg',
  },
];