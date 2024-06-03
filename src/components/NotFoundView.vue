
<template>
  <div class="not-found">
    <h1>404 - 페이지를 찾을 수 없습니다.</h1>
    <p>죄송합니다. 요청하신 페이지를 찾을 수 없습니다.</p>
    <router-link to="/">홈 페이지로 돌아가기</router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped>
.not-found {
  text-align: center;
  margin-top: 50px;
}
</style>
