
interface CardInfo {
  number: string;
  cvv: string;
  expirationDate: string;
  holderName: string;
}

interface ItemInfo {
  name: string;
  amount: number;
}

interface DoPaymentResponse {
  id: string;
  status: string;
}

export function doPayment(cardInfo: CardInfo, itemInfo: ItemInfo): DoPaymentResponse