<template>
  <div class="infoTab col-12 flex column" style="width: 100%; height: auto;">
    <div class="tabs">
      <div>
        <button class="tablinks" @click="openTab('tab1')" :class="{active: currentId === 'tab1'}">상세정보</button>
        <button class="tablinks" @click="openTab('tab2')" :class="{active: currentId === 'tab2'}">관련기사</button>
        <button class="tablinks" @click="openTab('tab3')" :class="{active: currentId === 'tab3'}">합격자 후기</button>
      </div>
    </div>
    <div class="contents" style="width : 100%">
      <transition>
        <section class="item" :key="currentId">
          <!-- 탭 2일 때 -->
          <template v-if="currentId === 'tab2'">
            <!-- 관련 기사 정렬버튼 -->
            <div style="display: flex; justify-content: flex-end;">
              <q-btn-dropdown style="background: rgba(96,121,255,0.9); color: white;" label="Dropdown Button ">
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
            <div v-for="item in 30" :key="item" @click="increaseViewCount(item)">
              <q-card class="q-ma-sm q-pa-sm" flat bordered style="font-family: 'Gmarket Sans', sans-serif; font-weight: bold; padding : 10px ; width : 99%; height : 180px">
                <div class="newsWrap row  " style=" height : 100%">
                  <!-- 뉴스기사 썸네일 -->
                  <div class="news-Thumbnail col-2 flex column items-center justify-center" style="border: 1px solid #413090;" >
                    썸네일
                  </div>

                  <!-- 뉴스 제목, 내용, 조회수 묶음-->
                  <div class="news-contents col-10 flex column " style="font-family: 'Gmarket Sans', sans-serif; font-weight: bold;">
                    <!-- 뉴스제목  -->
                    <div class="news-Title col-5 flex row items-center justify-start" style=" padding:30px 0 0 20px ;  font-size: 1.3rem ">
                      뉴스제목{{ item }}
                    </div>
                    <!-- 뉴스기사 내용 -->
                    <div class="news-article col-5 flex row items-center justify-start" style=" padding:0 0 0 25px   ;  font-size: 0.9rem">
                      뉴스기사{{ item }}
                    </div>
                    <!-- 조회수 -->
                    <div class="news-click col-2 flex row items-center justify-end" >

                      조회수: {{ viewCounts[item] || 0 }}
                    </div>
                  </div>
                </div>
              </q-card>
            </div>
          </template>

          <!-- 탭 3일 때 -->
          <template v-if="currentId === 'tab3'">
            <div style="display: flex; justify-content: flex-end;">
              <button class="writeBtn" style="border-radius: 10px; background: rgba(96,121,255,0.9); margin-bottom: 10px; height: 30px; width: 20%; border: 0;" @click="goToCertiReview">
                      <span class="recepWord" style="color: white; font-size: 0.8rem; font-family: 'Gmarket Sans', sans-serif; font-weight: bold; ">
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
              <q-card flat bordered style="font-family: 'Gmarket Sans', sans-serif; font-weight: bold; width:100%; height :100%; margin-bottom: 10px; border-color: #413090;">
                <div class="reviewsList">

                  <!-- 자격증 후기 제목, 아이디, 작성시간  -->
                  <div class=" col-3 flex row " style=" height :100%; border-bottom: 1px solid #413090; font-size: 0.8rem;  ">
                    <div class="col-4 flex column items-center justify-center" style="border-right:1px solid #413090 "> {{certificationId}}</div>
                    <div class="col-2 flex column items-center justify-center" style="border-right:1px solid #413090 "> {{createdAt}}</div>
                    <div class="col-2 flex column items-center justify-center"  style="border-right:1px solid #413090 ">{{ userId }}</div>
                    <div class="col-2 flex column items-center justify-center"  style="border-right:1px solid #413090 ">조회수</div>
                    <div class="col-2 flex column items-center justify-center" >좋아요 수</div>
                  </div>
                  <!-- 자격증 후기 제목 -->
                  <div class=" col-3 flex row items-center justify-start" style=" font-size: 1.3rem; margin-bottom: 20px  ">
                    {{title}}자격증 제목
                  </div>
                  <!-- 자격증 후기 내용 -->
                  <div class=" col-6 flex row items-center justify-start" style=" font-size: 1.1rem; ">
                    {{content}}자격증 내용
                  </div>
                </div>
              </q-card>
              <div class="goodModBtn flex items-center justify-center" >
                <q-btn icon = "thumb_up"  label="도움이 돼요"
                       style="border: 1px solid #413090;
                          color: #413090;
                          background: rgba(255, 255, 255, 0.71);
                          font-family: 'Gmarket Sans', sans-serif;
                           font-weight: bold;
                          font-size:0.8rem;
                          margin-right: 1%"/>
                <q-btn @click="goToModifyPage" label="수정하기"
                       style="border: 1px solid #413090;
                          color: #413090;
                          background: rgba(255, 255, 255, 0.71);
                          font-family: 'Gmarket Sans', sans-serif;
                           font-weight: bold;
                          font-size:0.8rem" />
              </div>
            </div>
          </template>
        </section>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    certificationId: {
      type: String,
      required: true
    },
    userId: {
      type: String,
      required: true
    },
    createdAt: {
      type: String,
      required: true,

    },
  },

  data() {
    return {
      tab: "tab1",
      currentId: "tab1",
      list: ["tab1", "tab2", "tab3"],
      current: "tab1",
      news_content: [],
      reviews: [],
      viewCounts: {}, // 빈 객체로 초기화
      reviewList: 0,
    };
  },

  mounted() {
    this.tab = this.list[0];
    this.currentId = this.list[0];
  },

  methods:{
    onItemClick() {
      console.log("Item clicked");
    },
    openTab(tabId) {
      this.currentId = tabId;
    },
    increaseViewCount(item) {
      // 해당 뉴스 카드의 조회수 증가
      if (this.viewCounts[item]) {
        this.viewCounts[item]++;
      } else {
        this.viewCounts[item] = 1; // Vue 인스턴스가 아닌 객체에 속성을 추가합니다.
      }
    },
    goToModifyPage() {
      this.$router.push({
        name: "CertiModify",
        params: { certificationId: this.certificationId, userId: this.userId },
      });
    },
    goToCertiReview() {
      this.$router.push({
        name: "CertiReview",
        params: { certificationId: this.certificationId, userId: this.userId },
      });
      console.log("Certification ID:", this.certificationId);
      console.log("User ID:", this.userId);
    },
  }
}

</script>

<style scoped lang="scss">
.tablinks {
  border-radius: 7px 7px 0 0;
  background: rgba(71, 99, 248, 0.9);
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
  color: #413090;
}

.active {
  background: rgba(255, 255, 255, 0.71);
  color: #413090;
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

}
</style>
