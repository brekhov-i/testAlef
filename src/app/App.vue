<template>
  <Header />
  <div class="main-content">
    <router-view/>
  </div>
</template>

<script>
import './styles/style.scss';
import Header from "@/widgets/Header/Header";
export default {
  components: {Header}
}
</script>