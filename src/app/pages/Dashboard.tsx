import { Calendar, Clock, MapPin, Trash2, Edit, User, Mail, Phone } from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { upcomingReservations, pastReservations, type Reservation } from "../data/mockData";

export function Dashboard() {
  const getStatusBadge = (status: Reservation["status"]) => {
    switch (status) {
      case "confirmed":
        return <Badge className="bg-green-600">Confirmada</Badge>;
      case "completed":
        return <Badge variant="secondary">Completada</Badge>;
      case "cancelled":
        return <Badge variant="destructive">Cancelada</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl text-gray-900 mb-2">Mi Cuenta</h1>
          <p className="text-lg text-gray-600">
            Gestiona tus reservas y perfil
          </p>
        </div>

        <Tabs defaultValue="reservations" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="reservations">Mis Reservas</TabsTrigger>
            <TabsTrigger value="profile">Mi Perfil</TabsTrigger>
          </TabsList>

          {/* Reservations Tab */}
          <TabsContent value="reservations" className="space-y-6">
            {/* Upcoming Reservations */}
            <div>
              <h2 className="text-2xl text-gray-900 mb-4">Próximas Reservas</h2>
              {upcomingReservations.length === 0 ? (
                <Card className="p-8 text-center">
                  <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">No tienes reservas próximas</p>
                  <Button className="bg-green-600 hover:bg-green-700">
                    Hacer una Reserva
                  </Button>
                </Card>
              ) : (
                <div className="space-y-4">
                  {upcomingReservations.map((reservation) => (
                    <Card key={reservation.id} className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-lg text-gray-900">
                              {reservation.court}
                            </h3>
                            {getStatusBadge(reservation.status)}
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              {format(reservation.date, "PPP", { locale: es })}
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              {reservation.time}
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              {reservation.type}
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-gray-600">
                                ${reservation.price}
                              </span>
                            </div>
                          </div>
                          <p className="text-xs text-gray-500 mt-2">
                            Código: {reservation.id}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="gap-2">
                            <Edit className="w-4 h-4" />
                            Modificar
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="gap-2 text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                            Cancelar
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </div>

            {/* Past Reservations */}
            <div>
              <h2 className="text-2xl text-gray-900 mb-4">Historial</h2>
              <div className="space-y-4">
                {pastReservations.map((reservation) => (
                  <Card key={reservation.id} className="p-6 opacity-75 hover:opacity-100 transition-opacity">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg text-gray-900">
                            {reservation.court}
                          </h3>
                          {getStatusBadge(reservation.status)}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {format(reservation.date, "PPP", { locale: es })}
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {reservation.time}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {reservation.type}
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-gray-600">
                              ${reservation.price}
                            </span>
                          </div>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">
                          Código: {reservation.id}
                        </p>
                      </div>
                      {reservation.status === "completed" && (
                        <Button variant="outline" size="sm">
                          Reservar de nuevo
                        </Button>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <Card className="p-6 md:p-8">
              <h2 className="text-2xl text-gray-900 mb-6">Información Personal</h2>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                    <User className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl text-gray-900">Juan Pérez</h3>
                    <p className="text-gray-600">Miembro desde marzo 2026</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Nombre completo</Label>
                    <div className="flex gap-2 mt-1">
                      <Input id="name" defaultValue="Juan Pérez" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <div className="flex gap-2 mt-1">
                      <Input id="email" type="email" defaultValue="juan.perez@email.com" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Teléfono</Label>
                    <div className="flex gap-2 mt-1">
                      <Input id="phone" type="tel" defaultValue="+34 612 345 678" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="location">Ciudad</Label>
                    <div className="flex gap-2 mt-1">
                      <Input id="location" defaultValue="Veracruz" />
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <h3 className="text-lg text-gray-900 mb-4">Estadísticas</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <p className="text-2xl font-bold text-green-600">12</p>
                      <p className="text-sm text-gray-600">Reservas totales</p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <p className="text-2xl font-bold text-blue-600">24h</p>
                      <p className="text-sm text-gray-600">Horas jugadas</p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <p className="text-2xl font-bold text-purple-600">3</p>
                      <p className="text-sm text-gray-600">Este mes</p>
                    </div>
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <p className="text-2xl font-bold text-orange-600">Oro</p>
                      <p className="text-sm text-gray-600">Nivel</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-4">
                  <Button variant="outline">Cancelar</Button>
                  <Button className="bg-green-600 hover:bg-green-700">
                    Guardar Cambios
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}