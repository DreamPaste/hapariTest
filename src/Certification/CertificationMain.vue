<template>
  <div class="container flex items-center justify-center" style="background: #f8f8f8; display: flex; justify-content: center; margin: 100px 0;">
    <div class="backgroundCertiMain flex column items-center justify-center" style="background: #ffffff; padding : 2%; height: 100%; width: 1200px;">

      <!-- 검색기능 -->
      <div class="col-2 row flex align-center justify-center" style="width:100%">
        <q-input color="blue-2" rounded outlined v-model="text" style="width:80%">
          <template v-slot:prepend>
            <q-icon class="text-blue-2 " name="search"   size="33px"/>
          </template>

          <!-- 텍스트 -->
          <template v-slot:append>

          </template>
        </q-input>

      </div>
      <!-- 실시간, 달력, 추천자격증 묶음 -->
      <div class="col-5 row flex align-center justify-center" style="background: #9C27B0; width:100%">
        <!-- 실시간 -->
        <div class="col-4 column flex align-center justify-center" style="background: #c49b66;"> 실시간 검색</div>

        <!--  달력, 추천자격증 묶음 -->
        <div class="col-8 column flex align-center justify-center" style="background: #27b097; ">
          <!--추천자격증 -->
          <div class="col-6 row flex align-center justify-center" style="background: #6927b0; ">

          </div>
          <!--  달력, 접수중인자격증 묶음 -->
          <div class="col-6 row flex align-center justify-center" style="background: #cf8f8f; ">
            <!--  달력 -->
            <div class="col-7 column flex align-center justify-center" style="background: #f6e100; ">

            </div>
            <!--  접수중인자격증 묶음 -->
            <div class="col-5 column flex align-center justify-center" style="background: #8fa1cf; ">

            </div>
          </div>

        </div>
      </div>

      <!-- 전공관련, 그래프, 정보플러스 묶음 -->
      <div class="col-5 row flex align-center justify-center" style="background: #c48ecd; width:100%">
        <!-- 전공관련 -->
      <div class="col-7 column flex align-center justify-center" style="background: #caf497;">
전공관련
        </div>
        <!-- 그래프, 정보플러스 묶음 -->
      <div class="col-5 column flex align-center justify-center" >
        <div class="col-4 column flex align-center justify-center" style="background: #048d03;">
        </div>
        <div class="col-8 column flex align-center justify-center" style="background: #002e4e;">
        </div>
      </div>

      </div>
    </div>
  </div>

  </template>
  <script>
  import { ref } from 'vue'

  export default {
    setup () {
      return {
        text: ref('')
      }
    }
  }
  </script>

<style scoped lang="scss">

</style>
