<template>
  <div v-for="(treeData, index) in treeList" :key="index" class="col-6 column">
    <q-card style="padding: 5%; border-radius: 10px; margin-top: 2%">
      <div class="col-3 flex row align-center justify-between">
        <span class="text-indigo-7 text-bold" style="font-size: 1.5rem">{{ treeData.title }}</span>
        <q-btn flat class="text-accent bg-secondary" style="border-radius: 20px">더보기</q-btn>
      </div>
      <div class="col-9 row" style="height: 315px; margin-top: 5%">
        <div class="col-6 column" v-for="(nodeData, nodeIndex) in treeData.nodes" :key="nodeIndex">
          <q-tree
            :nodes="nodeData"
            node-key="label"
            style="font-size: 1rem;
                     margin-bottom: 5%"
          />
        </div>
      </div>
    </q-card>
  </div>
</template>

<script setup>
import {ref} from "vue";

const treeList = ref([
  {
    title: '국가 자격증',
    nodes: [
      [{ label: '대한민국 한자 교육 연구회', children: [{ label: 'Good food' }, { label: 'Good service' }] }],
      [{ label: '기술 자격증', children: [{ label: '기술 시험' }, { label: '기술 인증' }] }]
    ]
  },
  {
    title: '민간 자격증',
    nodes: [
      [{ label: 'IT 자격증', children: [{ label: '프로그래밍' }, { label: '데이터베이스' }] }],
      [{ label: '디자인 자격증', children: [{ label: '그래픽 디자인' }, { label: '웹 디자인' }] }]
    ]
  }
]);


</script>


<style scoped lang="scss">

</style>
