import { dataMachine } from "./dataMachine";
import { httpClient } from "../utils/asyncUtils";
import { isEmpty, omit } from "lodash/fp";

export const analyticsTransactionsMachine = dataMachine("analyticsTransactions").withConfig({
  services: {
    fetchData: async (ctx, event: any) => {
      const payload = omit("type", event);
      const resp = await httpClient.get(`http://localhost:3001/transactions`, {
        params: !isEmpty(payload) ? payload : undefined,
      });
<<<<<<< HEAD
<<<<<<< HEAD
=======
      console.log("Resp Data")
      console.log(JSON.stringify(resp.data))
>>>>>>> 093b9d8... teamwork ;)
=======
      console.log("Resp Data")
      console.log(JSON.stringify(resp.data))
>>>>>>> Gilad
      return resp.data;
    },
  },
});
