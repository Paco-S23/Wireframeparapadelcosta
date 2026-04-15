// Mock data for the application
// In a real application, this would come from Supabase or another backend

export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface Court {
  id: number;
  name: string;
  type: string;
  available: boolean;
}

export interface Reservation {
  id: string;
  date: Date;
  time: string;
  court: string;
  type: string;
  price: number;
  status: "confirmed" | "completed" | "cancelled";
}

export const timeSlots: TimeSlot[] = [
  { time: "08:00", available: true },
  { time: "09:00", available: true },
  { time: "10:00", available: false },
  { time: "11:00", available: true },
  { time: "12:00", available: true },
  { time: "13:00", available: false },
  { time: "14:00", available: true },
  { time: "15:00", available: true },
  { time: "16:00", available: true },
  { time: "17:00", available: false },
  { time: "18:00", available: true },
  { time: "19:00", available: true },
  { time: "20:00", available: true },
  { time: "21:00", available: true },
];

export const courts: Court[] = [
  { id: 1, name: "Cancha 1", type: "Cubierta Premium", available: true },
  { id: 2, name: "Cancha 2", type: "Cubierta Premium", available: true },
  { id: 3, name: "Cancha 3", type: "Descubierta", available: false },
  { id: 4, name: "Cancha 4", type: "Descubierta", available: true },
];

export const upcomingReservations: Reservation[] = [
  {
    id: "PC-ABC123",
    date: new Date(2026, 3, 18),
    time: "10:00",
    court: "Cancha 1",
    type: "Cubierta Premium",
    price: 500,
    status: "confirmed",
  },
  {
    id: "PC-DEF456",
    date: new Date(2026, 3, 22),
    time: "18:00",
    court: "Cancha 3",
    type: "Descubierta",
    price: 400,
    status: "confirmed",
  },
];

export const pastReservations: Reservation[] = [
  {
    id: "PC-GHI789",
    date: new Date(2026, 3, 10),
    time: "16:00",
    court: "Cancha 2",
    type: "Cubierta Premium",
    price: 500,
    status: "completed",
  },
  {
    id: "PC-JKL012",
    date: new Date(2026, 2, 28),
    time: "14:00",
    court: "Cancha 1",
    type: "Cubierta Premium",
    price: 500,
    status: "completed",
  },
  {
    id: "PC-MNO345",
    date: new Date(2026, 2, 15),
    time: "11:00",
    court: "Cancha 4",
    type: "Descubierta",
    price: 400,
    status: "cancelled",
  },
];