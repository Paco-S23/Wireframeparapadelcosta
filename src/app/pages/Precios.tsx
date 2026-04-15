import { Check, Clock, Sun, Moon, Calendar } from "lucide-react";
import { Link } from "react-router";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

export function Precios() {
  const pricingPlans = [
    {
      name: "Horario Matutino",
      icon: Sun,
      time: "Lunes a Viernes 8:00 - 16:00",
      price: 400,
      period: "hora",
      features: [
        "Acceso a todas las canchas cubiertas",
        "Acceso a canchas descubiertas",
        "Vestuarios y duchas",
        "Zona de calentamiento",
        "WiFi gratuito",
      ],
      highlighted: false,
    },
    {
      name: "Horario Vespertino",
      icon: Moon,
      time: "Lunes a Viernes 16:00 - 23:00",
      price: 500,
      period: "hora",
      features: [
        "Todo lo de Horario Matutino",
        "Horario de mayor demanda",
        "Iluminación profesional",
        "Clima controlado",
        "Soporte prioritario",
      ],
      highlighted: true,
      badge: "Más popular",
    },
    {
      name: "Fin de Semana",
      icon: Calendar,
      time: "Sábados y Domingos (todo el día)",
      price: 600,
      period: "hora",
      features: [
        "Todo lo de Horario Vespertino",
        "Acceso en fin de semana",
        "Ambiente de competición",
        "Eventos especiales",
        "Descuentos en servicios",
      ],
      highlighted: false,
    },
  ];

  const additionalServices = [
    { name: "Alquiler de palas profesionales", price: 100 },
    { name: "Pelotas (pack de 3)", price: 160 },
    { name: "Clase particular (1 hora)", price: 600 },
    { name: "Clase grupal (1 hora)", price: 300 },
    { name: "Toalla y taquilla", price: 60 },
  ];

  const memberships = [
    {
      name: "Bono 5 horas",
      price: 1900,
      savings: "$100",
      validity: "30 días",
      features: [
        "5 horas de juego",
        "Válido en horario matutino",
        "No caduca si se usa regularmente",
      ],
    },
    {
      name: "Bono 10 horas",
      price: 3600,
      savings: "$400",
      validity: "60 días",
      features: [
        "10 horas de juego",
        "Válido en horario matutino y vespertino",
        "Transferible a amigos",
      ],
      popular: true,
    },
    {
      name: "Mensual Ilimitado",
      price: 5000,
      savings: "Hasta 50%",
      validity: "30 días",
      features: [
        "Juego ilimitado",
        "Todos los horarios",
        "Acceso prioritario",
        "10% descuento en servicios",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Precios Transparentes
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sin costos ocultos. Elige el horario que mejor se adapte a ti.
          </p>
        </div>

        {/* Precios por Horario */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl text-gray-900 text-center mb-8">
            Tarifas por Horario
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <Card
                  key={index}
                  className={`p-8 relative ${
                    plan.highlighted
                      ? "border-2 border-green-600 shadow-lg"
                      : ""
                  }`}
                >
                  {plan.badge && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-600">
                      {plan.badge}
                    </Badge>
                  )}
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{plan.time}</p>
                    <div className="flex items-end justify-center gap-1">
                      <span className="text-5xl text-green-600">${plan.price}</span>
                      <span className="text-xl text-gray-600 mb-2">/{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/reservas">
                    <Button
                      className={`w-full ${
                        plan.highlighted
                          ? "bg-green-600 hover:bg-green-700"
                          : ""
                      }`}
                      variant={plan.highlighted ? "default" : "outline"}
                    >
                      Reservar Ahora
                    </Button>
                  </Link>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Bonos y Membresías */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl text-gray-900 mb-4">
              Bonos y Membresías
            </h2>
            <p className="text-lg text-gray-600">
              Ahorra más jugando regularmente
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {memberships.map((membership, index) => (
              <Card
                key={index}
                className={`p-6 ${
                  membership.popular ? "border-2 border-green-600" : ""
                }`}
              >
                {membership.popular && (
                  <Badge className="mb-4 bg-green-600">Más vendido</Badge>
                )}
                <h3 className="text-xl text-gray-900 mb-2">{membership.name}</h3>
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-4xl text-green-600">${membership.price}</span>
                  <span className="text-lg text-gray-600 mb-1">MXN</span>
                </div>
                <p className="text-sm text-green-600 mb-2">
                  Ahorras {membership.savings}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  Validez: {membership.validity}
                </p>
                <ul className="space-y-2 mb-6">
                  {membership.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={
                    membership.popular ? "bg-green-600 hover:bg-green-700" : ""
                  }
                  variant={membership.popular ? "default" : "outline"}
                  className="w-full"
                >
                  Comprar Bono
                </Button>
              </Card>
            ))}
          </div>
        </section>

        {/* Servicios Adicionales */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl text-gray-900 mb-4">
              Servicios Adicionales
            </h2>
            <p className="text-lg text-gray-600">
              Complementa tu experiencia
            </p>
          </div>
          <Card className="max-w-2xl mx-auto p-6">
            <div className="space-y-4">
              {additionalServices.map((service, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-3 border-b last:border-b-0"
                >
                  <span className="text-gray-700">{service.name}</span>
                  <span className="text-lg text-green-600 font-semibold">
                    ${service.price}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Info adicional */}
        <section>
          <Card className="p-8 bg-gradient-to-r from-green-50 to-blue-50">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl text-gray-900 mb-4">
                ¿Tienes dudas sobre los precios?
              </h2>
              <p className="text-gray-700 mb-6">
                Nuestro equipo está disponible para ayudarte a elegir la mejor opción
                según tus necesidades de juego.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-green-600 hover:bg-green-700">
                  Contactar por WhatsApp
                </Button>
                <Link to="/reservas">
                  <Button variant="outline">Probar una Reserva</Button>
                </Link>
              </div>
            </div>
          </Card>
        </section>

        {/* Política de cancelación */}
        <section className="mt-12">
          <Card className="p-6 max-w-3xl mx-auto">
            <h3 className="text-lg text-gray-900 mb-3">
              Política de Cancelación
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                Cancelación gratuita hasta 24 horas antes
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                Modificación de reserva sin cargo adicional
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                Bonos no caducan si se usan al menos una vez al mes
              </li>
            </ul>
          </Card>
        </section>
      </div>
    </div>
  );
}