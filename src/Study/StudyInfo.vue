<template>
  <div class="container flex items-center justify-center" style="background: #f8f8f8; margin: 100px 0;">
    <div class="backgroundCertiMain flex column items-center justify-center" style="background: #ffffff; padding: 2%; width: 1200px;">
      <!-- 스터디제목 -->
      <div class="col-1 row flex align-center justify-center text-primary text-bold" style="font-size: 1.8rem; margin: 2%;">
        <q-chip class="bg-red-1 text-red-9">D - 9</q-chip>
        &nbsp;
        <span class="StudyGroupName">웹사이트 공모전 같이 나갈 사람 ( 스터디 그룹 이름 )</span>
      </div>
      <!-- 스터디 상세 -->
      <div class="col-6 row flex align-center justify-center" style="width: 85%">
        <StudyDetail style="width: 100%" />
      </div>

      <div class="col-3 row flex align-center justify-center" style=" width: 85%; margin: 5% 0; height:380px">

        <div class="StudyGroupGraph col-4 flex align-center justify-center" >
          <q-card flat>
            <q-tabs
              v-model="tab"
              dense
              class="text-grey"
              active-color="primary"
              indicator-color="primary"
              align="justify"
              narrow-indicator
            >
              <q-tab name="포지션" label="포지션" />
              <q-tab name="SKILL" label="SKILL" />
            </q-tabs>
            <q-tab-panels v-model="tab" animated>
              <!-- Graph 1 -->
              <q-tab-panel name="포지션">
                <div id="chart">
                  <apexchart type="radar" height="350" :options="chartOptions1" :series="series1"></apexchart>
                </div>
              </q-tab-panel>
              <!-- Graph 2-->
              <q-tab-panel name="SKILL">
                <div id="chart">
                  <apexchart type="radar" height="350" :options="chartOptions2" :series="series2"></apexchart>
                </div>
              </q-tab-panel>
            </q-tab-panels>
          </q-card>
        </div>

        <!-- 팀분석, progressbar 묶음-->
        <div class="GroupAnalyze col-8 column flex align-center justify-center" >
          <div class="col-4 row flex align-center justify-between" >
            <div class="row text-bold text-indigo-7 " style="font-size: 1.5rem; width:35%;">
              <img src = "src/assets/Image/분석.png" alt="분석" style="width:15%; height: 28%; margin-right:5% "/>
              <div>
                팀분석
              </div>
            </div>
            <div class="text-accent bg-secondary flex "
                 style="border-radius: 15px; font-size: 1.2rem; width: 50%; height: 40%; display: flex; align-items: center; justify-content: center;">
              <img src = "src/assets/Image/경고2.png" alt="경고2" style="width:10%; height:58%; margin-right:3% "/>
              <span class="StudyGroupWarning">디자이너가 부족해요</span>
            </div>
          </div>

          <!-- progressbar1 -->
          <div class="col-8 column flex align-center justify-evenly" style=" width:90%; padding:2%">
            <div >
              <span class=" text-purple-9" style="padding:2%">사용자님의 팀원 적합도</span>
              <q-linear-progress size="25px" :value="progress1" color="deep-purple-4" track-color="deep-purple-2" style="border-radius: 15px">
                <div class="absolute-full flex flex-center">
                  <q-badge color="white" text-color="deep-purple-6" :label="progressLabel1" />
                </div>
              </q-linear-progress>
            </div>
            <!-- progressbar2 -->
            <div>
              <span class=" text-indigo-9" style="padding:2%">사용자님이 팀원이 될 확률</span>
              <q-linear-progress size="25px" :value="progress2" color="indigo-5" track-color="indigo-2" style="border-radius: 15px">
                <div class="absolute-full flex flex-center">
                  <q-badge color="white" text-color="indigo-5" :label="progressLabel2" />
                </div>
              </q-linear-progress>
            </div>
          </div>
        </div>
      </div>

      <!-- 팀원들 목록 -->
      <div class="col-2 row no-wrap " style="width: 85%; height: 350px; overflow-x: auto;">
        <div class="col-3" v-for="(user, index) in users" :key="user.id">
            <div class="flex align-center justify-center">
              <!-- 첫 번째 팀원일 때만 왕관 이미지 표시 -->
              <img v-if="index === 0" src="src/assets/Image/왕관.png" alt="왕관" style="width: 25%; height: 80%; align-self: flex-end;" />
              <img v-else src="src/assets/Image/구름.png" alt="구름" style="width: 25%; height: 80%; align-self: flex-end;" />
            </div>

            <div class="flex align-center justify-center" >
              <q-avatar style="width: 100%; height: 100%;">
                <img :src="user.avatar" alt="프로필 이미지" style="width:65%; height: auto; margin-bottom: 7%" />
              </q-avatar>
            </div>

            <div class="flex align-center justify-center text-bold">
              {{ user.name }}
          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
import {computed, ref} from 'vue';
import StudyDetail from "src/Study/StudyDetail.vue";
import VueApexCharts from 'vue3-apexcharts';

export default {
  components: {
    StudyDetail,
    apexchart: VueApexCharts,
  },
  setup() {
    const tab = ref('포지션');
    const progress1 = ref(0.5);
    const progress2 = ref(0.7);
    const users = ref([
      { id: 1, name: 'User1', avatar: 'https://cdn.quasar.dev/img/avatar.png' },
      { id: 2, name: 'User2', avatar: 'https://cdn.quasar.dev/img/avatar.png' },
      { id: 3, name: 'User3', avatar: 'https://cdn.quasar.dev/img/avatar.png' },
      { id: 4, name: 'User4', avatar: 'https://cdn.quasar.dev/img/avatar.png' },
      { id: 5, name: 'User5', avatar: 'https://cdn.quasar.dev/img/avatar.png' },


    ]);
    //차트1
    const series1 = ref([{
      name: 'Series 1',
      data: [80, 50, 30, 40, 100, 20],
    }]);
    const chartOptions1 = ref({
      chart: {
        height: 350,
        type: 'radar',
      },
      colors: ['#aa8de6'],
      yaxis: {
        stepSize: 20,
      },
      xaxis: {
        categories: ['January', 'February', 'March', 'April', 'May', 'June'],
      },
    });

    //차트2
    const series2 = ref([{
      name: 'Series 1',
      data: [80, 50, 30, 40, 100, 20],
    }]);
    const chartOptions2 = ref({
      chart: {
        height: 350,
        type: 'radar',
      },
      colors: ['#8c7ee8'],
      yaxis: {
        stepSize: 20,
      },
      xaxis: {
        categories: ['January', 'February', 'March', 'April', 'May', 'June'],
      },
    });
    return {
      tab,
      series1,
      chartOptions1,
      series2,
      chartOptions2,
      progress1,
      progressLabel1: computed(() => (progress1.value * 100).toFixed(2) + '%'),
      progress2,
      progressLabel2: computed(() => (progress2.value * 100).toFixed(2) + '%'),
      users,
    };
  },
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  margin: 100px 0;
  background: #f8f8f8;
}

.backgroundCertiMain {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  padding: 2%;
  width: 1200px;
}
@media screen and (max-width: 800px) {
  .StudyGroupName {
      font-size: 1.4rem;
  }

  .StudyGroupWarning{
    font-size: 1rem;
  }
  .StudyGroupGraph{
    display: none;
  }
  .GroupAnalyze{
    width:100%;
  }
}
</style>
