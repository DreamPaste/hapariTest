<template>
  <div class="container" style="background: #f8f8f8; display: flex; justify-content: center; margin: 100px 0;">
  <div class="backgroundCerti flex column items-center justify-center" style="background: #ffffff; padding : 2%; height: 100%; width: 1200px;">

    <!-- 검색 결과 갯수 표출 -->
    <div class="col-2 flex items-center justify-center"  style=" width: 100%; margin:2%" >
      <span class="text-indigo-9 text-bold" style="font-size: 1.5rem">
          '<span class="highlight text-indigo-3">{{ SearchName }}</span>'에 대한 검색 결과는 {{ SearchCount }}개 입니다
        </span>
    </div>
    <!-- 검색기능 -->
    <div  class="col-2 flex items-center justify-center" style=" width: 100%; margin:2%">
      <q-input color="indigo-2" rounded outlined v-model="text" style="width:80%; font-size: 18px">
        <template v-slot:prepend>
          <q-icon class="text-indigo-2 " name="search"   size="33px"/>
        </template>

        <template v-slot:append>

        </template>
      </q-input>
    </div>

    <!--결과 탭 -->
    <div  class="col-6 flex column items-center justify-center" style=" width: 100% ;margin:2%">
        <div class="tab-buttons flex items-center justify-center" style="width: 100%">
          <button style="width: 13%"
                  :class="{ active: activeTab === 'all' }"
                  @click="activeTab = 'all'"
          >
            전체
          </button>
          <button style="width: 13%"
                  :class="{ active: activeTab === 'certificate' }"
                  @click="activeTab = 'certificate'"
          >
            자격증
          </button>
          <button style="width: 13%"
                  :class="{ active: activeTab === 'contest' }"
                  @click="activeTab = 'contest'"
          >
            공모전
          </button>
          <button style="width: 13%"
                  :class="{ active: activeTab === 'community' }"
                  @click="activeTab = 'community'"
          >
            커뮤니티
          </button>
          <button style="width: 13%"
                  :class="{ active: activeTab === 'study' }"
                  @click="activeTab = 'study'"
          >
            스터디
          </button>
          <button style="width: 13%"
                  :class="{ active: activeTab === 'news' }"
                  @click="activeTab = 'news'"
          >
            뉴스
          </button>
        </div>

        <div class="tab-content  column" style="width: 80%">
          <div v-if="activeTab === 'all'" class="tab-panel">
            <div class="column" style="width: 100%; margin-bottom: 3%">
              <div class="row ">
              <img src = "src/assets/Image/자격증.png" alt="자격증 아이콘" style="width:4%; height: 4%; margin-right: 2%"/>
                <span class="flex items-center justify-center text-blue-9 text-bold" style="font-size: 1.3rem">자격증</span>
              </div>
            </div>
            <div class="column" style="width: 100%; margin-bottom: 3%">
              <div class="row ">
                <img src = "src/assets/Image/공모전.png" alt="공모전 아이콘" style="width:4%; height: 4%; margin-right: 2%"/>
                <span class="flex items-center justify-center text-blue-9 text-bold" style="font-size: 1.3rem">공모전</span>
              </div>
            </div>
            <div class="column" style="width: 100%; margin-bottom: 3%">
              <div class="row ">
                <img src = "src/assets/Image/커뮤니티.png" alt="커뮤니티 아이콘" style="width:4%; height: 4%; margin-right:2%"/>
                <span class="flex items-center justify-center text-blue-9 text-bold" style="font-size: 1.3rem">커뮤니티</span>
              </div>
            </div>
            <div class="column" style="width: 100%;margin-bottom: 3%">
              <div class="row ">
                <img src = "src/assets/Image/스터디.png" alt="스터디 아이콘" style="width:4%; height: 4%; margin-right: 2%"/>
                <span class="flex items-center justify-center text-blue-9 text-bold" style="font-size: 1.3rem">스터디</span>
              </div>
            </div>
            <div class="column" style="width: 100%">
              <div class="row ">
                <img src = "src/assets/Image/뉴스.png" alt="뉴스 아이콘" style="width:4%; height: 4%; margin-right: 2%"/>
                <span class="flex items-center justify-center text-blue-9 text-bold" style="font-size: 1.3rem">뉴스</span>
              </div>
            </div>

          </div>
          <div v-if="activeTab === 'certificate'" class="tab-panel">

          </div>
          <div v-if="activeTab === 'contest'" class="tab-panel">

          </div>
          <div v-if="activeTab === 'community'" class="tab-panel">

          </div>
          <div v-if="activeTab === 'study'" class="tab-panel">

          </div>
          <div v-if="activeTab === 'news'" class="tab-panel">

          </div>
        </div>
    </div>
    <!--홈 이동 버튼 -->
    <div  class="col-2 flex items-center justify-center" style="width: 100%">
      <q-btn flat class="text-indigo-9 bg-indigo-1" style="border-radius: 15px; font-size: 1rem"> 홈으로</q-btn>
    </div>

  </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  data() {
    return {
      activeTab: 'all',
    };
  },
};
</script>


<style scoped lang="scss">
.tab-buttons button {
  padding: 0.5rem 1rem;
  border: none;
  background: #ffffff;
  cursor: pointer;
  font-size: 1.1rem;
  border-radius: 10px 10px 0 0;
  color: #9877ed;
  transition: all 0.3s ease;
}

.tab-buttons button.active {
  color: #7747ef;
  font-weight: bold;
  background: rgba(217, 214, 246, 0.72);
  font-size: 1.2rem;
}

.tab-content {
  padding: 2%;

}

.tab-panel.active {
  display: block;
}
</style>
