<template>
  <div style="height: 350px">
  <table>
    <tr >
      <td class="tableTitle" id="tableTarget1" >대상</td>
      <td class="tableContent flex items-center justify-start" id="tableTarget2"></td>
    </tr>
    <tr>
      <td class="tableTitle">접수기간</td>
      <td class="tableContent flex items-center justify-start" ></td>
    </tr>
    <tr>
      <td class="tableTitle">심사기간</td>
      <td class="tableContent flex items-center justify-start" ></td>
    </tr>
    <tr>
      <td class="tableTitle">지역</td>
      <td class="tableContent flex items-center justify-start"></td>
    </tr>
    <tr>
      <td class="tableTitle">시상내역</td>
      <td class="tableContent flex items-center justify-start"></td>
    </tr>
    <tr>
      <td class="tableTitle">홈페이지</td>
      <td class="tableContent flex items-center justify-start"  >
        <a href="https://www.q-net.or.kr/man001.do?gSite=Q">홈페이지 바로가기</a>
      </td>
    </tr>
    <tr>
      <td class="tableTitle" id="tableOnline1">접수방법</td>
      <td class="tableContent flex items-center justify-start" id="tableOnline2" >
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
  width: 100%;
  height: 100%;
  border-collapse: collapse;

}

td {
  text-align: center;

}



.tableTitle {
  font-size: 0.9rem;
  font-weight: bold;
  color: #4360c4;
  padding: 15px;
  background: rgb(238, 245, 255);
}

.tableContent {
  width:400px;
  height: 100%;
  font-size: 0.8rem;
  color: #4360c4;
  padding: 15px;
  background: rgba(241, 247, 255, 0.75);
}



</style>
