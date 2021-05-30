<template>
  <main class="example">
    <h1>Example View</h1>
    <ExampleComponent title="Example Component" />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ExampleComponent from '@/components/ExampleComponent/ExampleComponent.vue'

export default defineComponent({
  name: 'Example',
  components: {
    ExampleComponent
  }
})
</script>


