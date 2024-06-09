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
                  &nbsp; <span class="checkCerti text-primary" style="font-size: 1.5rem"> 접수중인 자격증</span>

                </q-card-section>

                <div class="q-gutter-sm">
                  <div v-for="(certification, index) in certifications" :key="index" style="width: 100%">
                    <q-checkbox
                      class="text-accent"
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
      <div class="col-6 column flex align-center justify-center">
        <!-- 국가자격, 민간 자격-->
       <nationalCertification/>
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
<MainInfoPlus/>
        </div>
      </div>

      </div>
    </div>
  </div>

  </template>
<script>
import CertiRealTime from 'src/Certification/CertiRealTime.vue';
import { ref } from 'vue';
import CertiDate from 'src/Certification/CertiDate.vue';
import CertiMainHorizontal from 'src/Certification/CertiMainHorizontal.vue';
import nationalCertification from 'src/Certification/nationalCertification.vue';
import MainInfoPlus from 'src/Certification/MainInfoPlus.vue';
import { api } from "boot/axios";

export default {
  components: {
    CertiMainHorizontal,
    CertiDate,
    CertiRealTime,
    nationalCertification,
    MainInfoPlus,
  },
  setup() {
    const text = ref('');
    const certifications = ref([
      { label: '정보처리기사', checked: false },
      { label: '정보처리기사', checked: false },
      { label: '정보처리기사', checked: false },
      { label: '정보처리기사', checked: false },
    ]);

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
      InfoCerti,
    };
  }
};
</script>


<style scoped lang="scss">
.graphbox{
  background: linear-gradient(20deg, rgb(229, 231, 255) 0%, rgba(224, 220, 253, 0.86) 30%, rgb(241, 227, 255) 60%, rgb(224, 220, 251) 100%);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

}
</style>
