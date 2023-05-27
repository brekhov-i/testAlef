import Vuex, { StoreOptions } from "vuex";
import { IStore } from "@/app/types/store";
import { people } from "@/app/store/child";

const store: StoreOptions<IStore> = {
    state: {},
    modules: {
        people
    }
}

export default new Vuex.Store<IStore>(store)