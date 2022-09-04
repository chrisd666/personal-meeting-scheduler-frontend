import IAddGuest from "./addGuest.interface";

export default interface IGuest extends IAddGuest {
  id: string;
  meetingId: string;
}
