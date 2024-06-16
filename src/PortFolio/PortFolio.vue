<template>
  <div class="flex items-center justify-center container" >
    <div class="card-wrapper">
      <q-card class="portFolioCard row items-center justify-center" >
        <div class="content col-6 " >
          <div class="info col-3" >
            <PortFolioInfo />
          </div>
          <div class="skills col-9">
            <PortFolioSkill />
          </div>
        </div>
        <div class="content col-6" >
          <ProtFolioContent />
        </div>
      </q-card>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import PortFolioInfo from "src/PortFolio/PortFolioInfo.vue";
import PortFolioSkill from "src/PortFolio/PortFolioSkill.vue";
import ProtFolioContent from "src/PortFolio/ProtFolioContent.vue";

export default defineComponent({
  components: { ProtFolioContent, PortFolioSkill, PortFolioInfo }
});
</script>

<style scoped lang="scss">
.container {
  background: #f8f8f8;
  margin: 100px 0;
}

.card-wrapper {
  background: #ffffff;
  padding: 2%;
  width: 1200px;
}

.portFolioCard {
  width: 100%;
  height: 750px;
  padding: 2%;
  background: rgba(190, 197, 255, 0.65);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.content {
  display: flex;
  flex-direction: column;
}

.info, .skills {
  flex: 1;
  padding: 1%;
  box-sizing: border-box;
}

.col-6, .col-6 {
  flex: 0 0 auto;
}

.row {
  display: flex;
  width: 100%;
  height: 100%;
}

</style>
