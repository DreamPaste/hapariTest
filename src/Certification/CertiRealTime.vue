<template>

  <q-card class="flex align-center justify-center bg-white text-blue-9" flat bordered style=" width:90%; margin:2%; padding:2%;  height:620px ;border-radius: 10px">
    <q-card-section>
      <div class="flex align-center justify-center text-bold" style="font-size : 1.7rem; margin :15% 5%">
        <!-- 아이콘 사야함 !!! -->
        <img src = "src/assets/Image/순위.jpg" alt="순위" style="width:15%; height: 15%; margin-right:5%"/>실시간 검색어</div>
      <!-- 실시간 검색어의 자격증순서 묶음-->
      <div class="flex align-center justify-center" style="font-size :1.2rem; width:90%">
        <div class="RealTime-CertName " style="font-size: 1.5rem">
          1. 정보처리기사
          <q-chip class="bg-red-1 text-red-9" >▲  3</q-chip>
        </div>
        <div class="RealTime-CertName" style="font-size: 1.4rem">
          2. 정보처리기사
          <q-chip class="bg-orange-1 text-orange-9">----</q-chip>
        </div>
        <div class="RealTime-CertName" style="font-size: 1.3rem">
          3. 정보처리기사
          <q-chip class="bg-blue-2 text-blue-9">▼ 3</q-chip>
        </div>
        <div class="RealTime-CertName">
          4. 정보처리기사
          <q-chip class="bg-orange-1 text-orange-9">----</q-chip>
        </div>
        <div class="RealTime-CertName">
          5. 정보처리기사
          <q-chip class="bg-orange-1 text-orange-9">----</q-chip>
        </div>
        <div class="RealTime-CertName">
           6. 정보처리기사
          <q-chip class="bg-blue-2 text-blue-9">▼ 1</q-chip>
        </div>
        <div class="RealTime-CertName">
          7. 정보처리기사
          <q-chip class="bg-red-1 text-red-9">▲  2</q-chip>
        </div>
        <div class="RealTime-CertName">
          8. 정보처리기사
          <q-chip class="bg-orange-1 text-orange-9">----</q-chip>
        </div>



      </div>
    </q-card-section>



  </q-card>
</template>
<script setup>

</script>


<style scoped lang="scss">
.RealTime-CertName{
  margin:3%;
}
</style>
