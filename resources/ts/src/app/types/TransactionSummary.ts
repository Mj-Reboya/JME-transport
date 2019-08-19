export interface ITransactionSummary {
  sender: IPersonInformation;
  payor: IPersonInformation;
  reciever: IPersonInformation;
  delivery: IDeliveryInformation;
}

export interface IPersonInformation {
  name: string;
  bookingDate: Date;
  company: string;
  streetAddress: string;
  suburd: string;
  state: string;
  postalCode: number;
  phone: number;
}
export interface IDeliveryInformation {
  parcelType: string;
  specialInstruction?: string;
  pickUpOption: string;
  pickUpDate: Date;
  pickUpReadyAt: string;
  closingTime: string;
  deliveryItems: IDeliveryItem[];
}

export interface IDeliveryItem {
  description: string;
  commodity: string;
  items: number;
  totalWeight: number;
  length: number;
  width: number;
  height: number;
}
