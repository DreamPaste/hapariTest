<template>
  <div class="container" style="background: #f8f8f8; display: flex; justify-content: center; margin: 100px 0;">
    <div class="backgroundCerti flex column items-center justify-center" style="height: 100%; width: 1000px;">
      <div class="Menu-Wrap col-2 flex row items-center justify-between" style="width: 100%;">
        <!-- 카드 및 버튼 wrapper -->
        <div class="Menu1 col-5">
          <!-- 자격증 카드 -->
          <div class="certifiCard row flex items-center">
            <!-- 분야별 아이콘 -->
            <div class="cardImg col-6 flex items-center justify-center">icon</div>
            <!-- 자격증 카드 내용 -->
            <div class="cardContent col-6" style="padding: 10px; border-radius: 0 10px 10px 0; font-family: 'Gmarket Sans', sans-serif;">
              <div class="certiTItle" style="font-size: 1.5rem; margin-bottom: 20%;">{{ certificationId }}</div>
              <div class="text-subtitle2" style="font-size: 1.1rem; font-weight: bold; margin-bottom: 15%;">{{ Name }}님</div>
              <div class="text-subtitle3" style="font-size: 0.8rem; font-weight: bold;">취득일자: {{ formattedDate }}</div>
            </div>
          </div>
          <!-- 버튼 감싸는 요소 -->
          <div class="btnWrap flex items-center justify-evenly">
            <!-- 접수 -->
            <q-btn
              icon="navigation" label="접수"
              style="background: rgba(255, 255, 255, 0.71);
              border: 1px solid #413090;
              color: #413090;
              height: 100%; width: 33%;
              border-radius: 10px;
              padding:10px;
              font-family: 'Gmarket Sans', sans-serif; font-weight: bold; font-size: 1rem" />
            <!-- 공유 -->
            <q-btn-dropdown
              push
              no-caps
              icon="share"
              label="공유"
              @click="onMainClick"

              style="border: 1px solid #413090;
              color: #413090;
              height: 100%; width: 35%;
              border-radius: 10px;
               padding:10px;
              font-family: 'Gmarket Sans', sans-serif; font-weight: bold; font-size: 1rem"
            >
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
            <button class="Btns" @click="toggleLike"
                    style="color:#413090;
                    background: rgba(255, 255, 255, 0.71);
                    border-radius: 50px;
                    border: 1px solid #413090;
                    height: 100%; width: 50px">
              <span class="material-symbols-outlined" id="heart">favorite</span>
            </button>
          </div>
        </div>
        <!-- 표 -->
        <div class="Menu2 col-7">
          <table>
            <caption class="infoTableCaption" style="color: #413090;">• 시험 정보</caption>
            <tr>
              <td class="tableTitle" id="tableTarget1">대상</td>
              <td class="tableContent flex items-center justify-start" id="tableTarget2" style="margin-left: 4%"></td>
            </tr>
            <tr>
              <td class="tableTitle">지역</td>
              <td class="tableContent flex items-center justify-start" style="margin-left: 4%"></td>
            </tr>
            <tr>
              <td class="tableTitle">응시료</td>
              <td class="tableContent flex items-center justify-start" style="margin-left: 4%"></td>
            </tr>
            <tr>
              <td class="tableTitle">홈페이지</td>
              <td class="tableContent flex items-center justify-start" style="margin-left: 4%;">
                <a href="https://www.q-net.or.kr/man001.do?gSite=Q">홈페이지 바로가기</a>
              </td>
            </tr>
            <tr>
              <td class="tableTitle" id="tableOnline1">접수방법</td>
              <td class="tableContent flex items-center justify-start" id="tableOnline2" style="margin-left: 4%;">
                <a href="https://www.q-net.or.kr/man001.do?gSite=Q">온라인 접수 바로가기</a>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <!-- AI 요약 -->
      <div class="aiSummary col-1 row flex">
        <div class="ai-sum col-2 flex">AI 요약</div>
        <div class="ai-content col-10 flex item-center">
          <span id="typing-text">{{aiSummary}}</span>
        </div>
      </div>
      <!-- 그래프 -->
      <div class="graphSet1 col-3 row flex items-center justify-center" style="width: 100%; height: 400px;">
        <!-- graph1 -->
        <div class="graph1 col-6 column flex items-center justify-center" style="height: 400px; width: 49%; margin-right: 2%;">
          <div class="chartTitle text-center">• 연도별 합격률</div>
          <div class="lineChart flex column items-center justify-center">
            <canvas id="lineChart1"></canvas>
          </div>
        </div>
        <!-- graph2 -->
        <div class="graph2 col-6 flex column items-center justify-center" style="height: 400px; width: 49%;">
          <div class="chartTitle text-center">• 이 자격증을 소유한 사람이 취득한 자격증</div>
          <div class="BarChart flex column items-center justify-center">
            <canvas id="BarChart1"></canvas>
          </div>
        </div>
      </div>
      <!-- 정보탭 -->
      <div class="col-6 flex column items-center justify-start" style="width: 100%;">
       <CertiTab certificationId="certificationId" :userId="userId"  :reviews="reviews" :createdAt="createdAt" />
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js/auto";
import { api } from "boot/axios";
import CertiTab from "src/Certification/CertiTab.vue";

export default {
  props: {
    certificationId: {
      type: Number,
      required: true,
      default: 1,
    },
    certificationCode: {
      type: Number,
      required: true,
      default: 1,
    },
    Name: {
      type: String,
      required: true,
      default: "공민서",
    },
    createdAt: {
      type: String,
      required: true,
      default: "2024.05.01",
    },
    title: {
      type: String,
      required: true,
      default: "후기제목",
    },
    content: {
      type: String,
      required: true,
      default: "합격자 후기입니다",
    },
    userId: {
      type: String,
      required: true,
      default: "testId",
    },
  },
  data() {
    return {
      formattedDate: new Date().toLocaleDateString(),
      isLiked: false,
      aiSummary: "",
    };
  },
  components: {
    CertiTab,
  },
  mounted() {
    this.renderBarCharts();
    this.renderLineCharts();
    this.typeContent();
    this.fetchData(this.certificationId, this.reviewList);
  },
  methods: {
    async fetchData(certificationId, page) {
      console.log('test!!');
      try {
        const response = await api.get(`/api/certifications/${certificationId}/reviews?page=${page}`);

        if (response && response.status === 200) {
          const data = response.data;
          console.log("테스트중", data);
        }
      } catch (err) {
        console.log(err);
      }
    },

    onMainClick() {
      console.log("Main clicked");
    },
    async copyURL() {
      try {
        // 현재 페이지의 URL 가져오기
        const currentURL = window.location.href;

        // 클립보드에 텍스트 복사
        await navigator.clipboard.writeText(currentURL);

        // 복사 완료 메시지 등을 사용자에게 표시할 수 있음
        alert("URL이 복사되었습니다.");
      } catch (error) {
        // 복사 실패 시 에러 처리
        console.error("URL 복사에 실패했습니다:", error);
      }
    },

    toggleLike() {
      this.isLiked = !this.isLiked; // 좋아요 상태 토글
    },

    renderBarCharts() {
      const ctx2 = document.getElementById("BarChart1").getContext("2d");
      new Chart(ctx2, {
        type: "bar",
        data: {
          labels: ["자격증1", "자격증2", "자격증3"],
          datasets: [
            {
              label: "소유 비율",
              data: [12, 5, 3],
              backgroundColor: [
                "rgba(9,130,251, 0.6)",
                "rgba(46,137,255, 0.6)",
                "rgba(46,87,251,0.6)",
              ],
              borderColor: ["rgb(9,130,251)", "rgb(46,137,255)", "rgb(46,87,251)"],
              borderWidth: 1,
            },
          ],
        },
        options: {
          indexAxis: "y",
          scales: {
            x: {
              beginAtZero: true,
              ticks: {
                font: {
                  size: 14,
                  family: "Gmarket Sans",
                  weight: "bold",
                },
              },
            },
            y: {
              ticks: {
                font: {
                  size: 14,
                  family: "Gmarket Sans",
                  weight: "bold",
                },
              },
            },
          },
        },
      });
    },
    renderLineCharts() {
      const ctx1 = document.getElementById("lineChart1").getContext("2d");
      new Chart(ctx1, {
        type: "line",
        data: {
          labels: ["2019", "2020", "2021", "2022", "2023"],
          datasets: [
            {
              label: "합격률",
              data: [30, 40, 85, 57, 88],
              backgroundColor: "rgb(9,130,251)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          plugins: {
            title: {
              display: true,
              text: '합격률 변화', // 누락된 제목 텍스트 추가
              font: {
                size: 16,
                family: "Gmarket Sans", // 제목 폰트 설정
              },
            },
          },
          scales: {
            x: {
              ticks: {
                font: {
                  size: 14,
                  family: "Gmarket Sans",
                  weight: "bold",
                },
              },
            },
            y: {
              ticks: {
                font: {
                  size: 14,
                  family: "Gmarket Sans",
                  weight: "bold",
                },
                beginAtZero: true, // 누락된 속성 이동
              },
            },
          },
          fontFamily: "Gmarket Sans", // 전체 폰트 설정
        },
      });
    },
    async typeContent() {
      console.log("testing....");

      try {
        const response = await api.get('/api/certification/interest/testId');
        if (response && response.status === 200) {
          const aiSummaries = response.data.map(item => item.aiSummary);
          console.log('테스트 결과:', aiSummaries);
          console.log('첫번째테스트 결과:', aiSummaries[0]);
          console.log('두번째테스트 결과:', aiSummaries[1]);
        }
      } catch (error) {
        console.error('테스트 결과 오류:', error.response.data.msg);
      }
    }
  },
};
</script>



<style scoped lang="scss">



table {
  width: 100%;
  height: 100%;
  border-collapse: collapse;
}

td {
  text-align: center;
  padding: 2%;
}

#tableOnline1 {
  border-radius: 0 0 0 15px;
}

#tableOnline2 {
  border-radius: 0 0 15px 0;
}

#tableTarget1 {
  border-radius: 15px 0 0 0;
}

#tableTarget2 {
  border-radius: 0 15px 0 0;
}

.tableTitle {
  font-size: 0.9rem;
  font-weight: bold;
  color: #000000;
  padding: 10px;
  background: rgba(229, 244, 250, 0.71);
  width: 100px;
}

.tableContent {
  font-size: 0.8rem;
  background: rgba(255, 255, 255, 0.47);
  color: #000000;
}

.infoTableCaption {
  font-family: 'Gmarket Sans', sans-serif;
  font-weight: bold;
  font-size: 1.1rem;
  padding: 0 0 3% 0;
}

.Menu-Wrap {
  height: 300px;
}

.Menu1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.certifiCard {
  margin: 10px;
  width: 380px;
  height: 220px;
  background: rgba(255, 255, 255, 0.71);
  border-radius: 10px;
  color: #413090;
  box-shadow: 2px 2px 4px rgba(184, 182, 182, 0.3);
}

.cardContent {
  padding: 10px;
  border-radius: 0 10px 10px 0;
  font-family: 'Gmarket Sans', sans-serif;
}

.btnWrap {
  width: 100%;
  height: 50px;
  font-size: 1.1rem;
  font-family: 'Gmarket Sans', sans-serif;
  font-weight: bold;
}

.Menu2 {
  height: 100%;
  border-radius: 10px;
  font-family: 'Gmarket Sans', sans-serif;
  background: rgba(255, 255, 255, 0.71);
  padding: 5% 2%;
  margin-top: 10px;
  box-shadow: 2px 2px 4px rgba(184, 182, 182, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}


.aiSummary {
  box-shadow: 2px 2px 4px rgba(184, 182, 182, 0.3);
  width: 100%;
  background: rgba(255, 255, 255, 0.71);
  height: 150px;
  border-radius: 10px;
  margin-top: 2%;
}

.ai-sum {
  font-size: 1.2rem;
  font-family: 'Gmarket Sans', sans-serif;
  font-weight: bold;
  width: 90%;
  height: 15%;
  margin: 2% 5% 2% 3%;
  color: #413090;
}

.ai-content {
  font-family: 'Gmarket Sans', sans-serif;
  width: 90%;
  height: 60%;
  margin-left: 3%;
}

.material-symbols-outlined {
  font-size: 130%;
}

#heart.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}

#heart.filled {
  color: #413090;
  font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
/* 차트 이름*/
.chartTitle {
  width:100%;
  height: 50px;
  box-shadow: 2px 0 4px rgba(184, 182, 182,0.3);
  background:  rgba(255,255,255,0.71);
  border-radius: 8px 8px 0 0 ;
  padding:5%;
  font-family: 'Gmarket Sans', sans-serif;
  font-weight: bold;
  font-size : 1.1rem;
  color: #413090;
}


/*라인차트*/
.lineChart{
  box-shadow: 2px 2px 4px rgba(184, 182, 182, 0.3);
  width: 100%;
  height:300px ;
  padding:5% 0 10% 0  ;
  background: rgba(255,255,255,0.71);
  border-radius: 0 0 8px 8px;
}
/*도넛차트*/
.BarChart{
  box-shadow: 2px 2px 4px rgba(184, 182, 182, 0.3);
  width: 100%;
  height: 300px ;
  padding:4% ;
  background: rgba(255,255,255,0.71);
  border-radius: 0 0 8px 8px;
}



.q-card:hover {
  background: rgba(96,121,255,0.9);
  color: white;
}

/* 하이퍼링크의 밑줄 제거 */
a {
  text-decoration: none;
}


/*미디어쿼리 800*/
@media screen and (max-width: 800px) {
  .Menu-Wrap {
    flex-direction: column;
    align-items: center;

  }

  .Menu2 {
    order: -1;
    width: 100%;
  }

  .Menu1 {
    width: 100%;

  }
  .backgroundCerti {
    width: 100%
  }


  .certifiCard {
    display: none;
  }

  .aiSummary {
    width:100%;
  }
  .summary {
    width: 20%;
  }

  .graphSet1 {
    flex-direction: row;

  }

  .tablinks1, .tablinks2, .tablinks3 {
    border-radius: 7px 7px 0 0;
    background: rgba(96,121,255,0.9);
    line-height: 24px;
    padding: 5px 20px;
    font-size: 0.7rem;
    width: auto;
    font-family: 'Gmarket Sans', sans-serif;
    font-weight: bold;
    color: #ffffff;
    border: 1px;
  }
}

.active {
  background: rgba(255, 255, 255, 0.71);
  color: #413090;
}

</style>
