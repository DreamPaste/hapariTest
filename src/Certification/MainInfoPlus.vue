<template>
  <q-card  style="width: 100%; height: 100%; border-radius: 10px; padding: 2%;">
    <q-card-section class="col-2 row" style="display: flex; align-items: center; justify-content: space-between;">
      <div style="display: flex; align-items: center; width: 60%;">
        <span class="text-bold text-indigo-7" style="font-size: 1.8rem;">정보 PLUS</span>
        <img src="src/assets/Image/플러스.png" alt="플러스" style="width: 11%; height: 10%; margin-left: 10px;" />
      </div>
      <q-btn flat class="text-accent bg-secondary" style="border-radius:18px " @click="goInfoPlus">더보기</q-btn>
    </q-card-section>

    <!-- 정보플러스 1 -->
    <q-card-section class="col-5 row " style="width: 100%;font-size: 1.3rem; margin:2%">
      <q-card-section horizontal >
        <q-card-section class="col-4 column" style="height:180px;">
          <!-- 아이콘 사야함 !!! -->
          <img src = "src/assets/Image/자격증 썸네일1.png" alt="자격증 썸네일" style="width:100%; height: 100%"/>
        </q-card-section>

        <q-separator vertical />

        <q-card-section class="col-8 column flex align-center justify-center" style="height:180px; ">
          <q-card-section class="col-8 row " style="width: 100%; font-size:1rem">
            자격증 관련 정보!?뉴스!?
          </q-card-section>

          <q-card-section class="col-4 row flex align-end justify-center">
            <q-btn class="bg-red-1 text-red-9" flat  icon="favorite" label="좋아요" style="border-radius: 15px"/>
          </q-card-section>
        </q-card-section>
      </q-card-section>
    </q-card-section>

    <!-- 정보플러스 2 -->
    <q-card-section class="col-5 row" style="width: 100%;font-size: 1.3rem; margin:2%">
      <q-card-section horizontal >
        <q-card-section class="col-4 column" style="height:180px;">
          <!-- 아이콘 사야함 !!! -->
          <img src = "src/assets/Image/자격증 썸네일1.png" alt="자격증 썸네일" style="width:100%; height: 100%"/>
        </q-card-section>

        <q-separator vertical />

        <q-card-section class="col-8 column flex align-center justify-center" style="height:180px; ">
          <q-card-section class="col-8 row " style="width: 100%;font-size:1rem">
            자격증 관련 정보!?뉴스!?
          </q-card-section>

          <q-card-section class="col-4 row flex align-end justify-center">
            <q-btn class="bg-red-1 text-red-9" flat  icon="favorite" label="좋아요" style="border-radius: 15px"/>
          </q-card-section>
        </q-card-section>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goInfoPlus = () => {
  router.push({ name: 'InfoPlus' });
};


</script>



<style scoped lang="scss">

</style>
