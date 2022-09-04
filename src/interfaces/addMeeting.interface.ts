import IAddGuest from "./addGuest.interface";

export default interface IAddMeeting {
  agenda?: string;
  guests: IAddGuest[];
}
