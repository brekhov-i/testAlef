import { GetterTree } from "vuex";
import { IPeopleStore } from "@/app/types/people";
import { IStore } from "@/app/types/store";

export const getters: GetterTree<IPeopleStore, IStore> = {
    people: state => state.people
}