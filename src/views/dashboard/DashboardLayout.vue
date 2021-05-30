<template>
  <div class="wrapper">
    <Sidebar />
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Nav from "@/components/partials/Nav/Nav.vue";
import Sidebar from "@/components/partials/Sidebar/Sidebar.vue";

export default defineComponent({
  components: {
    Nav,
    Sidebar,
  },
});
</script>
