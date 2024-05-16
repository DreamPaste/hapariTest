<template>
  <div>
    <TestCode2 v-if="currentComponent === 'TestCode2'" :certName="certName" :Name="Name" :target="target" :location="location" :price="price"/>
    <div v-else>
      <input v-model="certName" placeholder="자격증 이름">
      <input v-model="Name" placeholder="이름">
      <input v-model="target" placeholder="대상">
      <input v-model="location" placeholder="지역">
      <input v-model="price" placeholder="응시료">
      <button @click="openChildPage">저장</button>
    </div>
  </div>
</template>

<script>
import TestCode2 from 'layouts/Certi-Info.vue';

export default {
  data() {
    return {
      certName: '',
      Name: '',
      target:'',
      location:'',
      price:'',
      currentComponent: null
    };
  },
  components: {
    TestCode2
  },
  methods: {
    openChildPage() {
      this.$router.push({ name: 'CertiInfo' });
    }
  }
};
</script>
