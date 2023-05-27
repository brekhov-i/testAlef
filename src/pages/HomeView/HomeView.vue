<template>
  <div :class="[cls.preview]">
    <div class="container">
      <div :class="[cls.preview__wrapper]">
        <div :class="[cls.preview__personal]">
          <div :class="[cls.preview__title]">Персональные данные</div>
          <p :class="[cls.peopleInfo]">{{ getLine }}</p>
        </div>
        <div :class="[cls.preview__childrenBlock]">
          <div :class="[cls.preview__title, 'childrenBlock__title']">Дети</div>
          <Children v-for="(child, index) in peopleInfo.children" :key="index" :dataChild="child"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import cls from "./HomeView.module.scss"
import Children from "@/entities/Children/Children.vue";
import { computed, onMounted } from "vue";
import { IPeople } from "@/app/types/people";
import { useStore } from "vuex";

const store = useStore()

const peopleInfo = computed<IPeople>( () => store.getters[ 'people/people' ] );

const getLine = computed( () => {
  if ( peopleInfo.value ) {
    return `${ peopleInfo.value.name }, ${ peopleInfo.value.age } лет`
  }
  return "";
} )

onMounted( () => {
  console.log( localStorage.getItem( "user" ) )
} )
</script>
