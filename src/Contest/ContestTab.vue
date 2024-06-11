<template>
  <div style="width : 100%">
  <div class="tab-buttons" style="width : 100%">
    <button style="width : 50%"
      :class="{ active: activeTab === 'detail' }"
      @click="activeTab = 'detail'"
    >
      상세페이지
    </button>
    <button style="width : 50%"
      :class="{ active: activeTab === 'group' }"
      @click="activeTab = 'group'"
    >
      그룹 매칭
    </button>
  </div>

  <div class="tab-content">
    <div v-if="activeTab === 'detail'" class="tab-panel">
      <div class="text-h6">Mails</div>
      내용
    </div>
    <div v-if="activeTab === 'group'" class="tab-panel">
      <div class="text-h6">Alarms</div>
      내용
    </div>
  </div>
  </div>
</template>

<script >


export default {
  data() {
    return {
      activeTab: 'detail',
    };
  },
};
</script>

<style scoped lang="scss">

.tab-buttons button {
  padding: 0.5rem 1rem;
  border: none;
  background: #ffffff;
  cursor: pointer;
  font-size: 1.1rem;
  border-radius: 10px 10px 0  0;
  color: #7A88FF;
}

.tab-buttons button.active {

  background: #bec5fb;
  font-weight: bold;
color : white;
  font-size: 1.2rem;
}

.tab-content {
  padding: 1%;
}


.tab-panel.active {
  display: block;
}


</style>
