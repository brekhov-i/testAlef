<template>
  <header :class="[cls.header]">
    <div class="container">
      <div :class="[cls.header__wrapper]">
        <img :class="[cls.header__logo]" :src="Logo" alt="">
        <nav :class="['nav', cls.header__nav]">
          <router-link
              v-for="route in routes"
              :to="route.path"
              :class="['nav__link', cls.nav__link]"
          >
            {{ route.meta?.menuItemTitle }}
          </router-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import cls from './Header.module.scss';
import Logo from '@/shared/assets/logo.svg';
import {routes} from "@/app/router";
</script>