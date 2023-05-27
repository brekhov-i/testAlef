<template>
  <div :class="[cls.children, props.classNames]">
    <div :class="[cls.children__text]">{{ getLine }}</div>
  </div>
</template>

<script setup lang="ts">
import cls from './Children.module.scss'
import {IChild} from '@/app/types/people.ts';
import { computed } from "vue";
const props = defineProps({
  classNames: {type: String},
  dataChild: {type: IChild, required: true}
})

const getLine = computed(() => {
  console.log(props.dataChild)
  return `${props.dataChild.name}, ${props.dataChild.age} лет`

})
</script>