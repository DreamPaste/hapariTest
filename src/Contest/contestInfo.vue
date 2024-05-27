<template>
  <div class="container" style="background: #f8f8f8; display: flex; justify-content: center; margin: 100px 0;">
    <div class="backgroundCerti flex column items-center justify-center" style="background: #ffffff; padding: 2%; height: 100%; width: 1200px;">

      <!-- 공모전 이름, 날짜 묶음 -->
      <div class="col-1 row items-center justify-center" style="width: 100%; height: 130px; border-bottom: 1px solid rgba(83, 68, 152, 0.53);">
        <!-- 공모전 이름 -->
        <div class="col-6 flex row items-center justify-start text-bold" style=" font-size: 2.2rem; width: 100%; color: #413090;">
          공모전 이름 {{contestName}}
        </div>

        <!-- 공모전 날짜, 버튼 묶음 -->
        <div class="col-6 flex row items-center justify-start" style="width:100%; padding : 0 0 1% 0;">
          <div class="col-6 flex row items-center justify-start"  style="width: 50%;">
          <q-chip class="card1 flex items-center justify-center bg-blue-1 text-blue-7" style="padding:6px 20px; margin-right: 2%;  font-size:1rem; width:15%; height:10%">
            접수중
          </q-chip>
          <q-chip class="card2 my-card flex items-center justify-center bg-red-1 text-red-4" style="padding:6px 20px;  font-size:1rem; width:15%; height:10%">

            D - 9
          </q-chip>

        </div>
          <!-- 버튼 묶음-->
        <div class="col-6 flex row items-center justify-end" style="width: 50%; "  >
          <!-- 접수 버튼 -->
          <q-btn class="contestBtn no-shadow bg-blue-1 text-blue-9 text-bold" icon="navigation" label="접수하기" flat
                 style="width: 28%;
                   border-radius: 10px;
                   font-size : 1.1rem;
              margin-right :2%;"/>
          <!-- 공유버튼 -->
          <q-btn round class="contestBtn bg-green-1 text-green-4" icon="share" style="
                  font-size: 1.1rem;   margin-right :2%;"  flat @click="toggleSelectBox">

          </q-btn>
          <!-- 공유버튼 클릭시 -->
          <q-dialog v-model="showDialog">
            <q-card>
              <q-card-section>
                <div class="text-h6">공유 방법</div>
              </q-card-section>

              <q-card-section>
                <q-select v-model="selectedOption"
                          :options="options"
                          label="share">

                </q-select>
              </q-card-section>

              <q-card-actions align="right">
                <q-btn flat label="Cancel" color="primary" @click="toggleSelectBox" />
                <q-btn flat label="OK" color="primary" @click="confirmSelection" />
              </q-card-actions>
            </q-card>
          </q-dialog>

          <!-- 하트 -->
          <q-btn round class="contestBtn no-shadow items-center justify-center bg-red-1 text-red-4"  @click="toggleLike" flat
                 style="
                  font-size: 1.1rem;" >
            <span class="material-symbols-outlined" id="heart" :class="{ filled: isLiked }">favorite</span>
          </q-btn>
        </div>
        </div>
      </div>

      <!-- 공모전 포스터, 표 묶음 -->
      <div class="col-4 flex row items-center justify-between" style="width: 100%; height: 550px;">
        <!-- 공모전 포스터 -->
        <div class="contest-Poster col-5 flex row items-center justify-center" style="width: 35%; height: 95%; ">
          <q-img src="https://cdn.quasar.dev/img/parallax1.jpg" style="width: 100%; height: 90%; " />
        </div>
        <!-- 공모전 표 -->
        <div class="contest-Table col-7 flex row items-center justify-center"  style="width: 58%; height: 95%; " >

              <InfoTable />

        </div>
      </div>

      <!-- 추천 공모전 묶음-->
      <div class="col-2 row items-center justify-center" style="  border-top: 1px solid #413090; width: 100%; color: #413090; border-bottom: 1px solid #413090;">
        <div class="col-2 row items-center justify-start  text-bold" style="width: 100%;font-size: 1.6rem; margin: 3% 0  1% 0 ">
          <!-- 아이콘 사야함 !!! -->
          <img src = "src/assets/Image/체크.jpg" alt="공모전 체크표시" style="width:3%; height: 2%"/>

 &nbsp;이런 공모전도 확인해보세요

        </div>
        <!-- 추천 공모전 이미지-->
        <div class="col-10 row items-center justify-center " style="   width: 100%; height: 250px;">
          <div class="col-10 row items-center justify-evenly" style="width: 100%;">
            <div v-for="index in 3" :key="index" class="recommendImg col-4 column items-center justify-center">
              <q-img :src="recommendContestImg[0].src"/>
            </div>

          </div>
          <!-- 추천 공모전 이름-->
          <div class="col-2 row items-center justify-evenly " style="width: 100%;  margin-bottom : 2%">
            <div class="col-4 column items-center justify-center bg-blue-1 text-blue-9" style="width: 30%; border-radius: 10px">
              <q-btn class="contestNameBtn" label="공모전 이름" flat />
            </div>
            <div class="col-4 column items-center justify-center bg-blue-1 text-blue-9" style="width: 30%; border-radius: 10px">
              <q-btn class="contestNameBtn" label="공모전 이름" flat />
            </div>
            <div class="col-4 column items-center justify-center bg-blue-1 text-blue-9" style="width: 30%; border-radius: 10px">
              <q-btn class="contestNameBtn" label="공모전 이름" flat />
            </div>
          </div>
        </div>
      </div>

      <!-- 공모전 상세 탭-->
      <div class="col-5 row items-center justify-center" style="width: 100%; margin-top : 3% ; ">
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
      isLiked: false, // 좋아요 상태
      recommendContestImg: [
        { type: 'img', src: `https://cdn.quasar.dev/img/mountains.jpg` }
      ],
      showDialog: false,
      selectedOption: null,
      options: [
        'url복사',
        '쪽지로 공유',
      ]
    };
  },
  methods: {
    toggleLike() {
      this.isLiked = !this.isLiked; // 좋아요 상태
      console.log("heartclick");
    },
    // 공유 버튼 클릭시
    toggleSelectBox() {
      this.showDialog = !this.showDialog;
    },
    // 공유 버튼 클릭후 선택시
    confirmSelection() {
      if (this.selectedOption === 'url복사') {
        this.copyUrlToClipboard();
      }
      this.showDialog = false;
      console.log('Selected option:', this.selectedOption);
    },
    // URL 복사
    copyUrlToClipboard() {
      const url = window.location.href;
      navigator.clipboard.writeText(url).then(() => {
        console.log('URL copied to clipboard:', url);
        this.$q.notify({
          color: 'green-1',
          textColor: 'green-9',
          icon: 'check',
          message: 'URL이 클립보드에 복사되었습니다.'
        });
      }).catch(_ => {

        this.$q.notify({
          color: 'red',
          textColor: 'white',
          icon: 'warning',
          message: 'URL 복사에 실패했습니다.'
        });
      });
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
  font-size:37px;
  font-weight: bold;
}


.recommendImg{
  border: 1px solid rgba(83, 68, 152, 0.53);
  width: 30%;
  height: 150px;
  background: rgb(255, 255, 255);
}

@media screen and (max-width: 800px) {
.contest-Poster{
  display: none;
}

.contestBtn{
    font-size: 0.8rem !important;
}
#heart.material-symbols-outlined {
    font-size:20px;
}



}

</style>
