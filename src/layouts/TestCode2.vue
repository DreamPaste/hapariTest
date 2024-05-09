<template>
  <div class="container" style="background: #f8f8f8; display: flex; justify-content: center; margin: 100px 0;">
    <div class="backgroundCerti flex column items-center justify-center" style=" height:100%; width:1000px ">
      <div class="Menu-Wrap col-2 flex  row items-center justify-between" style=" width :100%; ">
        <!--       카드, 및 버튼 wrapper-->
        <div class="Menu1 col-5">

          <!--자격증카드-->
          <div class="certifiCard row  flex items-center "  >

            <!-- 분야별icon-->
            <div class="cardImg col-6 flex items-center justify-center">icon</div>
            <!--자격증카드 내용-->
            <div class="cardContent col-6"
                 style=" padding: 10px; border-radius: 0 10px 10px 0;  font-family: 'Gmarket Sans', sans-serif;" >
              <div class="text-h6 " style="font-size: 1.6rem; margin-bottom: 20%">
                {{ certName }}
              </div>
              <div class="text-subtitle2  " style="font-size: 1.1rem; font-weight: bold; margin-bottom: 10% ">
                공민서님</div>
              <div class="text-subtitle3  " style="font-size: 0.8rem; font-weight: bold; ">취득일자: {{ formattedDate }}</div>
            </div>

          </div>
          <!--버튼들-->
          <div class="btnWrap flex items-center justify-evenly"
               style="font-size: 1.1rem; font-family: 'Gmarket Sans', sans-serif; font-weight: bold;">
            <!--           접수-->
            <button class ="Btns">
              <span class="material-symbols-outlined">arrow_selector_tool</span>
              접수
            </button>

            <!--            공유-->
            <button class="Btns">
              <span class="material-symbols-outlined">share</span>
              공유
            </button>
            <!--            하트-->
            <button class="Btns" @click="fillHeart">
              <span class="material-symbols-outlined" id="heart">favorite</span>
            </button>
          </div>
        </div>
        <!--        표-->
        <div class="Menu2 col-7" >
          <table>
            <caption class="infoTableCaption " style="  color: #413090;">• 시험 정보</caption>
            <tr>
              <td class="tableTitle" id = "tableTarget1">대상</td>
              <td class="tableContent flex items-center justify-start"  id = "tableTarget2" style="margin-left: 4%">누구나, 유치원, 초등학생, 중학생, 고등학생, 대학생, 대학원생, 외국인, 일반인</td>
            </tr>
            <tr >
              <td class="tableTitle" >지역</td>
              <td class="tableContent flex items-center justify-start" style="margin-left: 4%">서울</td>
            </tr>
            <tr>
              <td  class="tableTitle" >응시료</td>
              <td class="tableContent flex items-center justify-start" style="margin-left: 4%">5000원</td>
            </tr>
            <tr >

              <td  class="tableTitle" >홈페이지</td>
              <td class="tableContent flex items-center justify-start" style="margin-left: 4%"><a href="https://www.q-net.or.kr/man001.do?gSite=Q">홈페이지 바로가기</a></td>
            </tr>
            <tr>

              <td  class="tableTitle" id = "tableOnline1">접수방법</td>
              <td class="tableContent flex items-center justify-start" id = "tableOnline2" style="margin-left: 4%"><a href="https://www.q-net.or.kr/man001.do?gSite=Q">온라인 접수 바로가기</a> </td>
            </tr>
          </table>
        </div>
      </div>

      <!-- ai 요약-->
      <div class="aiSummary col-1 row flex "  style="   box-shadow: 2px 2px 4px rgba(184, 182, 182, 0.3); width:100%; background : rgba(255,255,255,0.71);  height: 150px;  border-radius: 10px; margin-top: 2% ">

        <div class="ai-sum col-2 flex" style="font-size: 1.2rem; font-family: 'Gmarket Sans', sans-serif; font-weight: bold; width: 90%; height: 15%; margin: 2% 5% 2% 3%; color : #413090">
          AI 요약
        </div>

        <div class="ai-content col-10 flex item-center   " style=" font-family: 'Gmarket Sans', sans-serif;width : 90%; height: 60%; margin-left: 3%">
          <span id="typing-text"></span>
        </div>
      </div>

      <!-- 그래프-->

      <div class="graphSet1 col-3 row flex items-center justify-center" style="width:100%;  height: 400px ;  ">
        <div class="graph1   col-6 column flex  items-center justify-center" style=" height: 400px; width: 49%; margin-right: 2% ">
          <!-- graph1의 내용 -->
          <div class="chartTitle text-center" style="width:100%; height: 80px; box-shadow: 2px 0 4px rgba(184, 182, 182, 0.3); background:  rgba(255,255,255,0.71); border-radius: 8px 8px 0 0 ; padding:5% ">
            <div class="chartTitle1" style=" font-family: 'Gmarket Sans', sans-serif;font-weight: bold; font-size : 1.1rem; color: #413090; ">• 연도별 합격률</div>
          </div>
          <div class="lineChart  flex column items-center justify-center " style="  box-shadow: 2px 2px 4px rgba(184, 182, 182, 0.3); width: 100%; height:280px ; padding:5% 0 10% 0  ;background: rgba(255,255,255,0.71); border-radius: 0 0 8px 8px;" >
            <canvas  id="lineChart1"></canvas>
          </div>
        </div>

        <div class="graph2  col-6  flex column items-center justify-center " style="height: 400px; width: 49%">

          <!-- graph2의 내용 -->
          <div  class="chartTitle text-center"  style="width:100%; height: 80px;box-shadow: 2px 0 4px rgba(184, 182, 182, 0.3); background:  rgba(255,255,255,0.71); border-radius: 8px 8px 0 0 ;  padding:5% ">
            <div class="chartTitle2"  style=" font-family: 'Gmarket Sans', sans-serif; font-weight: bold; font-size : 1.1rem; color: #413090;">• 이 자격증을 소유한 사람이 취득한 자격증</div>
          </div>
          <div class="polarAreaChart flex column items-center justify-center " style="  box-shadow: 2px 2px 4px rgba(184, 182, 182, 0.3); width: 100%; height: 70% ;padding:4% ;background: rgba(255,255,255,0.71);  border-radius: 0 0 8px 8px;" >
            <canvas id="polarAreaChart1" ></canvas>
          </div>
        </div>
      </div>

      <!-- 정보탭-->
      <div class="col-6 flex column items-center justify-start" style="width: 100%;">
        <div class="infoTab col-12 flex column" style="width: 100%; height: 300px ">
          <div class="tabs" >
            <div>
              <button class="tablinks"  @click="openTab('tab1')" :class="{active: currentId === 'tab1'}">상세정보</button>
              <button class="tablinks" @click="openTab('tab2')" :class="{active: currentId === 'tab2'}">관련기사</button>
              <button class="tablinks" @click="openTab('tab3')" :class="{active: currentId === 'tab3'}">합격자 후기</button>
            </div>
          </div>
          <div class="contents">
            <transition>
              <section class="item" :key="currentId">
                <template v-if="currentId === 'tab3'">
                  <div style="display: flex; justify-content: flex-end;">
                    <button class="writeBtn "  style="border-radius: 10px;  background: rgba(96,121,255,0.9);  height:30px; width: 20%;   border :0; ">
            <span class="recepWord" style="color : white; font-size: 0.8rem; font-family: 'Gmarket Sans', sans-serif; font-weight: bold;">
                나도 후기쓰러가기
            </span>
                    </button>
                  </div>
                  <div style="width: 100%;">
                    <q-chat-message
                      v-for="(review, index) in reviews"
                      :key="index"
                      :name="review.id"
                      :text="[review.content]"
                      :sent="index % 2 === 0"
                      :bg-color="index % 2 === 0 ? 'blue-1' : 'indigo-12'"
                      :text-color="index % 2 === 0 ? '' : 'white'"
                    />
                  </div>
                </template>
                <!-- 기존 탭 내용 -->
                <template v-else>
                  <div>
                    {{ current.content }}
                  </div>
                </template>
              </section>
            </transition>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Chart from 'chart.js/auto';

export default {
  props: {
    certName: {
      type: String,
      required: true
    }
  },
  data() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const formattedDate = `${year}-${month}-${day}`;

    return {
      formattedDate: formattedDate,
      tab: 'detail',
      currentId: '', // 현재 선택된 탭 아이디
      list: [
        { id: 'tab1', content: '탭1 내용' },
        { id: 'tab2', content: '탭2 내용' },
        { id: 'tab3', content: '탭3 내용' }
      ],
      reviews: [
        { id: 'user1', content: '합격 후기 내용 1' },
        { id: 'user2', content: '합격 후기 내용 2' },
        { id: 'user3', content: '합격 후기 내용 3' },
        // 추가적인 합격자 후기 내용 및 아이디 추가 가능
      ],
      current: {} // 현재 선택된 탭의 내용
    };
  },
  mounted() {
    this.currentId = this.list[0].id; // 초기에 첫 번째 탭 선택
    this.current = this.list.find(item => item.id === this.currentId); // 선택된 탭의 내용 설정
    this.renderPolarAreaCharts();
    this.renderLineCharts();
    this.typeContent(); // 타이핑 효과 함수 호출
  },
  methods: {
    fillHeart() {
      const heartIcon = document.getElementById('heart');
      heartIcon.classList.toggle('filled');
    },
    openTab(tabId) {
      this.currentId = tabId;
      this.current = this.list.find(item => item.id === this.currentId);
    },

    renderPolarAreaCharts() {
      const ctx1 = document.getElementById('polarAreaChart1').getContext('2d');


      new Chart(ctx1, {
        type: 'doughnut',
        data: {
          labels: ['자격증1', '자격증2', '자격증3', '자격증4'],
          datasets: [{
            data: [12, 19, 3, 5],
            backgroundColor: [
              'rgb(51,60,232)',
              'rgb(129,165,253)',
              'rgb(97,123,255)',
              'rgb(25,120,244)',
            ],


            borderWidth: 1
          }]
        },
        options: {
          plugins: {
            legend: {
              position: 'top'// 라벨 위치 설정
            }
          },
          scales: {

            y: {
              beginAtZero: true,
              display: false
            },

          }
        }
      });
    },

    renderLineCharts() {
      const ctx1 = document.getElementById('lineChart1').getContext('2d');

      new Chart(ctx1, {
        type: 'line',
        data: {
          labels: ['2019', '2020', '2021', '2022', '2023'],
          datasets: [{
            label: '합격률',
            fill:'origin',
            data: [12, 19, 3, 42, 2, 20, 45, 60],
            backgroundColor: 'rgb(96,121,255)',
            borderWidth: 1
          }]
        },
        options: {
          plugins: {
            title: {
              display: true,
              font: {
                size: 16,
              }
            }
          },
          scales: {

            y: {
              beginAtZero: true,

            }
          }
        }
      });
    },

    typeContent() { // 타이핑 효과 함수
      const content = 'AI 요약 내용을 여기에 입력하세요.';
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < content.length) {
          document.getElementById('typing-text').textContent += content.charAt(i);
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, 50); // 타이핑 속도 조절 가능
    }
  }
}
</script>


<style scoped lang="scss">

.tablinks {
  border-radius: 7px 7px 0 0;
  background: rgba(96,121,255,0.9);
  line-height: 24px;
  padding: 10px 30px;
  font-size: 1.1rem;
  width: auto;
  font-family: 'Gmarket Sans', sans-serif;
  font-weight: bold;
  color: #ffffff;
  border: 1px;
}

.tablinks:hover {
  background: rgba(255, 255, 255, 0.71);
}

.active {
  background: rgba(255, 255, 255, 0.71);
  color: #413090
}

.contents {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 80%;
  background: rgba(255, 255, 255, 0.71);
  border-radius: 0 10px 10px 10px;
  color: #413090;
  box-shadow: 2px 2px 4px rgba(184, 182, 182, 0.3);
}

.item {
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
  transition: all 0.8s ease;
}

/* 트랜지션 전용 스타일 */
.v-leave-active {
  position: absolute;
}

.v-enter {
  transform: translateX(-50%);
  opacity: 0;

}

.v-leave-to {
  transform: translateX(50%);
  opacity: 0;

}
//테이블 스타일
table{
  width: 100%;
  height: 100%;
  border-collapse: collapse;
}
td {
  text-align: center;
  padding: 2%;
}

#tableOnline1{
  border-radius:  0 0  0 15px ;
}
#tableOnline2{
  border-radius: 0 0 15px   0 ;
}
#tableTarget1{
  border-radius:  15px 0  0 0;
}
#tableTarget2{
  border-radius: 0 15px  0 0;
}
.tableTitle {
  font-size: 0.9rem;
  font-weight: bold;
  color: #000000;
  padding: 10px;
  background: rgba(229, 244, 250, 0.71);
}

.tableContent {
  font-size: 0.8rem;
  background: rgba(255, 255, 255, 0.47);
  color: #000000;
}
.infoTableCaption{
  font-family: 'Gmarket Sans', sans-serif;
  font-weight: bold;
  font-size: 1.1rem;
  padding: 0  0 3% 0;
}
.Menu-Wrap{
  height: 300px;
  .Menu1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;

    .certifiCard {
      margin:10px;
      width: 350px;
      height: 220px;
      background: rgba(255, 255, 255, 0.71);
      border-radius: 10px;
      color: #413090;
      box-shadow: 2px 2px 4px rgba(184, 182, 182, 0.3);
    }
    .btnWrap{
      width: 100%;
      height: 50px;

      .Btns{
        box-shadow: 2px 2px 4px rgba(184, 182, 182, 0.3);
        height:50px; width: 30%;
        color: #413090;
        background: rgba(255,255,255,0.9);
        border: 1px solid #413090;
        border-radius:10px;

        &:nth-child(3){
          width: 50px;
          border-radius: 50px;
        }

      }
    }
  }
  .Menu2{
    height: 100%;
    border-radius: 10px ;
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
}



/*자격증 카드*/

.material-symbols-outlined {
  font-size: 150%;
}

#heart.filled {
  color: red;
}

.lineChartTitle {
  font-family: 'Gmarket Sans', sans-serif;
  font-weight: bold;
  font-size: 1.2rem;
  color: #413090;

}
.review-item {
  border-bottom: 1px solid rgba(156, 135, 251, 0.71);
  padding: 20px 0;
  font-family: 'Gmarket Sans', sans-serif;
  font-weight: bold;
  font-size: 1rem;
}
/*미디어쿼리 800*/
@media screen and (max-width: 800px) {
  .Menu1 {
    flex-direction: column;
    align-items: center;


  }

  .Menu3 {
    order: -1;
    width: 100%;
  }

  .Menu2 {
    width: 100%;
  }
  .backgroundCerti {
    width: 100%
  }


  .certifiCard {
    display: none;
  }

  .aiSummary {
    width: 40%;
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
