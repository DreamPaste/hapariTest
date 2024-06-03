<template>
  <div class="container flex items-center justify-center" style="background: #f8f8f8; display: flex; justify-content: center; margin: 100px 0;">
    <div class="backgroundCertiMain flex column items-center justify-center" style="background: #ffffff; padding : 2%; height: 100%; width: 1200px;">

      <!-- 검색기능 -->
      <div class="col-2 row flex align-center justify-center" style="width:100%; margin-bottom: 1%">
        <q-input color="blue-2" rounded outlined v-model="text" style="width:80%; font-size: 18px">
          <template v-slot:prepend>
            <q-icon class="text-blue-2 " name="search"   size="33px"/>
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

            <q-card class="my-card bg-white text-blue-9" flat bordered  style="width:100% ; font-size :1.3rem; padding:2% ; border-radius: 10px">


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
                    <q-btn class="bg-blue-1 text-blue-9" flat  icon="navigation" label="접수하기" style="border-radius: 10px"/>
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
                <q-card-section class="col-3 row flex align-center justify-center text-blue-9 text-bold"
                                style="font-size: 1.5rem; margin:2%; width : 80% ; height :70px; border-bottom:1px solid rgba(185,185,185,0.55)" >
                  <img src = "src/assets/Image/경고등.jpg" alt="경고등" style="width:14%; height: 80%; "/>
                  &nbsp; 접수중인 자격증

                </q-card-section>

                <div class="q-gutter-sm">
                  <div v-for="(certification, index) in certifications" :key="index" style="width: 100%">
                    <q-checkbox
                      class="text-blue-6"
                      v-model="certification.checked"
                      :label="certification.label"
                      color="blue-4"
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

      <!-- 전공관련, 그래프, 정보플러스 묶음 -->
      <div class="col-5 row flex align-center justify-center" style="width:100%">
        <!-- 전공관련 -->
      <div class="col-6 column flex align-center justify-center" style="background: #caf497;">
전공관련
        </div>
        <!-- 그래프, 정보플러스 묶음 -->
      <div class="col-6 column flex align-center justify-center" style="height: 900px; ">
        <div class="col-4 column flex align-center justify-center" style="width:100%; padding:2%;">
          <q-card class="flex align-center justify-center" flat bordered
                  style="height:100%; padding:2%; border-radius: 10px">
          <CertiMainHorizontal style="width:100%;  padding:2%"/>
          </q-card>
        </div>
        <div class="col-8 column flex align-center justify-center" style="padding:2%">
          <q-card flat bordered style="width: 100%; height: 100%; border-radius: 10px; padding: 2%;">
            <q-card-section class="col-2 row" style="display: flex; align-items: center; justify-content: space-between;">
              <div style="display: flex; align-items: center; width: 60%;">
                <span class="text-bold text-blue-9" style="font-size: 1.8rem;">정보 PLUS</span>
                <img src="src/assets/Image/플러스.png" alt="플러스" style="width: 12%; height: 12%; margin-left: 10px;" />
              </div>
              <q-btn flat class="bg-blue-1 text-blue-9" style="border-radius:18px " @click="goInfoPlus">더보기</q-btn>
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
import {api} from "boot/axios";

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
    return {
      text,
      certifications,
      goInfoPlus,
      InfoCerti,
    };
  }
};
</script>


<style scoped lang="scss">

</style>
