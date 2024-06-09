<template>
  <div class="InfoTable" style="height: 90% ; width : 100%">
  <table>
    <tr >
      <td class="tableTitle text-accent bg-secondary" id="tableTarget1" >대상</td>
      <td class="tableContent flex items-center justify-center" id="tableTarget2">누구나 {{Target}}</td>
    </tr>
    <tr>
      <td class="tableTitle text-accent bg-secondary">접수기간</td>
      <td class="tableContent flex items-center justify-center" >2020.01.04~2020.02.01 {{StartDate}}~{{EndDate}}</td>
    </tr>
    <tr>
      <td class="tableTitle text-accent bg-secondary">심사기간</td>
      <td class="tableContent flex items-center justify-center" >2020.01.04~2020.02.01 {{StartDate}}~{{EndDate}}</td>
    </tr>
    <tr>
      <td class="tableTitle text-accent bg-secondary">지역</td>
      <td class="tableContent flex items-center justify-center">서울{{local}}</td>
    </tr>
    <tr>
      <td class="tableTitle text-accent bg-secondary">시상내역</td>
      <td class="tableContent flex items-center justify-center">Award{{Award}}</td>
    </tr>
    <tr>
      <td class="tableTitle text-accent bg-secondary">홈페이지</td>
      <td class="tableContent flex items-center justify-center"  >
        <a href="https://www.q-net.or.kr/man001.do?gSite=Q">홈페이지 바로가기</a>
      </td>
    </tr>
    <tr>
      <td class="tableTitle text-accent bg-secondary" id="tableOnline1">접수방법</td>
      <td class="tableContent flex items-center justify-center" id="tableOnline2" >
        <a href="https://www.q-net.or.kr/man001.do?gSite=Q">온라인 접수 바로가기</a>
      </td>
    </tr>
  </table>
  </div>
</template>

<script>

</script>
<style scoped lang="scss">
table {
width : 100%;
  height: 100%;
  border-collapse: collapse;

}

td {
  text-align: center;

}



.tableTitle {
  font-size:1.1rem;
  font-weight: bold;
  padding: 2px;
}

.tableContent {

  height: 100%;
  font-size: 1rem;
  padding: 15px;
  background: #f5f7ff;
  color: #3b2bad;
}

@media screen and (max-width: 800px) {
  .InfoTable{
    width:100%
  }
  .tableTitle {
    font-size:1.1rem;
    font-weight: bold;
    padding: 2px;
    width:100%;
  }

  .tableContent {

    height: 100%;
    font-size: 1rem;
    color: #5443c4;
    padding: 15px;
    background: rgba(245, 241, 255, 0.75);

  }

}

</style>
