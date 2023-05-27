import { IPeopleStore } from "@/app/types/people";
import { Module } from "vuex";
import { IStore } from "@/app/types/store";
import { actions } from "@/app/store/child/actions";
import { mutations } from "@/app/store/child/mutations";
import { getters } from "@/app/store/child/getters";

export const state: IPeopleStore = {
    people: JSON.parse(<string> localStorage.getItem( 'user' )) || {}
}

const namespaced: boolean = true;

export const people: Module<IPeopleStore, IStore> = {
    namespaced,
    state,
    actions,
    mutations,
    getters
}