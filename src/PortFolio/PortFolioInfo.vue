<template>
  <q-card class="info-card"  >
    <div class="column ">
      <div class="name-job-wrap col-6 flex row items-center justify-between" >

        <!-- 프로필사진, 닉네임 묶음-->
        <div style="width: 50%">
          <q-avatar style="margin :5%; ">
            <img class="ProfileImg" src="https://cdn.quasar.dev/img/boy-avatar.png" alt="프로필사진">
          </q-avatar>

          <span class="text-h4">John</span>
        </div>
        <q-btn  class="jobbtn text-accent" >프론트앤드</q-btn>
      </div>
      <!-- 인스타, 깃허브 연동-->
      <div class="insta-git-wrap col-6 flex items-center justify-evenly" >
        <q-btn class="instabtn" color="accent">instagram</q-btn>
        <q-btn class="gitbtn" color="accent">Github</q-btn>
      </div>
    </div>
  </q-card>
</template>
<script setup>

</script>



<style scoped lang="scss">
.info-card{
  border-radius: 15px;
  padding: 7%;
}

.instabtn, .gitbtn{
  border-radius: 12px;
}

.jobbtn{
  border-radius: 10px;
  font-size: 1rem;
}
.name-job-wrap{
  margin-bottom: 20px;
}
.insta-git-wrap{
  width:60%;
}
.ProfileImg{
  height: 70%; width:80%
}
</style>
