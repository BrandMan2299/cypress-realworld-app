import { dataMachine } from "./dataMachine";
import { httpClient } from "../utils/asyncUtils";
import { isEmpty, omit } from "lodash/fp";

export const analyticsMachine = dataMachine("analytics").withConfig({
    services: {
        fetchData: async (ctx, event: any) => {
            const payload = omit("type", event);
            const resp = await httpClient.get(`http://localhost:3001/analytics`, {
                params: !isEmpty(payload) ? payload : undefined,
            });
            console.log(resp);

            return resp.data;
        },
    },
});