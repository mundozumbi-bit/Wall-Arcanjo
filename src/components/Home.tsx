import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "@/components/Footer";

const Home = () => {
  const logoRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const buttonsRef = useRef(null);
  const bgRef = useRef(null); // Ref para o elemento que controla o background
  const proposalSectionRef = useRef(null);

  const featuredArtists = [
    {
      id: 1,
      name: "Wall Arcanjo",
      title: "Fundadora & Tatuadora",
      specialty: "Realismo e Geometrico",
      instagram: "@walarcanjo",
      image:
        "./images/bgHero.png",
    },
    {
      id: 2,
      name: "Telmo Grabher",
      title: "Tatuador",
      specialty: "Black Work e Ornamental",
      instagram: "@telmograbhertattoo",
      image:
        "./images/Tatuadores/Telmo/perfil.jpeg",
    },
    {
      id: 3,
      name: "Sérgio Lima",
      title: "Tatuador Principal",
      specialty: "",
      instagram: "@sergiolima.arte",
      image:
        "./images/Tatuadores/Sergio/perfil.JPG",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Garante que o overflow do body não crie barras de rolagem desnecessárias
    document.body.style.overflowX = "hidden";

    // Define o estado inicial de todos os elementos para que comecem invisíveis e fora da tela
    gsap.set([logoRef.current, titleRef.current, textRef.current, buttonsRef.current], { opacity: 0, y: 50 });
    // Define o background inicialmente como 'fixed' para ser estático
    gsap.set(bgRef.current, { backgroundAttachment: "fixed", backgroundPosition: "center center" });

     // ScrollTrigger para mudar a logo no Header
     ScrollTrigger.create({
      trigger: proposalSectionRef.current, // Gatilho é a seção "Nossa Proposta"
      start: "top -90%", // Quando o topo da seção atinge 10% do topo da viewport (90% percorrido)
      // start: "top 90%", // Se você quiser 90% da altura da *seção* visível, use "top 90%"
      end: "bottom top", // Isso significa que o evento vai durar até o final da seção
      onEnter: () => {
        // Dispara um evento personalizado ou diretamente altera um estado global
        // Para simplicidade e eficácia, vamos disparar um evento que o Header pode ouvir
        window.dispatchEvent(new CustomEvent('changeLogo', { detail: 'logo1.png' }));
      },
      onLeaveBack: () => {
        // Dispara um evento para voltar à logo original ao rolar para cima
        window.dispatchEvent(new CustomEvent('changeLogo', { detail: 'logo2.png' }));
      },
    });

    // Animação para a logo aparecer ao carregar
    gsap.to(logoRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
    });

    // Linha do tempo para as animações sequenciais baseadas no scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-section", // Usamos a seção hero como gatilho
        start: "top top", // Começa quando o topo da seção hero atinge o topo da viewport
        end: "bottom top", // Termina quando o fundo da seção hero atinge o topo da viewport
        scrub: true, // Suaviza a animação com o scroll
        pin: true, // Fixa a seção hero na tela enquanto a animação ocorre
        pinSpacing: true, // Evita que o pino adicione espaçamento extra
      },
    });

    // Logo desaparece enquanto o título aparece
    tl.to(logoRef.current, { opacity: 0, y: -50, duration: 0.5 }, 0) // Começa no início da timeline
      .to(titleRef.current, { opacity: 1, y: 0, duration: 0.7 }, 0.4); // Atraso de 0.4 segundos após o início

    // Texto aparece
    tl.to(textRef.current, { opacity: 1, y: 0, duration: 0.7 }, 0.5); // Atraso de 0.5 segundos

    // Botões aparecem
    tl.to(buttonsRef.current, { opacity: 1, y: 0, duration: 0.7 }, 0.8); // Atraso de 0.8 segundos

    // Animação do background paralaxe *apenas após* os botões estarem visíveis
    // Criamos um novo ScrollTrigger para o paralaxe do background
    ScrollTrigger.create({
      trigger: buttonsRef.current,
      start: "top center", // Inicia quando os botões estão no centro da tela
      end: "bottom top", // Termina quando o final dos botões passa o topo da tela
      scrub: true,
      onEnter: () => {
        // Quando os botões aparecem e o trigger entra, muda para background-attachment: scroll
        gsap.to(bgRef.current, {
          backgroundAttachment: "scroll",
          duration: 0.01, // Duração mínima para a mudança instantânea
          ease: "none",
        });
      },
      onLeaveBack: () => {
        // Ao rolar para cima novamente, volta para background-attachment: fixed
        gsap.to(bgRef.current, {
          backgroundAttachment: "fixed",
          duration: 0.01,
          ease: "none",
        });
gsap.to(logoRef.current, { opacity: 1, y: 0, duration: 0.5 })
      },
      // Durante o estado de "scroll", o backgroundPosition será animado
      onUpdate: (self) => {
        if (self.isActive) {
          gsap.to(bgRef.current, {
            backgroundPosition: `top ${-self.progress * 200}px`, // Ajuste o 200 para mais ou menos paralaxe
            ease: "none",
            overwrite: true, // Garante que apenas uma animação de backgroundPosition esteja ativa
          });
        }
      },
    });

    // Animação dos cards de artistas (inalterado)
    gsap.from(".artist-card", {
      scrollTrigger: {
        trigger: ".artists-section",
        start: "top 80%",
      },
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 0.6,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      document.body.style.overflowX = ""; // Restaura o overflow ao desmontar
    };
  }, []);

  return (
    <div className="">
      {/* Hero Section */}
      <section className="hero-section min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary to-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          ref={bgRef}
          className="absolute inset-0 bg-cover bg-no-repeat bg-center opacity-80"
          style={{
            backgroundImage: "url('./images/bgHero.png')",
            backgroundAttachment: "fixed",
          }}
        ></div>

        <div className=" container mx-auto px-4 text-center relative z-10">
          <Link to="/" className="flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
            <img
              ref={logoRef}
              src="/images/logo2.png"
              alt="WALLARCANJO Logo"
              className="h-28 w-auto object-cover "
            />
          </Link>

          <div ref={titleRef}>
          <h1  className="text-4xl md:text-6xl font-bold mb-6">
            Arte que Marca Sua História
          </h1>
          </div>
          <p ref={textRef} className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            No WALL ARCANJO, transformamos suas ideias em obras de arte únicas.
            Com mais de 15 anos de experiência, nosso estúdio une tradição e
            inovação para criar tatuagens que contam sua história.
          </p>
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg"
            >
              <Link to="/tatuadores">Conheça nossos artistas</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg"
            >
              <Link to="/contato">Agende uma tattoo</Link>
            </Button>
          </div>
        </div>
      </section>

       {/* Courses CTA Section */}
       <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
          Seu talento pode te levar muito além do estúdio. Do Brasil pro mundo, um traço de cada vez.
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            A sua jornada começa aqui, com os maiores nomes do mercado como seus Mestres. 
            <br /><br />
            Do básico ao avançado, técnicas, estratégias de negócio e muito mais, para transformar sua paixão em profissão!
          </p>
          <Button
            asChild
            className="bg-secondary hover:bg-secondary-dark text-white px-8 py-3 text-lg"
          >
            <Link to="/cursos">Explorar Cursos</Link>
          </Button>
        </div>
      </section>

      {/* Studio Proposal Section */}
      <section ref={proposalSectionRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-8">
              Nossa Proposta
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <img
                    src="./images/ink.png"
                    alt="Arte"
                    className="h-12 w-auto object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Arte Personalizada
                </h3>
                <p className="text-gray-600">
                  Cada tatuagem é única, criada especialmente para você com base
                  em suas ideias e nossa expertise artística.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <img
                    src="./images/protect.png"
                    alt="Arte"
                    className="h-10 w-auto object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Segurança Total
                </h3>
                <p className="text-gray-600">
                  Seguimos todos os protocolos de saúde e utilizamos apenas
                  materiais descartáveis e equipamentos esterilizados.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <img
                    src="./images/diploma.png"
                    alt="Arte"
                    className="h-10 w-auto object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Formação Profissional
                </h3>
                <p className="text-gray-600">
                  Oferecemos cursos completos para quem deseja se
                  profissionalizar na arte da tatuagem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Artists Section */}
      <section className="artists-section py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Nossos Artistas em Destaque
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Conheça os tatuadores que fazem do WALL ARCANJO referência em
              qualidade e criatividade
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredArtists.map((artist) => (
              <Card
                key={artist.id}
                className="artist-card overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-1">
                    {artist.name}
                  </h3>
                  <p className="text-secondary font-medium mb-2">
                    {artist.title}
                  </p>
                  <p className="text-gray-600 mb-4">{artist.specialty}</p>
                  <a
                    href={`https://instagram.com/${artist.instagram.replace(
                      "@",
                      ""
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
                  >
                    <Instagram size={20} />
                    <span>{artist.instagram}</span>
                  </a>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              className="bg-primary hover:bg-primary-dark text-white px-8 py-3 text-lg"
            >
              <Link to="/tatuadores">Ver Todos os Tatuadores</Link>
            </Button>
          </div>
        </div>
      </section>

     

      <Footer />
    </div>
  );
};

export default Home;
