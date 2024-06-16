<template>
  <q-card class="contentCard" >
  <div class="content-wrapper column">
    <div class="protfile col-2 text-primary text-bold " >Protfolio</div>

    <div class="pr-introduce col-8 " >해파리 포트폴리오입니다 자신을 소개하는 글을 간단하게 적어주세요. 해파리 포트폴리오입니다 자신을 소개하는 글을 간단하게 적어주세요. 소개소개소개</div>

    <!-- 최근 프로젝트 -->
    <div class="column ">
      <div class="text-primary text-h5 q-my-md " >
          전체 프로젝트
      </div>
      <div class="project-wrapper row q-gutter-sm no-wrap">
        <q-card class="project-card-wrapper column items-center" v-for="index in 5" :key="index">
          <img class="q-pa-sm" src = "src/assets/Image/프로젝트.jpg" alt="프로젝트" />
          <span class="q-pa-sm">프로젝트명1</span>
        </q-card>
      </div>
    </div>
      <div class="text-primary text-h5 q-my-md">
        최근 스터디
      </div>
      <q-list>
        <q-item v-for="index in 3" :key="index">
          <q-item-label >스터디 제목입니다.</q-item-label>
        </q-item>
      </q-list>

    <q-card-actions class="row q-my-sm" align="left">
      <q-btn class="text-accent" padding="10px 15px" rounded icon="img:src/assets/Image/보라색 하트.png" label="fallow"/>
      <q-btn class="text-accent" padding="10px 15px"   rounded icon="img:src/assets/Image/메시지.png" label="message"/>
    </q-card-actions>
  </div>
  </q-card>
</template>

<script setup>

</script>

<style scoped lang="scss">

.project-wrapper {
  overflow: auto;
  width: 100%;
  max-width: 100%;
}

.project-card-wrapper{
    width:30%;
    min-width: 30%;

 }
.contentCard{
  border-radius: 15px;
  padding: 7%;
  height:100%;
  width: 100%
}

.protfile{
  font-size: 2rem;
  margin-bottom:5%
}
.pr-introduce{
  font-size: 1rem;
  margin-bottom: 10%
}
</style>
