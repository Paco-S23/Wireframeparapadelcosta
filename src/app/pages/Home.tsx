import { ArrowRight, Clock, CreditCard, Calendar, Star, CheckCircle2 } from "lucide-react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const benefits = [
    {
      icon: Clock,
      title: "Disponibilidad 24/7",
      description: "Reserva tu cancha en cualquier momento, desde cualquier lugar",
    },
    {
      icon: CreditCard,
      title: "Sin Comisiones Extra",
      description: "Pagas solo por tu cancha, sin costos adicionales",
    },
    {
      icon: Calendar,
      title: "Tiempo Real",
      description: "Ve la disponibilidad actualizada al instante",
    },
  ];

  const testimonials = [
    {
      name: "Carlos Martínez",
      text: "La mejor experiencia de reserva que he tenido. Rápido, fácil y sin complicaciones.",
      rating: 5,
    },
    {
      name: "Ana García",
      text: "Las canchas están en perfecto estado y el sistema de reservas es súper intuitivo.",
      rating: 5,
    },
    {
      name: "Miguel Torres",
      text: "Llevo meses jugando aquí y no cambiaría este club por nada. Excelente ambiente.",
      rating: 5,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1759693449990-09064d363638?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWRlbCUyMHRlbm5pcyUyMGNvdXJ0JTIwbW9kZXJuJTIwY29hc3RhbHxlbnwxfHx8fDE3NzYyNzE1NDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Canchas de pádel Padel Costa"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-white mb-6">
            Reserva tu cancha en segundos
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Sistema de reservas rápido y sin complicaciones. Tu cancha de pádel te espera.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/reservas">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-6 gap-2">
                Reservar Ahora
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/el-club">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 text-lg px-8 py-6"
              >
                Conocer el Club
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
              ¿Por qué elegir Padel Costa?
            </h2>
            <p className="text-lg text-gray-600">
              La forma más fácil y rápida de reservar tu cancha de pádel
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Preview del Sistema de Reservas */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
                Reserva en 3 simples pasos
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Nuestro sistema intuitivo hace que reservar sea pan comido
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 text-white">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg text-gray-900 mb-1">Elige fecha y hora</h3>
                    <p className="text-gray-600">
                      Selecciona el día y horario que mejor te convenga
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 text-white">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg text-gray-900 mb-1">Selecciona tu cancha</h3>
                    <p className="text-gray-600">
                      Ve la disponibilidad en tiempo real de nuestras canchas
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 text-white">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg text-gray-900 mb-1">Confirma y listo</h3>
                    <p className="text-gray-600">
                      Ingresa tus datos y recibe confirmación al instante
                    </p>
                  </div>
                </div>
              </div>

              <Link to="/reservas" className="inline-block mt-8">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Probar ahora
                </Button>
              </Link>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
              <Card className="p-6">
                <h3 className="text-xl text-gray-900 mb-4">Vista Rápida</h3>
                
                {/* Mini Calendar */}
                <div className="mb-6">
                  <label className="text-sm text-gray-600 mb-2 block">Selecciona fecha</label>
                  <div className="grid grid-cols-7 gap-2">
                    {["L", "M", "X", "J", "V", "S", "D"].map((day, i) => (
                      <div key={i} className="text-center text-xs text-gray-500 py-2">
                        {day}
                      </div>
                    ))}
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((day) => (
                      <button
                        key={day}
                        className={`p-2 rounded-lg text-sm ${
                          day === 15
                            ? "bg-green-600 text-white"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Slots */}
                <div>
                  <label className="text-sm text-gray-600 mb-2 block">Horarios disponibles</label>
                  <div className="grid grid-cols-3 gap-2">
                    {["09:00", "10:00", "11:00", "12:00", "14:00", "15:00"].map((time) => (
                      <button
                        key={time}
                        className="p-3 rounded-lg border border-gray-200 hover:border-green-600 hover:bg-green-50 text-sm"
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <Button className="w-full mt-6 bg-green-600 hover:bg-green-700">
                  Ver todas las canchas
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
              Lo que dicen nuestros jugadores
            </h2>
            <p className="text-lg text-gray-600">
              Miles de jugadores ya confían en nosotros
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                <p className="text-gray-900">{testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-4">
            ¿Listo para jugar?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Únete a nuestra comunidad y disfruta de las mejores canchas de pádel
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/reservas">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 gap-2">
                Reservar Cancha
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/precios">
              <Button
                size="lg"
                variant="outline"
                className="border-white bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                Ver Precios
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
