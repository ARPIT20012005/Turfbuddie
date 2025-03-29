export interface Turf {
  id: string | null | undefined;
  address: string;
  imageUrl: string;
  info: boolean;
  location: { latitude: number; longitude: number };
  name: string;
  price: number;
  rating: number;
  timeSlots: Array<{
    daySlot: string;
    monthSlot: string;
    timeSlot: string;
  }>;
}
