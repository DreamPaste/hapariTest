<template>
  <div class="container flex items-center justify-center" style="background: #f8f8f8; display: flex; justify-content: center; margin: 100px 0;">
    <div class="backgroundCertiMain flex column items-center justify-center" style="background: #ffffff; padding : 2%; height: 100%; width: 1200px;">

      <!-- 검색기능 -->
      <div class="col-2 row flex align-center justify-center" style="width:100%; margin-bottom: 1%">
        <q-input color="indigo-2" rounded outlined v-model="text" style="width:80%; font-size: 18px">
          <template v-slot:prepend>
            <q-icon class="text-indigo-2 " name="search"   size="33px"/>
          </template>

          <!-- 텍스트 -->
          <template v-slot:append>

          </template>
        </q-input>

      </div>
      <!-- 실시간, 달력, 추천자격증 묶음 -->
      <div class="col-5 row flex align-center justify-center" style=" width:100%; height:700px">
        <!-- 실시간 -->
        <div class="col-4 column flex align-center justify-center" >
          <CertiRealTime />
        </div>

        <!--  달력, 추천자격증 묶음 -->
        <div class="col-8 column flex align-center justify-center">
          <!--추천자격증 -->
          <div class="col-4 row flex align-center justify-center" style="width:100% ; padding:1%">

            <q-card class="my-card bg-white text-indigo-9" flat bordered  style="width:100% ; font-size :1.3rem; padding:2% ; border-radius: 10px">


              <q-card-section horizontal >
                <q-card-section class="col-4 column" style="height:180px;">
                  <!-- 아이콘 사야함 !!! -->
                  <img src = "src/assets/Image/컴퓨터.png" alt="아이콘" style="width:86%; height: 100%"/>
                </q-card-section>

                <q-separator vertical />

                <q-card-section class="col-8 column flex align-center justify-center" style="height:180px; ">
                  <q-card-section class="col-8 row " style="width: 100%;">
                    자격증 설명 들어가는 자리
                  </q-card-section>

                  <q-card-section class="col-4 row flex align-end justify-end">
                    <q-btn class="bg-indigo-1 text-indigo-9" flat  icon="navigation" label="접수하기" style="border-radius: 10px"/>
                  </q-card-section>
                </q-card-section>
              </q-card-section>
            </q-card>

          </div>
          <!--  달력, 접수중인자격증 묶음 -->
          <div class="col-7 row flex align-center justify-between" >
            <!--  달력 -->
            <div class="col-6 column flex align-center justify-center" style="width :50% ; ">

            <CertiDate style="padding:2%"/>

            </div>

            <div class="col-6 column flex align-center justify-center" style="width :47% ; padding:1%">
              <q-card flat bordered Horizontal class="flex align-center justify-center" style="height: 95%; border-radius: 10px; padding:2%; ">
                <q-card-section class="col-3 row flex align-center justify-center text-indigo-9 text-bold"
                                style="margin:2%; width : 80% ; height :70px; border-bottom:1px solid rgba(185,185,185,0.55)" >
                  <img src = "src/assets/Image/체크.png" alt="체크" style="width:16%; height: 90%; "/>
                  &nbsp; <span class="checkCerti" style="font-size: 1.5rem"> 접수중인 자격증</span>

                </q-card-section>

                <div class="q-gutter-sm">
                  <div v-for="(certification, index) in certifications" :key="index" style="width: 100%">
                    <q-checkbox
                      class="text-indigo-5"
                      v-model="certification.checked"
                      :label="certification.label"
                      color="indigo-4"
                      style="font-size: 1.3rem;
                               margin:2%"
                    />
                  </div>
                </div>

              </q-card>
            </div>
          </div>

        </div>
      </div>

      <!-- 국가자격, 그래프, 정보플러스 묶음 -->
      <div class="col-5 row flex align-center justify-center" style="width:100%">
        <!-- 국가자격, 민간 자격관련 -->
      <div class="col-6 column flex align-center justify-center" style="padding: 1%; ">
        <!-- 국가자격, 민간 자격-->
        <div v-for="(treeData, index) in treeList" :key="index" class="col-6 column">
          <q-card flat bordered style="padding: 5%; border-radius: 10px; margin-top: 2%">
            <div class="col-3 flex row align-center justify-between">
              <span class="text-indigo-7 text-bold" style="font-size: 1.5rem">{{ treeData.title }}</span>
              <q-btn flat class="text-indigo-7 bg-indigo-1" style="border-radius: 20px">더보기</q-btn>
            </div>
            <div class="col-9 row" style="height: 315px; margin-top: 5%">
              <div class="col-6 column" v-for="(nodeData, nodeIndex) in treeData.nodes" :key="nodeIndex">
                <q-tree
                  :nodes="nodeData"
                  node-key="label"
                  style="font-size: 1rem;
                     margin-bottom: 5%"
                />
              </div>
            </div>
          </q-card>
        </div>
        </div>
        <!-- 그래프, 정보플러스 묶음 -->
      <div class="col-6 column flex align-center justify-center" style="height: 900px; ">
        <div class="col-4 column flex align-center justify-center" style="width:100%; padding:2%;">
          <q-card class="graphbox flex align-center justify-center" flat
                  style="height:100%; padding:2%; border-radius: 10px;
">
          <CertiMainHorizontal style="width:100%;  padding:2% ; "/>
          </q-card>
        </div>
        <div class="col-8 column flex align-center justify-center" style="padding:2%">
          <q-card flat bordered style="width: 100%; height: 100%; border-radius: 10px; padding: 2%;">
            <q-card-section class="col-2 row" style="display: flex; align-items: center; justify-content: space-between;">
              <div style="display: flex; align-items: center; width: 60%;">
                <span class="text-bold text-indigo-7" style="font-size: 1.8rem;">정보 PLUS</span>
                <img src="src/assets/Image/플러스.png" alt="플러스" style="width: 11%; height: 10%; margin-left: 10px;" />
              </div>
              <q-btn flat class="bg-indigo-1 text-indigo-9" style="border-radius:18px " @click="goInfoPlus">더보기</q-btn>
            </q-card-section>

            <!-- 정보플러스 1 -->
            <q-card-section class="col-5 row " style="width: 100%;font-size: 1.3rem; margin:2%">
              <q-card-section horizontal >
                <q-card-section class="col-4 column" style="height:180px;">
                  <!-- 아이콘 사야함 !!! -->
                  <img src = "src/assets/Image/자격증 썸네일1.jpg" alt="자격증 썸네일" style="width:100%; height: 100%"/>
                </q-card-section>

                <q-separator vertical />

                <q-card-section class="col-8 column flex align-center justify-center" style="height:180px; ">
                  <q-card-section class="col-8 row " style="width: 100%; font-size:1rem">
                   자격증 관련 정보!?뉴스!?
                  </q-card-section>

                  <q-card-section class="col-4 row flex align-end justify-center">
                    <q-btn class="bg-red-1 text-red-9" flat  icon="favorite" label="좋아요" style="border-radius: 10px"/>
                  </q-card-section>
                </q-card-section>
              </q-card-section>
            </q-card-section>

            <!-- 정보플러스 2 -->
            <q-card-section class="col-5 row" style="width: 100%;font-size: 1.3rem; margin:2%">
              <q-card-section horizontal >
                <q-card-section class="col-4 column" style="height:180px;">
                  <!-- 아이콘 사야함 !!! -->
                  <img src = "src/assets/Image/자격증 썸네일1.jpg" alt="자격증 썸네일" style="width:100%; height: 100%"/>
                </q-card-section>

                <q-separator vertical />

                <q-card-section class="col-8 column flex align-center justify-center" style="height:180px; ">
                  <q-card-section class="col-8 row " style="width: 100%;font-size:1rem">
                    자격증 관련 정보!?뉴스!?
                  </q-card-section>

                  <q-card-section class="col-4 row flex align-end justify-center">
                    <q-btn class="bg-red-1 text-red-9" flat  icon="favorite" label="좋아요" style="border-radius: 10px"/>
                  </q-card-section>
                </q-card-section>
              </q-card-section>
            </q-card-section>
          </q-card>
        </div>
      </div>

      </div>
    </div>
  </div>

  </template>
<script>
import CertiRealTime from 'src/Certification/CertiRealTime.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import CertiDate from 'src/Certification/CertiDate.vue';
import CertiMainHorizontal from 'src/Certification/CertiMainHorizontal.vue';
import { api } from "boot/axios";

export default {
  components: {
    CertiMainHorizontal,
    CertiDate,
    CertiRealTime,
  },
  setup() {
    const router = useRouter();
    const text = ref('');
    const certifications = ref([
      { label: '정보처리기사', checked: false },
      { label: '정보처리기사', checked: false },
      { label: '정보처리기사', checked: false },
      { label: '정보처리기사', checked: false },
    ]);

    const goInfoPlus = () => {
      router.push({ name: 'InfoPlus' });
    };

    const InfoCerti = async () => {
      console.log("자격증 테스트중");

      try {
        const response = await api.get(`/api/certification/${this.certificationName}`);
        if (response && response.status === 200) {
          console.log('테스트 결과:', this.certificationName);
        }
      } catch (error) {
        console.error('테스트 결과 오류:', error.response.msg);
      }
    };

    const treeList = ref([
      {
        title: '국가 자격증',
        nodes: [
          [{ label: '대한민국 한자 교육 연구회', children: [{ label: 'Good food' }, { label: 'Good service' }] }],
          [{ label: '기술 자격증', children: [{ label: '기술 시험' }, { label: '기술 인증' }] }]
        ]
      },
      {
        title: '민간 자격증',
        nodes: [
          [{ label: 'IT 자격증', children: [{ label: '프로그래밍' }, { label: '데이터베이스' }] }],
          [{ label: '디자인 자격증', children: [{ label: '그래픽 디자인' }, { label: '웹 디자인' }] }]
        ]
      }
    ]);

    return {
      text,
      certifications,
      goInfoPlus,
      InfoCerti,
      treeList
    };
  }
};
</script>


<style scoped lang="scss">
.graphbox{
  background: linear-gradient(90deg, rgb(226, 220, 254) 0%, rgb(215, 207, 252) 30%, rgb(219, 217, 251) 60%, rgb(213, 194, 255) 100%);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

}
</style>
