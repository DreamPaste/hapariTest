<template>
  <div class="container2 flex items-center justify-center" style="background: #BEE7FF; display: flex; justify-content: center;">
    <div class="backgroundCertiMain flex column items-center justify-center" style=" height:200vh; width:50vw ">
      <!-- 검색 -->
      <div class="CertiMain1 col-2 flex  row items-center justify-center" style=" width :100%;">
        <div class="search-box flex items-center justify-center" style="width:85%; height: 18%;border-radius: 30px;   background : rgba(255,255,255,0.54);">
          <span class="material-symbols-outlined">search</span>
          <input type="text"  style="font-size: 18px;width:85%;  height: 100%; padding: 10px;outline: none;float: left;border: 0;   background : rgba(255,255,255,0);  ">
        </div>
      </div>

      <!-- 실시간 순위, 달력, 정보-->
      <div class="CertiMain2 col-5 flex  row items-center justify-center" style=" width :100%;  ">
        <!-- 실시간 순위-->
        <div class="CertiMaintab1 col-4 flex column items-center justify-start " style=" height :100%; ">
          <div class="CertiRank" style=" width:90%; height :80%; border-radius: 10px;  background : rgba(255,255,255,0.54); ">

          </div>
        </div>
        <!-- 달력, 정보 등-->
        <div class="CertiMaintab2 col-8 flex column " style="height :100%;  ">
          <!-- 랜덤 자격증정보-->
          <div class="CertiMainInfo1 col-4 flex row items-start justify-center" style=" width :100%; ">
            <div class="CertiInfo" style=" width:95%; height :80%; border-radius: 10px;  background : rgba(255,255,255,0.54); ">
            </div>
          </div>
          <!-- 달력, 접수일자-->
          <div class="CertiMainInfo2 col-8 flex row " style=" width :100%;">

            <!-- 달력-->
            <div class="CertiMainCal col-7 flex column items-center justify-start " style=" height :100%; ">
              <div class="CertiCalendar" style=" width:90%; height :70%; border-radius: 10px;  background : rgba(255,255,255,0.54); ">
            </div>
            </div>
            <!-- 접수일자-->
            <div class="CertiMainCheck col-5 flex column items-center justify-start " style=" height :100%; ">
              <div class="CertiDate" style=" width:90%; height :70%; border-radius: 10px;  background : rgba(255,255,255,0.54); ">
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="CertiMain3 col-5 flex  row " style=" width :100%; margin-top: -10% ">
        <!-- 전공 자격증-->
        <div class="CertiMainMajor col-6 flex column items-center justify-start" style=" height :100%; ">
          <div class="CertiMajor" style=" width:93%; height :85%; border-radius: 10px;  background : rgba(255,255,255,0.54); ">

          </div>
        </div>
        <!--뉴스, 그래프-->
        <div class="CertiMaintab3 col-6 flex column " style=" height :100%;  ">
          <!--그래프-->
          <div class="CertiMainNews col-3 flex row items-start justify-center" style=" width :100%; ">
            <div class="CertiMajor" style=" width:95%; height :90%; border-radius: 10px;   background: linear-gradient(to bottom right, #9fc6f8, #9fd0f3, #75dbe4); ">
              <div class="bar-chart-container" >
                <canvas id="chartCanvas"></canvas>
              </div>
            </div>
          </div>
          <!--뉴스-->
          <div class="CertiMainGraph col-9 flex row items-start justify-center" style=" width :100%; ">
            <div class="CertiGraph" style=" width:95%; height :80%; border-radius: 10px;  background : rgba(255,255,255,0.54); ">
            </div>
          </div>
        </div>
      </div>
      </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import Chart from 'chart.js/auto';




onMounted(() => {
  createChart();
});

function createChart() {
  const ctx = document.getElementById('chartCanvas').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["Red", "Blue", "Yellow"],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255,255,255)',
          'rgba(255,255,255)',
          'rgba(255,255,255)',

        ],

        borderWidth: 1
      }]
    },
    options: {
      indexAxis: 'y',
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
</script>

<style scoped lang="scss">
.material-symbols-outlined {
  font-size: 200%;
}
.bar-chart-container {
  width: 100%;
  height: 100%;
}
</style>
