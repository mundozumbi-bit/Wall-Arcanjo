import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Star, Award, BookOpen, X } from 'lucide-react'; 
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '@/components/Footer';

// Definição do tipo para um curso para melhor manutenibilidade
type Course = {
  id: number;
  name: string;
  description: string;
  duration: string;
  classes: string;
  level: string;
  price: string;
  image: string;
  topics: string[];
};

const Cursos = () => {
  // Tipando o estado para aceitar um objeto de curso ou nulo
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const courses: Course[] = [
    // Curso Básico (sem alterações)
    {
      id: 1,
      name: "Curso Básico",
      description: "Curso completo com 20 aulas que abordam desde a história da tatuagem, biossegurança, técnicas de traço, sombreamento, colorimetria até a prática em pele humana e gestão de carreira.",
      duration: "80 horas",
      classes: "20 aulas",
      level: "Iniciante",
      price: "R$ 1.200",
      image: "https://i.pinimg.com/236x/70/d0/7a/70d07aeb497442d3c88bb95d941aeedb.jpg",
      topics: [
          "Bônus: Aulas de Desenho (Gravada)", "01 – Introdução, História da tatuagem e Categoria – Prática e primeiro contato.", "02 – Máquinas agulhas e Pigmentos e Equipamentos.", "03 – Decalque Básico / Traços (Prática)", "04 – Traços - Fine Bold, Sculpt line", "05 – Decalque Avançado (Prática)", "06 – Preenchimento Sólido (Pratica)", "07 – Sombreamento, Agulhas degradê (Teoria e Pratica)", "08 – Sombreamento (Prática 2)", "09 – Colorimetria, Transição de Tons (Teoria + Pratica)", "10 – Misturas Cores e Diluição (Prática)", "11 – Rastelado e Pontilhismo (Prática)", "12 – Biosegurança, Montagem de Bancada, Anamnese, Imonologia e Fisiologia da pele.", "13 – Atendimento ao Cliente, montagem de projetos e orçamentos.", "14 – Fotografia, Redes Sociais registro de processos.", "15 – Aula de Obervação com o Professor", "16 – Prática em pele Humana com mentoria 1", "17 – Pratica em pele humana com mentoria 2", "18 - Pratica em pele humana com mentoria 3", "19 - Pratica em pele humana com mentoria 4", "20 – Encerramento com dinâmica e entrega do Certificado."
      ]
    },
    // CURSO AVANÇADO ATUALIZADO COM AS NOVAS INFORMAÇÕES
    {
      id: 2,
      name: "Curso Avançado de Tatuagem",
      description: "Leve sua técnica do intermediário ao avançado, desenvolvendo seu estilo autoral e profissional com foco em realismo, cobertura, freehand e projetos complexos.",
      duration: "100 horas",
      classes: "25 aulas",
      level: "Avançado",
      price: "R$ 2.500", // Preço mantido do curso anterior, ajuste se necessário
      image: "https://i.pinimg.com/236x/32/fc/32/32fc32a3c4730884c586c81153bb359d.jpg", // Imagem mantida, ajuste se necessário
      topics: [
        "01 - Introdução ao Curso + Planejamento de Projeto Autoral (Teórica)",
        "02 - Fundamentos do Realismo P&B + Estudo de Referência (Teórico/Prático)",
        "03 - Prática de Realismo P&B em Pele Artificial (Prática)",
        "04 - Fundamentos do Realismo Colorido + Círculo Cromático Aplicado (Teórica)",
        "05 - Prática de Realismo Colorido em Pele Artificial (Prática)",
        "06 - Técnicas de Cobertura: Análise de Casos e Estratégias (Teórica)",
        "07 - Prática de Cobertura em Pele Artificial (Prática)",
        "08 - Técnicas de Fechamentos (Sleeves, Costas, Coxa) (Teórica)",
        "09 - Prática de Fechamento: Composição em Pele Artificial (Prática)",
        "10 - Freehand: Técnicas e Exercícios Criativos (Teórico/Prático)",
        "11 - Prática de Freehand em Pele Artificial (Prática)",
        "12 - Impressão Avançada: Layout, Formatos, Ajustes de Arte (Teórica)",
        "13 - Black Work e Sombreamento com Peso Visual (Teórica)",
        "14 - Prática de Black Work + Criatividade Gráfica (Prática)",
        "15 - Posicionamento Oriental: Elementos, Movimento, Fluxo (Teórico/Prático)",
        "16 - Prática de Composição Oriental em Pele Artificial (Prática)",
        "17 - Conceito Autoral: Construção de Estilo e Identidade (Teórica)",
        "18 - Prática: Flash Autoral com Feedback entre Alunos (Prática)",
        "19 - Biosegurança (Revisão Avançada + Procedimentos de Risco) (Teórica)",
        "20 - Workshop: Marketing e Empreendedorismo para Tatuadores (Workshop)",
        "21 - Workshop: Regulamentação e Documentação para Estúdios (Workshop)",
        "22 - Técnica de Atendimento + Desafio entre os alunos (Prática/Desafio)",
        "23 - Desenvolvimento de Projeto Final em Pele Artificial (Prática)",
        "24 - Planejamento e Simulação de Tatuagem em Pele Humana (Teórico/Prático)",
        "25 - Tatuagem Final em Pele Humana + Avaliação + Certificação (Prática)"
      ]
    },
    // Demais cursos sem alterações
    {
      id: 3,
      name: "Tatuagem Colorida",
      description: "Especialização em técnicas de cor, desde aquarela até new school vibrante.",
      duration: "45 horas",
      classes: "10 aulas",
      level: "Intermediário",
      price: "R$ 1.800",
      image: "https://i.pinimg.com/236x/c3/d3/73/c3d3738cf866eff1a582d92438670bec.jpg",
      topics: ["Teoria das cores", "Técnicas de aquarela", "New school", "Degradês e transições"]
    },
    {
      id: 4,
      name: "Fine Line e Minimalismo",
      description: "Aprenda a criar tatuagens delicadas e precisas com traços finos e design minimalista.",
      duration: "30 horas",
      classes: "15 aulas",
      level: "Intermediário",
      price: "R$ 1.500",
      image: "https://i.pinimg.com/236x/83/a1/d8/83a1d8310b90e83e051be68434afb82d.jpg",
      topics: ["Técnicas de traço fino", "Design minimalista", "Micro tatuagens", "Precisão em detalhes"]
    },
    {
      id: 5,
      name: "Geometric e Mandala",
      description: "Domine a arte das formas geométricas perfeitas e mandalas complexas.",
      duration: "35 horas",
      classes: "12 aulas",
      level: "Intermediário",
      price: "R$ 1.600",
      image: "https://i.pinimg.com/736x/69/7e/34/697e346558fa89d489c2dac697e0b4e8.jpg",
      topics: ["Geometria aplicada", "Mandalas tradicionais", "Simetria perfeita", "Patterns complexos"]
    },
    {
      id: 6,
      name: "Business da Tatuagem",
      description: "Aprenda a empreender no ramo da tatuagem, desde marketing até gestão de estúdio.",
      duration: "20 horas",
      classes: "20 aulas",
      level: "Todos os níveis",
      price: "R$ 800",
      image: "https://i.pinimg.com/236x/e9/f8/62/e9f8624f0e03b4298fbdc19fde36974d.jpg",
      topics: ["Marketing digital", "Gestão financeira", "Atendimento ao cliente", "Precificação"]
    }
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
      duration: 0.6
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Iniciante':
        return 'bg-green-100 text-green-800';
      case 'Intermediário':
        return 'bg-yellow-100 text-yellow-800';
      case 'Avançado':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

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

        {/* Bloco 2: O que você encontra */}
        <div className="bg-primary/5 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-primary text-center mb-6">No nosso curso, você encontra:</h2>
            <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4 max-w-4xl mx-auto text-gray-700">
                <li className="flex items-start"><Star className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />Professores renomados de diferentes estilos e especialidades</li>
                <li className="flex items-start"><BookOpen className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />Aulas práticas com acompanhamento próximo</li>
                <li className="flex items-start"><Users className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />Turmas reduzidas e aprendizado personalizado</li>
                <li className="flex items-start"><Award className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />Projetos reais, vivência de estúdio e suporte pós-curso</li>
                <li className="flex items-start"><Award className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />Certificado reconhecido no mercado</li>
            </ul>
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
                    <Badge className={`${getLevelColor(course.level)} px-3 py-1 text-sm`}>
                      {course.level}
                    </Badge>
                    <span className="text-2xl font-bold text-primary">{course.price}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{course.name}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{course.description}</p>
                  
                  <div className="text-sm text-gray-500 space-y-2 mb-4">
                    <div className="flex items-center"><Clock size={16} className="mr-2" /> {course.duration}</div>
                    <div className="flex items-center"><BookOpen size={16} className="mr-2" /> {course.classes}</div>
                  </div>

                  <Button onClick={() => setSelectedCourse(course)} className="w-full mt-auto bg-primary hover:bg-primary/90 text-white">Ver Detalhes</Button>
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

        {/* Modal de Detalhes do Curso */}
        {selectedCourse && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center p-4 z-50 transition-opacity duration-300">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative animate-in fade-in-90 zoom-in-95">
              <button onClick={() => setSelectedCourse(null)} className="absolute top-3 right-3 text-gray-400 hover:text-gray-800 bg-white/50 rounded-full p-1 z-10">
                <X size={24} />
              </button>
              <img src={selectedCourse.image} alt={selectedCourse.name} className="w-full h-60 object-cover rounded-t-lg" />
              <div className="p-6 md:p-8">
                <h2 className="text-3xl font-bold text-primary mb-2">{selectedCourse.name}</h2>
                <Badge className={`${getLevelColor(selectedCourse.level)} mb-4`}>{selectedCourse.level}</Badge>
                <p className="text-gray-600 mb-6">{selectedCourse.description}</p>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6 text-sm">
                    <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg"><Clock size={20} className="text-primary flex-shrink-0" /><div><p className="font-semibold">Duração</p><p>{selectedCourse.duration}</p></div></div>
                    <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg"><BookOpen size={20} className="text-primary flex-shrink-0" /><div><p className="font-semibold">Aulas</p><p>{selectedCourse.classes}</p></div></div>
                    <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg"><p className="text-lg font-bold text-primary">{selectedCourse.price}</p></div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-xl text-gray-800 mb-4">Grade curricular do curso:</h4>
                  <ul className="text-gray-600 space-y-2">
                    {selectedCourse.topics.map((topic, index) => (
                      <li key={index} className="flex items-start gap-3 p-2 bg-white hover:bg-gray-50 rounded">
                        <div className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button asChild className="w-full bg-primary hover:bg-primary-dark text-white text-lg py-3 mt-4">
                  <Link to="/contato">Inscreva-se Agora</Link>
                </Button>
              </div>
            </div>
          </div>
        )}

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