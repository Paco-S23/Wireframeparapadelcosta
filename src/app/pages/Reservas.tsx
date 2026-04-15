import { useState } from "react";
import { Calendar as CalendarIcon, Clock, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Calendar } from "../components/ui/calendar";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../components/ui/dialog";
import { Badge } from "../components/ui/badge";
import { timeSlots, courts, type Court } from "../data/mockData";

type Step = 1 | 2 | 3;

export function Reservas() {
  const [step, setStep] = useState<Step>(1);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedCourt, setSelectedCourt] = useState<Court | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleCourtSelect = (court: Court) => {
    setSelectedCourt(court);
  };

  const handleNextStep = () => {
    if (step < 3) {
      setStep((step + 1) as Step);
    }
  };

  const handlePreviousStep = () => {
    if (step > 1) {
      setStep((step - 1) as Step);
    }
  };

  const handleConfirmReservation = () => {
    setShowConfirmation(true);
  };

  const canProceedFromStep1 = selectedDate && selectedTime;
  const canProceedFromStep2 = selectedCourt;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl text-gray-900 mb-2">Reservar Cancha</h1>
          <p className="text-lg text-gray-600">
            Completa tu reserva en solo 3 pasos
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            {[
              { num: 1, label: "Fecha y Hora" },
              { num: 2, label: "Cancha" },
              { num: 3, label: "Confirmación" },
            ].map((s, index) => (
              <div key={s.num} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      step >= s.num
                        ? "bg-green-600 text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {step > s.num ? (
                      <CheckCircle2 className="w-5 h-5" />
                    ) : (
                      s.num
                    )}
                  </div>
                  <span className="text-sm mt-2 text-gray-700 hidden sm:block">
                    {s.label}
                  </span>
                </div>
                {index < 2 && (
                  <div
                    className={`h-0.5 flex-1 mx-2 ${
                      step > s.num ? "bg-green-600" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="max-w-5xl mx-auto">
          {/* Step 1: Fecha y Hora */}
          {step === 1 && (
            <Card className="p-6 md:p-8">
              <h2 className="text-2xl text-gray-900 mb-6 flex items-center gap-2">
                <CalendarIcon className="w-6 h-6 text-green-600" />
                Selecciona Fecha y Hora
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Calendar */}
                <div>
                  <Label className="mb-2 block">Fecha</Label>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={handleDateSelect}
                    locale={es}
                    className="rounded-md border"
                    disabled={(date) => date < new Date()}
                  />
                  {selectedDate && (
                    <p className="mt-2 text-sm text-gray-600">
                      Seleccionado: {format(selectedDate, "PPPP", { locale: es })}
                    </p>
                  )}
                </div>

                {/* Time Slots */}
                <div>
                  <Label className="mb-2 block">Hora</Label>
                  <div className="grid grid-cols-3 gap-3">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot.time}
                        disabled={!slot.available}
                        onClick={() => handleTimeSelect(slot.time)}
                        className={`p-4 rounded-lg border-2 transition-all ${
                          selectedTime === slot.time
                            ? "border-green-600 bg-green-50"
                            : slot.available
                            ? "border-gray-200 hover:border-green-300 hover:bg-green-50"
                            : "border-gray-100 bg-gray-50 cursor-not-allowed opacity-50"
                        }`}
                      >
                        <Clock className="w-4 h-4 mx-auto mb-1" />
                        <div className="text-sm">{slot.time}</div>
                      </button>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <div className="flex gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-green-600 rounded" />
                        <span>Disponible</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-gray-300 rounded" />
                        <span>Ocupado</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-8">
                <Button
                  size="lg"
                  onClick={handleNextStep}
                  disabled={!canProceedFromStep1}
                  className="bg-green-600 hover:bg-green-700"
                >
                  Siguiente
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          )}

          {/* Step 2: Selección de Cancha */}
          {step === 2 && (
            <Card className="p-6 md:p-8">
              <h2 className="text-2xl text-gray-900 mb-6 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-green-600" />
                Selecciona tu Cancha
              </h2>

              <div className="mb-6 p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Fecha:</strong> {selectedDate && format(selectedDate, "PPPP", { locale: es })}
                  <br />
                  <strong>Hora:</strong> {selectedTime}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {courts.map((court) => (
                  <button
                    key={court.id}
                    disabled={!court.available}
                    onClick={() => handleCourtSelect(court)}
                    className={`p-6 rounded-lg border-2 text-left transition-all ${
                      selectedCourt?.id === court.id
                        ? "border-green-600 bg-green-50"
                        : court.available
                        ? "border-gray-200 hover:border-green-300 hover:bg-green-50"
                        : "border-gray-100 bg-gray-50 cursor-not-allowed opacity-60"
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg text-gray-900">{court.name}</h3>
                      <Badge variant={court.available ? "default" : "secondary"}>
                        {court.available ? "Disponible" : "Ocupada"}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">{court.type}</p>
                    {selectedCourt?.id === court.id && (
                      <div className="mt-3 flex items-center gap-2 text-green-600">
                        <CheckCircle2 className="w-4 h-4" />
                        <span className="text-sm">Seleccionada</span>
                      </div>
                    )}
                  </button>
                ))}
              </div>

              <div className="flex justify-between mt-8">
                <Button variant="outline" onClick={handlePreviousStep}>
                  Anterior
                </Button>
                <Button
                  size="lg"
                  onClick={handleNextStep}
                  disabled={!canProceedFromStep2}
                  className="bg-green-600 hover:bg-green-700"
                >
                  Siguiente
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          )}

          {/* Step 3: Confirmación */}
          {step === 3 && (
            <Card className="p-6 md:p-8">
              <h2 className="text-2xl text-gray-900 mb-6">Confirma tu Reserva</h2>

              {/* Resumen */}
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-lg text-gray-900 mb-4">Resumen de Reserva</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Fecha:</span>
                    <span className="text-gray-900">
                      {selectedDate && format(selectedDate, "PPP", { locale: es })}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Hora:</span>
                    <span className="text-gray-900">{selectedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Cancha:</span>
                    <span className="text-gray-900">{selectedCourt?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tipo:</span>
                    <span className="text-gray-900">{selectedCourt?.type}</span>
                  </div>
                  <div className="border-t pt-2 mt-2 flex justify-between">
                    <span className="text-gray-900">Total:</span>
                    <span className="text-2xl text-green-600">$500</span>
                  </div>
                </div>
              </div>

              {/* Formulario */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Nombre completo</Label>
                  <Input id="name" placeholder="Tu nombre" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="tu@email.com" />
                </div>
                <div>
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input id="phone" type="tel" placeholder="+34 600 000 000" />
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <Button variant="outline" onClick={handlePreviousStep}>
                  Anterior
                </Button>
                <Button
                  size="lg"
                  onClick={handleConfirmReservation}
                  className="bg-green-600 hover:bg-green-700"
                >
                  Confirmar Reserva
                </Button>
              </div>
            </Card>
          )}
        </div>
      </div>

      {/* Confirmation Dialog */}
      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-green-600">
              <CheckCircle2 className="w-6 h-6" />
              ¡Reserva Confirmada!
            </DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p className="text-gray-700 mb-4">
              Tu reserva ha sido confirmada exitosamente. Hemos enviado los detalles a tu correo electrónico.
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Código de reserva:</p>
              <p className="text-lg text-gray-900 font-mono">PC-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
            </div>
          </div>
          <Button
            onClick={() => {
              setShowConfirmation(false);
              setStep(1);
              setSelectedTime("");
              setSelectedCourt(null);
            }}
            className="w-full bg-green-600 hover:bg-green-700"
          >
            Cerrar
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}