import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Star, Award } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '@/components/Footer';

// Tipo com dados oficiais dos e-books/cursos
type Course = {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  url: string;
};

const Cursos = () => {
  // Lista oficial de e-books/cursos
  const courses: Course[] = [
    {
      id: 1,
      name: "E-Book Biossegurança",
      description:
        "DOMINE A BIOSSEGURANÇA — O guia prático e atualizado que ajuda você a evitar multas, proteger seus clientes e conquistar credibilidade no estúdio.",
      price: "R$ 29,90",
      image: "/images/Cursos/Biossegurança.webp",
      url: "https://wallarcanjoacademy.com.br/biosseguranca/",
    },
    {
      id: 2,
      name: "E-Book Flash Day",
      description:
        "DOMINE O FLASH DAY — O guia estratégico que mostra como criar coleções atrativas, vender mais e organizar eventos de sucesso no estúdio.",
      price: "R$ 29,90",
      image: "/images/Cursos/Flash Day.webp",
      url: "https://wallarcanjoacademy.com.br/flash-day/",
    },
    {
      id: 3,
      name: "E-Book Jornada do Tatuador",
      description:
        "CONSTRUA SUA JORNADA — O guia completo que mostra os passos essenciais para estruturar sua carreira, atrair clientes e crescer com confiança.",
      price: "R$ 29,90",
      image: "/images/Cursos/Jornada do Tatuador.webp",
      url: "https://wallarcanjoacademy.com.br/jornada-do-tatuador/",
    },
    {
      id: 4,
      name: "E-Book Pops",
      description:
        "DOMINE OS POPS — O guia prático que ensina como criar e aplicar Procedimentos Operacionais Padrão para mais segurança e organização.",
      price: "R$ 29,90",
      image: "/images/Cursos/Pops.webp",
      url: "https://wallarcanjoacademy.com.br/pops/",
    },
    {
      id: 5,
      name: "E-Book Traços",
      description:
        "DOMINE OS TRAÇOS — O guia prático que ensina a treinar linhas, desenvolver firmeza e conquistar confiança na sua evolução como artista.",
      price: "R$ 29,90",
      image: "/images/Cursos/Traços.webp",
      url: "https://wallarcanjoacademy.com.br/tracos/",
    },
    {
      id: 6,
      name: "E-Book Planner",
      description:
        "ORGANIZE SUA ROTINA — O guia prático que ajuda você a planejar treinos, estruturar metas e evoluir mês a mês como tatuador profissional.",
      price: "R$ 29,90",
      image: "/images/Cursos/Planner.webp",
      url: "https://wallarcanjoacademy.com.br/planner/",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".course-card", {
      scrollTrigger: {
        trigger: ".courses-grid",
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      stagger: 0.1,
      duration: 0.6,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="pt-32 bg-secondary/90 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Bloco 1: Bem-vindo */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Bem-vindo à Wall Arcanjo Tattoo & Academy</h1>
          <div className="max-w-3xl mx-auto text-lg text-gray-600 space-y-6">
            <p>
              Com mais de 15 anos de carreira, a Mestra das Agulhas <Link to="/tatuadores" className="text-primary hover:underline">Wall Arcanjo</Link> reuniu uma equipe formada pelos <Link to="/tatuadores" className="text-primary hover:underline">melhores tatuadores</Link> que cruzaram seu caminho ao longo de duas décadas de estrada.
            </p>
            <div>
              <p className="font-semibold text-xl mb-2">O resultado?</p>
              <p className="mb-4">Uma escola feita por artistas, para formar artistas!</p>
              <p>Inauguramos a estrutura de ensino mais criativa e moderna de São Paulo, a apenas 5 minutos do Metrô Vila Mariana, no coração da cena artística da cidade.</p>
              <p className="font-bold mt-4">Aqui, você aprende com quem vive da tattoo – e vai sair preparado para fazer o mesmo.</p>
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="courses-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <React.Fragment key={course.id}>
              <Card className="course-card flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-700">De <span className="line-through text-gray-500">R$ 69,90</span><br/> por <span className="text-2xl font-bold text-primary">R$ 29,90</span></span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{course.name}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{course.description}</p>

                  <Button asChild className="w-full mt-auto bg-primary hover:bg-primary/90 text-white text-lg font-bold py-3 px-8 rounded-full transition-colors duration-300">
                    <a href={course.url} target="_blank" rel="noopener noreferrer">Ver Detalhes</a>
                  </Button>
                </div>
              </Card>
              {index === 2 && (
                <div className="lg:col-span-3 md:col-span-2 bg-primary text-white rounded-lg p-8 my-8 text-center flex flex-col items-center justify-center">
                  <h2 className="text-3xl font-bold mb-4">A tatuagem pode ser sua carreira.</h2>
                  <p className="text-xl mb-6">E aqui, ela começa do jeito certo!</p>
                  <Button asChild className="bg-white text-primary hover:bg-gray-200 font-bold py-3 px-8 text-lg">
                    <Link to="/contato">Comece sua jornada</Link>
                  </Button>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 mb-10">
          <h2 className="text-3xl font-bold text-white mb-4">Pronto para começar sua jornada?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra qual curso é ideal para o seu nível e objetivos.
            Nossa equipe está pronta para ajudar você a se tornar um tatuador profissional.
          </p>
          <Button asChild className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
            <Link to="/contato">Fale conosco</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cursos;