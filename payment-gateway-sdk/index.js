import axios from "axios"
import { randomUUID } from "crypto"

export const doPayment = async (cardInfo, itemInfo) => {
  console.debug(cardInfo, itemInfo);

  try {
    await axios.post("https://payment.requestcatcher.com/pay", {
      card: cardInfo,
      item: itemInfo
    });
    
    return {
      id: randomUUID(),
      status: 'PAID'
    }
  } catch (err) {
    process.nextTick(() => axios.post("https://payment.requestcatcher.com/pay-rollback"));
    throw err;
  }
}