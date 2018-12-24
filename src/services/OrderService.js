import RestUtilities from "./RestUtilities";

export default class OrderService {
  async saveOrder(order) {
    try {
      const response = await RestUtilities.post(
        "https://lightsandpartsapi.azurewebsites.net/api/orders", 
        order
      );
      return response.content;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
}
