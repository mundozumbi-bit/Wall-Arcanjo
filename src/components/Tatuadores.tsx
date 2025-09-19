import { useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Instagram } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '@/components/Footer';

const Tatuadores = () => {
  const artists = [
    {
      id: 1,
      name: "Wall Arcanjo",
      bio: "Fundadora do WALL ARCANJO, Wall é uma artista visionária com mais de 15 anos de experiência. Especialista em realismo e geometrico, ela transformou sua paixão pela arte em um dos estúdios mais respeitados da cidade.",
      instagram: "@walarcanjo",
      profileImage: "./images/Tatuadores/Wall/perfil.png",
      workImages: [
        "./images/Tatuadores/Wall/work1.jpg",
        "./images/tattooTeste1.jpg",
        "./images/tattooTeste2.jpg",
        "./images/tattooTeste3.jpg"
      ]
    },
    {
      id: 2,
      name: "Telmo Grabher",
      bio: "Telmo Grabher é um tatuador profissional com mais de 25 anos de experiência, consolidando sua atuação em Brasília – DF e com forte presença também em São Paulo. Com formação em arquitetura e design pela Universidade de Brasília (UnB), Telmo encontrou na tatuagem uma forma de expressão artística profunda, que une técnica, simbolismo e ancestralidade. Ele é especialista em trabalhos tribais samoanos e polinésios, designs geométricos de alta precisão e blackwork, sendo amplamente reconhecido por seus traços marcantes, composição harmoniosa e projetos personalizados, desenvolvidos em estreita colaboração com cada cliente. Seu grande diferencial reside no domínio da técnica freehand, onde desenha diretamente na pele, mantendo total fidelidade às tradições culturais que representa. ",
      instagram: "@telmograbhertattoo",
      profileImage: "./images/Tatuadores/Telmo/perfil.jpeg",
      workImages: [
        "./images/Tatuadores/Telmo/work1.jpeg",
        "./images/Tatuadores/Telmo/work2.jpeg",
        "./images/Tatuadores/Telmo/work3.jpeg",
        "./images/Tatuadores/Telmo/work4.jpeg"
      ]
    },
    {
      id: 3,
      name: "Sérgio Lima",
      bio: "Sérgio Soares de Lima é um tatuador com 15 anos de experiência, período em que se dedicou ao estudo da maioria dos estilos. Seu maior diferencial é a habilidade em desenvolver fechamentos de membros, buscando criar identidade e equilíbrio nas composições com atenção à anatomia. Atualmente, seus estilos preferidos são desenhos geométricos, mandalas e ornamentais.",
      instagram: "@sergiolima.arte",
      profileImage: "./images/Tatuadores/Sergio/perfil.JPG",
      workImages: [
        "./images/Tatuadores/Sergio/work1.jpg",
        "./images/Tatuadores/Sergio/work2.jpg",
        "./images/Tatuadores/Sergio/work3.jpg",
        "./images/Tatuadores/Sergio/work4.jpg"
      ]
    },
    {
      id: 4,
      name: "Rodrigo Cunha",
      bio: "Rodrigo Cunha é um tatuador com 8 anos de experiência, cujo interesse pela tatuagem surgiu através da cena hardcore. Ele sempre admirou os artistas das bandas que apreciava com suas tatuagens tradicionais, sentindo-se atraído pela expressão de rebeldia por meio da arte, seja ela sonora ou na pele. Essa paixão deu origem ao seu principal interesse no estilo tradicional americano, popularmente conhecido como Old School. Rodrigo também aprecia e realiza tatuagens Fine Line, aplicando um toque de suavidade que, por vezes, combina com elementos do Old School. Dessa forma, ele transita entre esses estilos, inserindo um pouco de sua personalidade única em cada um de seus trabalhos.",
      instagram: "@cunha.tattoo",
      profileImage: "./images/Tatuadores/Rodrigo/perfil.jpg",
      workImages: [
        "./images/Tatuadores/Rodrigo/work1.jpg",
        "./images/Tatuadores/Rodrigo/work2.jpg",
        "./images/Tatuadores/Rodrigo/work3.jpg",
        "./images/Tatuadores/Rodrigo/work4.jpg"
      ]
    },
    {
      id: 5,
      name: "Giovanna Cardoso",
      bio: "Giovanna Cardoso é uma tatuadora iniciante com um ano de experiência ativa, mas já com cinco anos de imersão no universo da tatuagem. Após concluir seus estudos com a renomada Wall, ela agora tem a oportunidade de trabalhar ao lado dela no estúdio. Seu estilo principal é o blackwork, mas Giovanna é versátil e adora criar trabalhos exclusivos, dando vida às ideias dos clientes com sua própria visão artística.",
      instagram: "@giocardoso",
      profileImage: "./images/Tatuadores/Giovanna/perfil.jpg",
      workImages: [
        "./images/Tatuadores/Giovanna/work1.jpg",
        "./images/Tatuadores/Giovanna/work2.jpg",
        "./images/Tatuadores/Giovanna/work3.jpg",
        "./images/Tatuadores/Giovanna/work4.jpg"
      ]
    },
    {
      id: 6,
      name: "Kathlyn Sousa",
      bio: "Kathlyn Nascimento de Sousa atua como tatuadora há cerca de 4 anos. Seu primeiro contato com a tatuagem surgiu através da inspiração de um amigo tatuador, o que a motivou a mergulhar profundamente nesse universo. Desde então, Kathlyn tem se dedicado intensamente ao estudo e à prática da arte na pele, passando por diversas formações e atendimentos que solidificaram sua técnica, aprimoraram seu olhar artístico e fortaleceram sua conexão com cada projeto que realiza. Seu estilo transita com fluidez entre personagens, elementos botânicos e composições autorais, sempre com um olhar atento à estética Art Nouveau e ao neotradicional, estilo pelo qual nutre grande paixão e no qual busca constante especialização.",
      instagram: "@kathynip_arts",
      profileImage: "./images/Tatuadores/Kathlyn/perfil.jpeg",
      workImages: [
        "./images/Tatuadores/Kathlyn/work1.jpeg",
        "./images/Tatuadores/Kathlyn/work2.jpeg",
        "./images/Tatuadores/Kathlyn/work3.jpeg",
        "./images/Tatuadores/Kathlyn/work4.jpeg"
      ]
    },
    {
      id: 7,
      name: "Rogério de Araújo",
      bio: "Rogério de Araújo, conhecido como MAGAL TATTOO, iniciou sua jornada profissional em 1994, aos 19 anos, em um estúdio na renomada Galeria do Rock. Aos 24 anos, inaugurou seu primeiro estúdio na cidade de São Paulo, na região do Tatuapé. No ano 2000, com 26 anos, Magal abriu um estúdio no bairro de São Mateus, que se tornou o primeiro da região e é referência para profissionais e clientes amantes da arte da tatuagem até os dias atuais. Com 31 anos de experiência na área da tatuagem e piercing, Magal Tattoo, além de artista e profissional, dedica-se ao ensino da arte da tatuagem. Ele compartilha seu conhecimento com aqueles que desejam iniciar nessa maravilhosa arte, seja para formar futuros profissionais ou para artistas que buscam expandir seus horizontes criativos. Como ele mesmo diz: A persistência leva à perfeição.",
      instagram: "@magaltattoo",
      profileImage: "./images/Tatuadores/Rogerio/perfil.jpg",
      workImages: [
        "./images/Tatuadores/Rogerio/work1.jpeg",
        "./images/Tatuadores/Rogerio/work2.jpeg",
        "./images/Tatuadores/Rogerio/work3.jpeg",
        "./images/Tatuadores/Rogerio/work4.jpeg"
      ]
    },
    {
      id: 8,
      name: "Michele Moura",
      bio: "Michele Moura, aos 40 anos, possui 17 anos de atuação na área da beleza. Ela é uma profissional multifacetada, especializada em micropigmentação, tatuagem e lash design, além de ministrar cursos nessas áreas. Seu propósito de vida é claro: elevar a autoestima das pessoas e eternizar momentos marcantes através da arte em suas diversas formas de expressão.",
      instagram: "@michelemouralash",
      profileImage: "./images/Tatuadores/Michele/perfil.jpeg",
      workImages: [
        "./images/Tatuadores/Michele/work1.jpeg",
        "./images/Tatuadores/Michele/work2.jpeg",
        "./images/Tatuadores/Michele/work3.jpeg",
        "./images/Tatuadores/Michele/work4.jpeg"
      ]
    },
    {
      id: 9,
      name: "Patricia Montoan",
      bio: "Patricia Mantoan é tatuadora e body piercing há mais de 28 anos, consolidando-se como uma das grandes referências no cenário da tatuagem brasileira. Sua trajetória é marcada pelo pioneirismo, sendo a primeira mulher tatuadora a atuar na icônica Galeria do Rock, em São Paulo. O trabalho de Patricia se destaca pela versatilidade, demonstrando domínio em estilos como colorido, aquarela, fine line e tradicional (old school). Ela sempre prioriza traços precisos, cores vibrantes e composições autênticas em suas criações. Ao longo de sua carreira, Patricia Mantoan estampou mais de 10 capas de revistas especializadas e atuou como jurada em diversas convenções de tatuagem pelo país, contribuindo significativamente para a evolução e profissionalização do mercado. Seu legado é reconhecido pela técnica apurada, sensibilidade artística e paixão que demonstra tanto na arte da tatuagem quanto na perfuração corporal.",
      instagram: "@patyfadatattoo",
      profileImage: "./images/Tatuadores/Patricia/perfil.jpeg",
      workImages: [
        "./images/Tatuadores/Patricia/work1.jpeg",
        "./images/Tatuadores/Patricia/work2.jpeg",
        "./images/Tatuadores/Patricia/work3.jpeg",
        "./images/Tatuadores/Patricia/work4.jpeg"
      ]
    },
    {
      id: 10,
      name: "Greg Oliveira",
      bio: "Greg Oliveira possui 12 anos de vasta experiência como body piercer, oferecendo um serviço que preza pela máxima segurança e higiene. Ele utiliza apenas materiais esterilizados e joias de altíssima qualidade. Sua especialidade são as peças em titânio e ouro, incluindo designs com pedras e ornamentos, garantindo não apenas a beleza, mas também a biocompatibilidade e o conforto para seus clientes. Greg realiza cada procedimento com extremo cuidado, sempre focado na saúde e na plena satisfação de quem o procura.",
      instagram: "@greg0liveira.piercer",
      profileImage: "./images/Tatuadores/Greg/perfil.jpeg",
      workImages: [
        "./images/Tatuadores/Greg/work1.jpeg",
        "./images/Tatuadores/Greg/work2.jpeg",
        "./images/Tatuadores/Greg/work3.jpeg",
        "./images/Tatuadores/Greg/work4.jpeg"
      ]
    },
    {
      id: 11,
      name: "Magali Ctvrtnik",
      bio: "Magali Ctvrtnik é técnica de enfermagem com formação em instrumentação cirúrgica, atuando como body piercer há mais de 17 anos. Em cada procedimento, Magali une técnica apurada, rigorosa segurança e uma estética primorosa. Além disso, é técnica especializada em remoção a laser, com 5 anos de experiência na área. Seu compromisso inabalável é oferecer um atendimento ético, qualificado e totalmente focado no bem-estar e na satisfação de cada cliente.",
      instagram: "@magallipiercinglaser",
      profileImage: "./images/Tatuadores/Magali/perfil.jpeg",
      workImages: [
        "./images/Tatuadores/Magali/work1.jpeg",
        "./images/Tatuadores/Magali/work2.jpeg",
        "./images/Tatuadores/Magali/work3.jpeg",
        "./images/Tatuadores/Magali/work4.jpeg"
      ]
    },
    {
      id: 12,
      name: "Uendel Oliveira",
      bio: "Uendel Oliveira é um tatuador premiado com mais de 28 anos de experiência em eternizar arte na pele. Ele é especialista em tattoos coloridas e trabalhos em preto & cinza. Seu portfólio abrange animes, stickers, personagens e muito mais, sempre executados com técnica impecável, precisão e um estilo inconfundível.",
      instagram: "@uendeloliveiratattoo",
      profileImage: "./images/Tatuadores/Uendel/perfil.jpeg",
      workImages: [
        "./images/Tatuadores/Uendel/work1.jpeg",
        "./images/Tatuadores/Uendel/work2.jpeg",
        "./images/Tatuadores/Uendel/work3.jpeg",
        "./images/Tatuadores/Uendel/work4.jpeg"
      ]
    },
    {
      id: 13,
      name: "Renata Cunha",
      bio: "Renata Cunha, aos 48 anos, é reconhecida como Rainha e Miss Tattoo, atuando tanto como tatuadora quanto como modelo. Ela se destaca por ter sido uma das primeiras Gibi Girls no Brasil, figurando em capas de revistas e concedendo entrevistas em quase todas as emissoras. Renata é uma voz ativa na defesa dos direitos das mulheres tatuadas, lutando pelo respeito e pela liberdade de ser quem escolhem ser. Mãe de um filho abençoado, ela viaja pelo Brasil e internacionalmente, levando sua arte e atuando como jurada, somando mais de 100 participações em bancas de jurados no concurso de Miss Tattoo. Renata sente-se honrada pela concretização de seus sonhos, sendo um deles o de se tornar tatuadora, e atualmente está se especializando em tattoos minimalistas e delicadas. Sua carreira é marcada por diversos troféus, tanto por sua atuação como jurada quanto por homenagens recebidas.",
      instagram: "@renata_cunha_",
      profileImage: "./images/Tatuadores/Renata/perfil.jpeg",
      workImages: [
        "./images/Tatuadores/Renata/work1.jpeg",
        "./images/Tatuadores/Renata/work2.jpeg",
        "./images/Tatuadores/Renata/work3.jpeg",
        "./images/Tatuadores/Renata/work4.jpeg"
      ]
    },
    {
      id: 14,
      name: "Sandro Wayne",
      bio: "Sandro Wayne é um tatuador com mais de 20 anos de experiência. Inicialmente, ele tatuava uma variedade de desenhos, mas atualmente prefere trabalhos em preto e branco, explorando diferentes nuances de cinza e preto. Ao longo de sua carreira, Sandro vivenciou experiências internacionais, tatuando em diversos estúdios e participando de convenções, o que elevou sua experiência também na técnica que reproduz o efeito aquarela na tatuagem.",
      instagram: "@sandrowayne",
      profileImage: "./images/Tatuadores/Sandro/perfil.jpg",

      workImages: [
        "./images/Tatuadores/Sandro/work1.jpg",
        "./images/Tatuadores/Sandro/work2.jpg",
        "./images/Tatuadores/Sandro/work3.jpg",
        "./images/Tatuadores/Sandro/work4.jpg"
      ]
    },
    {
      id: 15,
      name: "Anderson Kactus",
      bio: "Artista versátil, Anderson — amplamente conhecido como Kactu’s — domina diversos estilos, mas é nos trabalhos coloridos que sua arte realmente se destaca. Suas especialidades incluem o New School, o Neo Tradicional e o New Japonês, entregando consistentemente traços precisos, cores vibrantes e composições altamente criativas que transformam a pele em verdadeiras obras de arte. Reconhecido no cenário da tatuagem, Kactu’s já conquistou impressionantes 67 prêmios em convenções e eventos especializados, consolidando seu nome como uma referência no universo da tatuagem artística nas áreas de Desenho, Newschool, Neotradicional, Oriental e Aquarela.",
      instagram: "@uakactustattoo",
      profileImage: "./images/Tatuadores/Anderson/perfil.jpeg",
      workImages: [
        "./images/Tatuadores/Anderson/work1.jpeg",
        "./images/Tatuadores/Anderson/work2.jpeg",
        "./images/Tatuadores/Anderson/work3.jpeg",
        "./images/Tatuadores/Anderson/work4.jpeg"
      ]
    }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".artist-profile", {
      scrollTrigger: {
        trigger: ".artists-container",
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="pt-32 bg-secondary/90 min-h-screen">
      <div className="container mx-auto px-4 mb-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Nossos Tatuadores</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça nossa equipe de artistas talentosos, cada um com sua especialidade única e anos de experiência
          </p>
        </div>

        <div className="artists-container space-y-16">
          {artists.map((artist, index) => (
            <Card key={artist.id} className="artist-profile overflow-hidden">
              <div className={`grid lg:grid-cols-2 gap-8 p-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Profile Info */}
                <div className={`flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center gap-6 mb-6">
                    <img 
                      src={artist.profileImage}
                      alt={artist.name}
                      className="w-32 h-32 rounded-full object-cover"
                    />
                    <div>
                      <h2 className="text-3xl font-bold text-primary mb-2">{artist.name}</h2>
                      <a 
                        href={`https://instagram.com/${artist.instagram.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-secondary hover:text-secondary-dark transition-colors"
                      >
                        <Instagram size={20} />
                        <span className="font-medium">{artist.instagram}</span>
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">{artist.bio}</p>
                </div>

                {/* Work Gallery */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="grid grid-cols-2 gap-4">
                    {artist.workImages.map((image, imgIndex) => (
                      <div key={imgIndex} className="aspect-square overflow-hidden rounded-lg">
                        <img 
                          src={image}
                          alt={`Trabalho ${imgIndex + 1} de ${artist.name}`}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tatuadores;
