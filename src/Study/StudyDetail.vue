<template>
<div>
  <q-card flat bordered style="border-radius: 10px; padding:3%; width: 100%; height: 100%">

    <table >
      <tr >
        <td class="ContestTableTitle   text-indigo-5"  >모집기간</td>
        <td class="DetailContent flex items-center justify-start" id="tableTarget2">2020.01.04~2020.02.01 {{StartDate}}~{{EndDate}}</td>
      </tr>
      <tr>
        <td class="ContestTableTitle  text-indigo-5">모집인원</td>
        <td class="DetailContent flex items-center justify-start" >5명</td>
      </tr>
      <tr>
        <td class="ContestTableTitle  text-indigo-5">소개글</td>
        <td class="DetailContent flex items-center justify-start" >안녕하세요 저희는 웹사이트 공모전을 위주로 참여하기 위해 만들어진 스터디 그룹입니다. 프론트앤드2명 백엔드2명 서버1명을 뽑으려고 합니다.  </td>
      </tr>
      <tr>
        <td class="ContestTableTitle  text-indigo-5">공모전소개</td>
        <td class="DetailContent flex items-center justify-start">
          <q-card flat bordered style="width :100%">
            <q-card-section horizontal >
              <q-card-section class="col-3 column" style="height:180px;">
                <!-- 아이콘 사야함 !!! -->
                <img src = "src/assets/Image/자격증 썸네일1.png" alt="자격증 썸네일1" style="width:100%; height: 100%"/>
              </q-card-section>

              <q-separator vertical />

              <q-card-section class="col-9 column flex align-center justify-center" style="height:180px; ">
                <q-card-section class="col-6 row flex align-center justify-center" style="width:45% ;height: 100%">
                  공모전 설명
                </q-card-section>

                <q-card-section class="col-6 row flex align-center justify-center" style="width:45%; height: 100% ">
                  공모전 설명
                </q-card-section>
              </q-card-section>
            </q-card-section>
          </q-card>
        </td>
      </tr>
      <tr>
        <td class="ContestTableTitle text-indigo-5">공모전 링크</td>
        <td class="DetailContent flex items-center justify-start"  >
          <a href="https://www.q-net.or.kr/man001.do?gSite=Q">홈페이지 바로가기</a>
        </td>
      </tr>
    </table>

    <q-btn outline rounded class="text-accent "> # 공모전</q-btn>
  </q-card>
</div>
</template>

<script setup>

</script>



<style scoped lang="scss">
.ContestTableTitle{
  font-size : 1.3rem;
  font-weight: bold;
width:15%;
}

.DetailContent{
  margin-left:70px;
  font-size : 1.1rem;
  width :80%
}

td{
  margin:2%;
}

.StudyTag{
  font-size : 1rem;
  margin:2% 0;
}

@media screen and (max-width: 800px) {
  .ContestTableTitle{
    font-size : 1rem;
  }
  .DetailContent{
    font-size : 0.9rem;
  }
}
</style>
