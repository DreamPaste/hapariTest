<template>
  <div>

    <TestCode2 v-if="currentComponent === 'TestCode2'" :certName="certName" />

    <div v-else>
      <input v-model="certName" placeholder="자격증 이름">
      <button @click="openChildPage">저장</button>
    </div>
  </div>
</template>

<script>
import TestCode2 from 'src/layouts/TestCode2.vue';

export default {
  data() {
    return {
      certName: '',
      currentComponent: null
    };
  },
  components: {
    TestCode2
  },
  methods: {
    openChildPage() {

      this.currentComponent = 'TestCode2';
    }
  }
};
</script>
