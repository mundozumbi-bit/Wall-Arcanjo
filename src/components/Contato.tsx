import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Clock, Mail, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "@/components/Footer";

const Contato = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const artists = [
    "@walarcanjo",
    "@telmograbhertattoo",
    "@sergiolima.arte",
    "@cunha.tattoo", 
    "@michelemouralash",
    "@giocardoso",
    "@kathynip_arts",
    "@magaltattoo",
    "@patyfadatattoo",
    "@greg0liveira.piercer",
    "@magallipiercinglaser",
    "@uendeloliveiratattoo",
    "@renata_cunha_",
    "@sandrowayne",
    "@uakactustattoo",
  ];

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    const msg = `Olá! Meu nome é ${formData.name}. Meu e-mail: ${formData.email}. Mensagem: ${formData.message}`;
    const url = `https://wa.me/5511952181320?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 3000);
    }, 500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="pt-32 bg-secondary/90 min-h-screen">
      <div className="container mx-auto px-4 mb-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Entre em Contato
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pronto para fazer sua próxima tatuagem ou se inscrever em nossos
            cursos? Entre em contato conosco e vamos transformar suas ideias em
            realidade.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Envie sua Mensagem
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-gray-700 mb-2 block">
                  Nome Completo
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="Seu nome completo"
                  disabled={sending}
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-gray-700 mb-2 block">
                  E-mail
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="seu@email.com"
                  disabled={sending}
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-gray-700 mb-2 block">
                  Mensagem
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  placeholder="Conte-nos sobre sua ideia de tatuagem, interesse em cursos ou qualquer dúvida..."
                  disabled={sending}
                ></Textarea>
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white py-3 text-lg flex items-center justify-center gap-2"
                disabled={sending}
              >
                {sending ? (
                  <span>Enviando...</span>
                ) : (
                  <span>Enviar Mensagem</span>
                )}
              </Button>
              {sent && (
                <div className="text-green-600 text-center font-semibold mt-2">
                  Mensagem enviada pelo WhatsApp!
                </div>
              )}
            </form>

            <div className="flex flex-col mt-10 text-center">
              <p className="text-gray-600">Ou siga-nos nas redes sociais:</p>
              <div className="grid grid-cols-2 gap-6 mt-10 justify-items-start md:ml-20 min-w-sm">
              {artists.map((instagram, index) => (
                <a
                  key={index}
                  href={`https://instagram.com/${instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-secondary hover:text-primary transition-colors text-sm"
                >
                  <Instagram size={28} strokeWidth={1.5} />
                  <span>{instagram}</span>
                </a>
              ))}
            </div>
            </div>
          </Card>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Info */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Informações de Contato
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-secondary mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800">Endereço</h3>
                    <p className="text-gray-600">
                      Rua Vergueiro 2999 - Vila Mariana
                      <br />
                      São Paulo - SP
                      <br />
                      CEP 04101-300
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="text-secondary mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800">Telefone</h3>
                    <p className="text-gray-600">(11) 95218-1320</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="text-secondary mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Horário de Funcionamento
                    </h3>
                    <p className="text-gray-600">
                      Segunda somente com hora marcada
                      <br />
                      Terça: a partir das 9h
                      <br />
                      Terça à Domingo: 24h
                      <br />
                      Domingo: até 20h
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Map Placeholder */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Nossa Localização
              </h2>
              <div className=" bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500 w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.479355438281!2d-46.6364730239137!3d-23.587135562541132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5bd822f15733%3A0x303ac581e1f05f0e!2sWALL%20ARCANJO%20TATTOO%20%26%20ACADEMY%20(24horas)!5e0!3m2!1spt-BR!2sbr!4v1751305510577!5m2!1spt-BR!2sbr"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-64 md:h-80 rounded-lg"
                  />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer with Instagram Links */}
      <Footer />
    </div>
  );
};

export default Contato;
