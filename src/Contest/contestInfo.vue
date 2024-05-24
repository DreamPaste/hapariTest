<template>
  <div class="container" style="background: #f8f8f8; display: flex; justify-content: center; margin: 100px 0;">
    <div class="backgroundCerti flex column items-center justify-center" style="background: #ffffff; padding: 2%; height: 100%; width: 1200px;">

      <!-- 공모전 이름, 날짜 묶음 -->
      <div class="col-1 row items-center justify-center" style="width: 100%; height: 130px; font-family: 'Black Han Sans', sans-serif; border-bottom: 1px solid rgba(83, 68, 152, 0.53);">
        <!-- 공모전 이름 -->
        <div class="col-6 flex row items-center justify-start" style="font-size: 2.5rem; width: 100%; color: #413090;">
          공모전 이름 {{contestName}}
        </div>

        <!-- 공모전 날짜 -->
        <div class="col-6 flex row items-center justify-start" style="font-family: 'Gmarket Sans', sans-serif; font-weight: bold; font-size: 1.1rem;width:100%; height:50px;color: white;">
          <q-chip class="card1 flex items-center justify-center bg-blue-1 text-blue-7" style="padding:6px 20px; margin-right: 2%;">
            접수중
          </q-chip>
          <q-chip class="card2 my-card flex items-center justify-center bg-red-1 text-red-4" style="padding:6px 20px;">
            D - 9
          </q-chip>
        </div>
      </div>

      <!-- 공모전 포스터, 표 묶음 -->
      <div class="col-4 flex row items-center justify-between" style="width: 100%; height: 550px;">
        <!-- 공모전 포스터 -->
        <div class="col-6 flex row items-center justify-center" style="width: 38%; height: 85%; border: 1px solid rgba(83, 68, 152, 0.53);">
          image
        </div>
        <!-- 공모전 표, 버튼들 묶음 -->
        <div class="col-6 flex column items-center justify-between" style="width: 45%; height: 85%;">
          <!-- 공모전 표-->
          <div class="contestTable col-9 flex row items-start justify-end" style="width: 100%;">
            <div class="col-9 flex row items-end justify-end" style="width: 100%;">
              <InfoTable />
            </div>
          </div>
          <!-- 공모전 버튼 묶음-->
          <div class="col-3 flex row items-center justify-end" style="width: 100%; height: 12%;">
            <q-btn class="contestBtn no-shadow" icon="navigation" label="접수하기" flat
                   style="width: 33%;
                   border-radius: 10px;
                   font-family: 'Gmarket Sans', sans-serif;
                   font-weight: bold; font-size: 1.1rem; margin-right :8%" />

            <q-btn-dropdown class="contestBtn" icon="share" label="공유하기" flat @click="onMainClick"
                            style="width: 36%;
                            border-radius: 10px;
                            margin-right :8%;
                            font-family: 'Gmarket Sans', sans-serif; font-weight: bold; font-size: 1.1rem">
              <!-- 공유 드롭다운-->
              <q-list>
                <q-item clickable v-close-popup @click="copyURL">
                  <q-item-section>
                    <q-item-label>URL 복사</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>쪽지로 공유</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>

            <!-- 하트 -->
            <button @click="toggleLike"
                    style="background: rgba(250,225,233,0.64); border-radius: 50px; width: 60px; height: 100%; border : 0">
              <span class="material-symbols-outlined" id="heart">favorite</span>
            </button>
          </div>
        </div>
      </div>

      <!-- 추천 공모전 묶음-->
      <div class="col-2 row items-center justify-center" style="width: 100%; color: #413090; margin-bottom: 5%">
        <div class="col-2 row items-center justify-start" style="width: 100%; font-family: 'Black Han Sans', sans-serif; font-size: 2rem; margin-bottom: 1%">
          <span class="material-symbols-outlined" id="check">
check
</span> &nbsp;이런 공모전도 확인해보세요
        </div>
        <!-- 추천 공모전 이미지-->
        <div class="col-10 row items-center justify-center" style="  background: rgba(241,247,255,0.95); border-radius: 10px; width: 100%; height: 250px;">
          <div class="col-10 row items-center justify-evenly" style="width: 100%;">
            <div class="recommendImg col-4 column items-center justify-center">image</div>
            <div class="recommendImg col-4 column items-center justify-center">image</div>
            <div class="recommendImg col-4 column items-center justify-center">image</div>
          </div>
          <!-- 추천 공모전 이름-->
          <div class="col-2 row items-center justify-evenly" style="width: 100%;">
            <div class="col-4 column items-center justify-center" style="width: 30%;">
              <q-btn class="contestNameBtn" label="공모전 이름" flat />
            </div>
            <div class="col-4 column items-center justify-center" style="width: 30%;">
              <q-btn class="contestNameBtn" label="공모전 이름" flat />
            </div>
            <div class="col-4 column items-center justify-center" style="width: 30%;">
              <q-btn class="contestNameBtn" label="공모전 이름" flat />
            </div>
          </div>
        </div>
      </div>

      <!-- 공모전 상세 탭-->
      <div class="col-5 row items-center justify-center" style="width: 100%;">
        <ContestTab />
      </div>
    </div>
  </div>
</template>

<script>
import ContestTab from 'src/Contest/ContestTab.vue';
import InfoTable from 'src/Contest/InfoTable.vue';

export default {
  components: {
    InfoTable,
    ContestTab
  },

  data() {
    return {
      isLiked: false // 좋아요 상태
    };
  },
  methods: {
    toggleLike() {
      this.isLiked = !this.isLiked; // 좋아요 상태 토글
      console.log("heartclick");
    }
  }
};
</script>

<style scoped lang="scss">
#heart.material-symbols-outlined {
  color: rgba(214, 94, 107, 0.79);
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}

#heart.filled {
  color: rgba(214, 94, 107, 0.79);
  font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
#heart.material-symbols-outlined {
  font-size:30px;
}

#check.material-symbols-outlined {
  font-size:45px;
  font-weight: bold;
}

.contestNameBtn{
  width: 90%;
  background: rgba(255, 255, 255, 0.75);
  border-radius: 10px ;
  color: #4360c4;
  font-family: 'Gmarket Sans', sans-serif; font-weight: bold; font-size: 0.9rem;
}

.contestBtn{
  color: #4360c4;
  height: 100%;
  background: rgb(238, 245, 255);

}

.recommendImg{
  border: 1px solid rgba(83, 68, 152, 0.53);
  width: 30%;
  height: 150px;
  background: rgb(255, 255, 255);
}
</style>
