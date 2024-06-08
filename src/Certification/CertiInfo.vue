<template>
  <div class="container" style="background: #f8f8f8; display: flex; justify-content: center; margin: 100px 0;">
    <div class="backgroundCerti flex column items-center justify-center" style="background: #ffffff; padding : 2%; height: 100%; width: 1200px;">

      <!-- 자격증 이름,버튼,  날짜 묶음 -->
      <div class="Certification-Title col-1 flex row items-start justify-center" style="width: 100%;">

        <!-- 자격증 이름 -->
        <div class="Certification-Name col-6 flex row items-center justify-start text-indigo-9" style="width: 100%;">
 {{certificationName}}
          </div>

      <!-- 자격증 날짜 , 버튼 묶음-->
        <div class="col-6 flex row items-center justify-start"  style="width: 100%; padding : 0 0 1% 0;">
          <div class="col-6 flex row items-center justify-start"  style="width: 50%;">
             <q-chip class="card1  flex items-center justify-center bg-blue-1 text-blue-7" style="padding:6px 20px; font-size:1rem;  margin-right:1%; width:15%; height:10%">
               접수중
             </q-chip>
              <q-chip class="card2  flex items-center justify-center bg-red-1 text-red-7 " style="padding:6px 20px; font-size:1rem; width:15%; height:10%">
                D - 9
              </q-chip>
          </div>

          <div class="col-6 flex row items-center justify-end" style="width: 50%; "  >
            <q-btn class="certiBtn no-shadow bg-indigo-1 text-indigo-9 " icon="navigation" label="접수하기" flat
                   style="width: 27%;
                   border-radius: 10px; "/>

            <q-btn round class="certiBtn bg-green-1 text-green-4" icon="share"  flat @click="toggleSelectBox">
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
            <q-btn round class=" no-shadow items-center justify-center bg-red-1 text-red-4"  @click="toggleLike" flat
                   style="
                  font-size: 1.1rem;" >
              <span class="material-symbols-outlined" id="heart"  :class="{ filled: isLiked }">favorite</span>
            </q-btn>
          </div>
        </div>

      </div>

        <!-- 표, ai 요약 묶음 -->
        <div class="TableAndAi col-3 flex row items-center justify-between"  style="width: 100%;  padding : 2% 0;">
          <!-- AI 요약 -->
          <div class="aiSummary col-6 flex  column  text-indigo-9">
          <div class="ai-sum col-2 flex items-center justify-center" style="font-size:1.4rem; margin: 1% ">AI 요약</div>
          <div class="ai-content col-10 flex item-center justify-center">
            <span id="typing-text" style="font-size: 1.1rem">{{CertiSummary.aiSummary}}</span>
          </div>
        </div>

          <!-- 표 -->
        <div class=" certiInfo-Table col-6 flex column" style="width: 49%; ">
          <table>
            <tr>
              <td class="tableTitle bg-indigo-1 text-indigo-9" id="tableTarget1">대상</td>
              <td class="tableContent flex items-center justify-start" id="tableTarget2" >{{ CertiSummary.qualification }}</td>
            </tr>
            <tr>
              <td class="tableTitle bg-indigo-1 text-indigo-9">지역</td>
              <td class="tableContent flex items-center justify-start" ></td>
            </tr>
            <tr>
              <td class="tableTitle bg-indigo-1 text-indigo-9">기관</td>
              <td class="tableContent flex items-center justify-start" >{{ CertiSummary.organizer }}</td>
            </tr>

            <tr>
              <td class="tableTitle bg-indigo-1 text-indigo-9">응시료</td>
              <td class="tableContent flex items-center justify-start"></td>
            </tr>
            <tr>
              <td class="tableTitle bg-indigo-1 text-indigo-9" id="tableOnline1"> 접수링크</td>
              <td class="tableContent flex items-center justify-start" id="tableOnline2">
                <a>{{ CertiSummary.registrationLink }}</a>
              </td>
            </tr>

          </table>
        </div>
        </div>




      <!-- 그래프 -->
      <div class="graphSet1 col-2 row flex items-center justify-between" style="width: 100%; height: 400px;   border-bottom: 1px solid rgba(83, 68, 152, 0.53);">
        <!-- graph1 -->
        <div class="graph1 col-6 column flex items-center justify-start" style="height: 400px; width: 49%;">
          <div class="chartTitle text-center  text-indigo-7">
           • 연도별 합격률</div>
          <div class="lineChart flex column items-center justify-center" >
            <canvas id="lineChart1"></canvas>
          </div>
        </div>
        <!-- graph2 -->
        <div class="graph2 col-6 flex column items-center justify-start" style="height: 400px; width: 49%;">
          <div class="chartTitle text-center text-indigo-7">• 이 자격증을 소유한 사람이 취득한 자격증</div>
          <div class="BarChart flex column items-center justify-center " >
            <canvas id="BarChart1"></canvas>
          </div>
        </div>
      </div>
      <!-- 정보탭 -->
      <div class="col-6 flex row items-start justify-start" style="width: 100%;  padding : 2% 0;">
          <div class="tabs " style="width: 100%;" >
              <button class="tablinks" @click="openTab('tab1')" :class="{active: currentId === 'tab1'} "  style="width : 33.3%">상세정보</button>
              <button class="tablinks" @click="openTab('tab2')" :class="{active: currentId === 'tab2'}"  style="width : 33.3%">관련기사</button>
              <button class="tablinks" @click="openTab('tab3')" :class="{active: currentId === 'tab3'}"  style="width : 33.3%">합격자 후기</button>
          </div>
          <div class="contents " style="width : 100%">
            <transition>
              <section class="item" :key="currentId">
                <!-- 탭 2일 때 -->
                <template v-if="currentId === 'tab2'">
                  <!-- 관련 기사 정렬버튼 -->
                  <div style="display: flex; justify-content: flex-end;">
                    <q-btn-dropdown class=" bg-indigo-1 text-indigo-9" flat  label="Dropdown Button " style="border-radius: 15px">
                      <q-list>
                        <q-item clickable v-close-popup @click="onItemClick">
                          <q-item-section>
                            <q-item-label>최신순</q-item-label>
                          </q-item-section>
                        </q-item>
                        <q-item clickable v-close-popup @click="onItemClick">
                          <q-item-section>
                            <q-item-label>인기순</q-item-label>
                          </q-item-section>
                        </q-item>
                      </q-list>
                    </q-btn-dropdown>
                  </div>
                  <!-- 관련 기사 목록 -->
                  <div v-for="item in 30" :key="item">
                    <q-card class="q-ma-sm q-pa-sm" flat bordered style="  padding : 10px ; width : 99%; height : 180px">
                      <div class="newsWrap row  " style=" height : 100%">
                        <!-- 뉴스기사 썸네일 -->
                        <div class="news-Thumbnail col-2 flex column items-center justify-center" style="border: 1px solid #413090;" >
                          썸네일
                        </div>

                        <!-- 뉴스 제목, 내용, 조회수 묶음-->
                        <div class="news-contents col-10 flex column ">
                          <!-- 뉴스제목  -->
                          <div class="news-Title col-5 flex row items-center justify-start text-bold" style=" padding:30px 0 0 20px ;  font-size: 1.3rem ">
                            뉴스제목{{ item }}
                          </div>
                          <!-- 뉴스기사 내용 -->
                          <div class="news-article col-5 flex row items-center justify-start " style=" padding:0 0 0 25px   ;  font-size: 0.9rem">
                            뉴스기사{{ item }}
                          </div>
                          <!-- 조회수 -->
                          <div class="news-click col-2 flex row items-center justify-end"  >
                            <q-chip class="news-click col-2 flex row items-end justify-end bg-indigo-1 text-indigo-9" style="width:9%;">
                              조회수:
                            </q-chip>
                          </div>

                        </div>
                      </div>
                    </q-card>
                  </div>
                </template>

                <!-- 탭 3일 때 -->
                <template v-if="currentId === 'tab3'">
                  <div style="display: flex; justify-content: flex-end;">
                    <button class="writeBtn  bg-indigo-1 text-indigo-9" style="border-radius: 10px;margin-bottom: 10px; height: 30px; width: 17%; border: 0;" @click="goToCertiReview">
                      <span class="recepWord " style=" font-size: 0.8rem; ">
                        나도 후기 쓰러가기
                        <!-- 연필 아이콘 -->
                        <span class="material-symbols-outlined">
                             edit
                              </span>
                      </span>
                    </button>
                  </div>

                  <!-- 합격자 후기 목록 -->
                  <div class="reviewWrap">
                    <q-card flat bordered v-for="(review, index) in reviews" :key="index" style="  width:100%; height :100%; margin-bottom: 10px; border-color: #413090;" >
                      <div class="reviewsList">

                        <!-- 자격증 후기 제목, 아이디, 작성시간  -->
                        <div class=" col-3 flex row " style=" height :100%; border-bottom: 1px solid #413090; font-size: 0.8rem;  ">
                          <div class="col-5 flex column items-center justify-center" style="border-right:1px solid #413090 "> {{certificationName}}</div>
                          <div class="col-3 flex column items-center justify-center" style="border-right:1px solid #413090 "> {{review.createdAt}}</div>
                          <div class="col-2 flex column items-center justify-center"  style="border-right:1px solid #413090 ">{{ review.userId }}</div>
                          <div class="col-2 flex column items-center justify-center" >좋아요 수</div>
                        </div>
                        <!-- 자격증 후기 제목 -->
                        <div class="certiReview-Title col-3 flex row items-center justify-start  text-bold" style=" font-size: 1.3rem; margin-bottom: 20px  ">
                          {{review.title}}자격증 제목
                        </div>
                        <!-- 자격증 후기 내용 -->
                        <div class="certiReview-Content col-6 flex row items-center justify-start " style=" font-size: 1.1rem; ">
                          {{review.content}}자격증 내용
                        </div>
                      </div>
                    </q-card>
                    <div class="goodModBtn flex items-center justify-center "  >
                      <q-btn flat class=" bg-indigo-1 text-indigo-9" icon="favorite"  label="좋아요"
                             style="
                             border-radius: 10%;
                             font-size:0.8rem;
                          margin-right: 1%"/>
                      <q-btn flat class=" bg-indigo-1 text-indigo-9" @click="goToModifyPage" label="수정하기"
                             style="
                              border-radius: 10%;

                          font-size:0.8rem" />
                    </div>
                  </div>
                </template>
              </section>
            </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Chart from "chart.js/auto";
import {ref, onMounted, reactive} from "vue";
import { api } from "boot/axios";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
    //자격증 이름
    const certificationName = ref( route.params.certificationName);
    const userId = ref('minseo1111')
    const isLiked = ref(false);
    const currentId = ref("tab1");
    const showDialog = ref(false);
    const selectedOption = ref(null);
    const options = ref(["url복사", "쪽지로 공유"]);
    const displayText = ref("");
    //자격증 후기
    const reviews = reactive([
      {
        title: "제목!",
        content: "내용임",
        createdAt: "오늘",
        userId:"나나"
      },
      {
        title: "2",
        content: "2",
        createdAt: "2",
        userId: "나나2"
      }
    ]);
    //자격증 표
    const CertiSummary = ref({
      qualification: "Professional Certificate",
      organizer: "Certification Authority",
      registrationLink: "https://example.com/register",
      aiSummary:"정보처리기사에 대한 AI 요약입니다."
    });
    //좋아요 토글
    const toggleLike = () => {
      isLiked.value = !isLiked.value;
      console.log("heartclick");
    };
    //공유다이얼로그 선택 상자
    const toggleSelectBox = () => {
      showDialog.value = !showDialog.value;
    };
    //선택확인?
    const confirmSelection = () => {
      if (selectedOption.value === "url복사") {
        copyUrlToClipboard();
      }
      showDialog.value = false;
      console.log("Selected option:", selectedOption.value);
    };
    //공유 누르면 복사?
    const copyUrlToClipboard = () => {
      const url = window.location.href;
      navigator.clipboard.writeText(url).then(
        () => {
          // Success
          console.log("URL이 클립보드에 복사되었습니다.");
        },
        () => {
          // Error
          console.error("URL 복사에 실패했습니다.");
        }
      );
    };

    const openTab = (tabId) => {
      currentId.value = tabId;
    };

    //자격증 후기 수정
    const goToModifyPage = () => {
      router.push({
        name: "CertiModify",
        query: { certificationName: certificationName, userId: userId }
      });
      console.log("certificationName:", certificationName);
      console.log("User ID:", userId);
    };

    const goToCertiReview = () => {
      router.push({
        name: "CertiReview",
        query: { certificationName: certificationName, userId: userId }
      });
      console.log("certificationName:", certificationName);
      console.log("User ID:", userId);
    };

    const renderBarCharts = () => {
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
                "rgba(181,165,253,0.58)",
                "rgba(206,187,255,0.56)",
                "rgba(213,206,255,0.58)"
              ],

            }
          ]
        },
        options: {
          plugins: {
            legend: {
              display: false
            },
          },
          indexAxis: "y",
          scales: {
            x: {
              beginAtZero: true,
              ticks: {
                font: {
                  size: 14
                }
              }
            },
            y: {
              ticks: {
                font: {
                  size: 14
                }
              }
            }
          }
        }
      });
    };

    const renderLineCharts = () => {
      const ctx1 = document.getElementById("lineChart1").getContext("2d");
      new Chart(ctx1, {
        type: "line",
        data: {
          labels: ["2019", "2020", "2021", "2022", "2023"],
          datasets: [
            {
              label: "합격률",
              data: [30, 40, 85, 57, 88],
              backgroundColor: "rgb(180,168,255)",
              borderWidth: 1
            }
          ]
        },
        options: {
          plugins: {
            legend: {
              display: false
            },
            title: {
              display: true,
              font: {
                size: 16
              }
            }
          },
          scales: {
            x: {
              ticks: {
                font: {
                  size: 14
                }
              }
            },
            y: {
              ticks: {
                font: {
                  size: 14
                },
                beginAtZero: true
              }
            }
          }
        }
      });
    };


const typeContent = () => {
  let index = 0;
  const setText = () => {
    if (index < CertiSummary.value.aiSummary.length) {
      displayText.value += CertiSummary.value.aiSummary[index];
      index++;
    } else {
      clearInterval(typingInterval);
    }
  };
  const typingInterval = setInterval(setText, 100); // 타이핑 속도를 필요에 따라 조절하세요
};

    onMounted(() => {
      renderBarCharts();
      renderLineCharts();
      typeContent();
      CertificationInfo();
    });

    const CertificationInfo = async () => {
      try {
        const response = await api.get(`/api/certification/${certificationName.value}`);
        if (response && response.status === 200) {
          const { qualification, organizer, registrationLink } = response.data;
          CertiSummary.value.qualification = qualification;
          CertiSummary.value.organizer = organizer;
          CertiSummary.value.registrationLink = registrationLink;
          CertiSummary.value.aiSummary=aiSummary;
        }
      } catch (error) {
        console.error("테스트 결과 오류:", error.response.data.msg);
      }
    };




</script>


<style scoped lang="scss">

.Certification-Title{
  border-bottom: 1px solid rgba(83, 68, 152, 0.53);
}

.Certification-Name{
 font-weight: bold; font-size: 2.2rem;
  padding : 0 0 1% 0;
}

.certiBtn{
  background: rgba(233, 244, 255, 0.79);
  margin-right :2%;
   font-weight: bold; font-size: 1.1rem;

}

.tablinks {
  border-radius: 7px 7px 0 0;
  background: #ffffff;
  padding: 10px 30px;
  font-size: 1.1rem;
  width: auto;
  color: #8777ed;
  border: 1px;
}



.active {
  color: #6b47ef;
  font-weight: bold;
  font-size: 1.2rem;
  background: rgba(209, 199, 251, 0.72);
}

/*탭 내용 호버시*/
.q-card:hover {
  background: rgba(242, 238, 255, 0.71);
  color: #8254d1;
}
.contents {
  padding: 2% 0;
  width: 100%;
  height: 80%;
  background: rgba(255, 255, 255, 0.71);
  border-radius: 0 10px 10px 10px;
}


.item {
  box-sizing: border-box;
  padding: 10px;
  width: 100%;

}


table {
  width: 100%;
  height: 250px;
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
  font-size: 1rem;
  font-weight: bold;
  padding: 10px;
  background: rgb(238, 232, 255);
  width: 100px;
}

.tableContent {
  font-size: 0.9rem;
  background: rgba(242, 238, 255, 0.71);
  color: #000000;
  padding: 10px;
  height: 100%;
}


.aiSummary {
  width: 49%;
  background: rgba(240, 238, 255, 0.71);
  height: 250px;
  border-radius: 10px;
  padding:1%
}

.ai-sum {
  font-size: 1.2rem;
  font-weight: bold;
  width: 100%;
  height: 15%;
}

.ai-content {
  width:100%;
  height: 70%;

}

.material-symbols-outlined {
  font-size: 160%;
}

#heart.material-symbols-outlined {
  color: rgba(214, 94, 107, 0.79);
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}

#heart.filled {
  color: rgba(214, 94, 107, 0.79);
  font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
/* 차트 이름*/
.chartTitle {
  width:100%;
  height: 50px;
  border-radius: 8px 8px 0 0 ;
  padding:5%;
  font-weight: bold;
  font-size : 1.1rem;
}


/*라인차트*/
.lineChart{
  width: 100%;
  height:330px ;
  padding:5% 0 10% 0  ;
  border-radius: 0 0 8px 8px;
}
/*도넛차트*/
.BarChart{
  width: 100%;
  height: 300px ;
  padding:4% ;
  background: rgba(255, 255, 255);
  border-radius: 0 0 8px 8px;
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

  .backgroundCerti {
    width: 100%
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


}

</style>
