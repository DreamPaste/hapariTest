<template>
  <q-card class="flex align-center justify-center bg-white text-indigo-9" flat bordered style="width:90%; margin:2%; padding:2%; height:620px; border-radius: 10px">
    <q-card-section>
      <div class="flex align-center justify-center text-bold" style="font-size: 1.7rem; margin: 15% 5%">
        <img src="src/assets/Image/순위.png" alt="순위" style="width:15%; height: 15%; margin-right:5%" />
        실시간 검색어
      </div>
      <div class="flex align-center justify-center" style="font-size: 1.2rem; width:90%; margin-left:5%">
        <div v-for="(certification, index) in certifications" :key="index" class="RealTime-CertName">
          <span class="text-bold" @click="goToCertiInfo(certification.name)">
            {{ certification.name }}
          </span>
          <q-chip :class="certification.class">{{ certification.rank }}</q-chip>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const goToCertiInfo = (certificationName) => {
  router.push({name: 'CertiInfo', params: {certificationName}})
  console.log("전달 확인 :", certificationName);
};

const certifications = ref([
  {label: '정보처리기사', rank: '▲ 3', class: 'bg-red-1 text-red-9', name: '정보처리기사'},
  {label: '네트워크', rank: '▼ 2', class: 'bg-blue-2 text-blue-9', name: '네트워크'},
  {label: '리눅스', rank: '▲ 1', class: 'bg-red-1 text-red-9', name: '리눅스'},
  // 추가 자격증 정보를 여기에 추가할 수 있습니다.
]);
</script>

<style scoped lang="scss">
.RealTime-CertName {
  margin: 3%;
  cursor: pointer;
}
</style>
