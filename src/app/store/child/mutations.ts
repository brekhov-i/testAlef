import { MutationTree } from "vuex";
import { IPeopleStore } from "@/app/types/people";

export const mutations: MutationTree<IPeopleStore> = {

    savePeople(store, peopleData) {
        store.people = peopleData;
        localStorage.setItem('user', JSON.stringify(peopleData));
    }

}