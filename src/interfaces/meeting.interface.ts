import IGuest from "./guest.interface";

export default interface IMeeting {
  id: string;
  lengthInMinutes: number;
  timeZone: string;
  agenda?: string;
  endsAt: string;
  createdAt: string;
  guests: IGuest[];
}
