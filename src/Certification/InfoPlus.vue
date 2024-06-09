<template>
  <div class="container flex items-center justify-center" style="background: #f8f8f8; display: flex; justify-content: center; margin: 100px 0;">
    <div class="backgroundCertiMain flex column items-center justify-center" style="background: #ffffff; padding : 2%; height: 100%; width: 1200px;">
      <!-- 정보플러스 타이틀, 정렬버튼 -->
      <div class="col-2 row" style="display: flex; align-items: center; justify-content: space-evenly; margin-bottom: 2%; width:100%">
        <div style="display: flex; align-items: center; width:85%;">
          <span class="text-bold text-indigo-7" style="font-size:2.2rem;">정보 PLUS</span>
          <img src="src/assets/Image/플러스.png" alt="플러스" style="width: 4%; height:4%; margin-left: 10px;" />
        </div>
        <q-btn-dropdown flat class="text-accent bg-secondary" label="추천순" style="border-radius:18px" @click="onMainClick">
          <q-list>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section avatar>
                추천순
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section avatar>
                인기순
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
      <div class="col-2 flex row items-center justify-center" style="width:100%; margin-bottom:5%">
        <q-input color="indigo-2" rounded outlined v-model="text" style="width:70%; font-size: 18px">
          <template v-slot:prepend>
            <q-icon class="text-indigo-2" name="search" size="33px"/>
          </template>
        </q-input>
      </div>
      <div class="col-8 flex column items-center justify-center" style="width : 90%; ">

        <div v-for="n in 15" :key="n" style="width : 100%;">
          <q-card flat class="InfoCard row" style="width : 100%; border-radius: 10px; margin-bottom: 1%">
            <!-- 정보플러스 썸네일 -->
            <q-card-section class="col-2">
              <img src="src/assets/Image/자격증 썸네일1.png" alt="정보플러스 썸네일" style="width: 100%; height: 100%;" />
            </q-card-section>
            <q-card-section class="col-10 flex column items-start justify-evenly">
              <q-card-section class="text-bold" style="font-size: 1.3rem">
                정보플러스 제목
              </q-card-section>
              <q-card-section style="font-size: 1rem">
                정보플러스 내용
              </q-card-section>
              <q-card-section>
                <q-btn outline rounded class="text-accent" style="font-size: 0.7rem">#컴퓨터공학과</q-btn>
              </q-card-section>
            </q-card-section>
          </q-card>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const text = ref('');
    return {
      onMainClick() {
      },
      onItemClick() {
      },
      text
    };
  }
};
</script>

<style scoped lang="scss">
.InfoCard{
 border:2px solid #edf1ff;
}

.InfoCard:hover {
  background: #edf1ff;

}
</style>
