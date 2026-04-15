import { MapPin, Clock, Trophy, Users, Dumbbell, GraduationCap, Sparkles } from "lucide-react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";

export function ElClub() {
  const facilities = [
    {
      icon: Trophy,
      title: "Canchas Premium",
      description: "4 canchas profesionales con superficie de última generación",
    },
    {
      icon: Dumbbell,
      title: "Zona de Entrenamiento",
      description: "Área equipada para calentamiento y preparación física",
    },
    {
      icon: GraduationCap,
      title: "Clases Profesionales",
      description: "Instructores certificados para todos los niveles",
    },
    {
      icon: Users,
      title: "Vestuarios Modernos",
      description: "Duchas, taquillas y todas las comodidades",
    },
    {
      icon: Sparkles,
      title: "Cafetería",
      description: "Disfruta de bebidas y snacks después de jugar",
    },
    {
      icon: Clock,
      title: "Abierto 7 días",
      description: "De 8:00 a 23:00 todos los días del año",
    },
  ];

  const services = [
    {
      title: "Renta de Equipo",
      description: "Palas profesionales y pelotas de la mejor calidad disponibles para alquilar.",
      price: "Desde $100",
    },
    {
      title: "Clases Particulares",
      description: "Mejora tu técnica con entrenadores profesionales en sesiones personalizadas.",
      price: "Desde $600/hora",
    },
    {
      title: "Torneos Mensuales",
      description: "Participa en nuestros torneos organizados y compite con otros jugadores.",
      price: "Gratuito",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1771344159140-c8b947d4b609?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzcG9ydHMlMjBmYWNpbGl0eSUyMGludGVyaW9yfGVufDF8fHx8MTc3NjI3MTU0OHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Instalaciones Padel Costa"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            Bienvenido a Padel Costa
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            El club de pádel premium de la costa con las mejores instalaciones
          </p>
        </div>
      </section>

      {/* Sobre Nosotros */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
                Nuestra Historia
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Padel Costa nació en 2020 con la visión de crear el mejor club de pádel 
                  de la costa mediterránea. Con más de 6 años de experiencia, nos hemos 
                  consolidado como el lugar favorito de miles de jugadores.
                </p>
                <p>
                  Nuestras instalaciones de primera categoría combinan tecnología moderna 
                  con un ambiente acogedor, creando el espacio perfecto para disfrutar de 
                  este deporte apasionante.
                </p>
                <p>
                  Ya seas principiante o jugador experimentado, en Padel Costa encontrarás 
                  todo lo que necesitas para mejorar tu juego y pasar un gran momento.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1714840961998-8d6c02ace00b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWRlbCUyMHRlbm5pcyUyMHBsYXllciUyMGFjdGlvbnxlbnwxfHx8fDE3NzYyNzE1NDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Jugador de pádel"
                className="rounded-lg h-64 object-cover"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1772724317421-a04774bd90e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHNwb3J0cyUyMHRlYW0lMjBjZWxlYnJhdGluZ3xlbnwxfHx8fDE3NzYyNzE1NDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Equipo celebrando"
                className="rounded-lg h-64 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Instalaciones */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
              Nuestras Instalaciones
            </h2>
            <p className="text-lg text-gray-600">
              Todo lo que necesitas para una experiencia completa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg text-gray-900 mb-2">{facility.title}</h3>
                  <p className="text-gray-600">{facility.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
              Servicios Adicionales
            </h2>
            <p className="text-lg text-gray-600">
              Aprovecha al máximo tu visita con nuestros servicios
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-green-600 font-semibold">{service.price}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ubicación */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
                Encuéntranos
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-900">Boulevard Ávila Camacho</p>
                    <p className="text-gray-600">Av Costa de Oro 3615 Esquina, Costa de Oro</p>
                    <p className="text-gray-600">94299 Veracruz, México</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-900">Horario</p>
                    <p className="text-gray-600">Lunes a Domingo: 8:00 - 23:00</p>
                  </div>
                </div>
              </div>
              <Link to="/reservas" className="inline-block mt-6">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Reservar Ahora
                </Button>
              </Link>
            </div>
            <div>
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                <MapPin className="w-16 h-16 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}