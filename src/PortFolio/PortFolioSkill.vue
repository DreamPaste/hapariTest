<template>
  <q-card class="skillCard" >
    <div class="column">
      <div class="skillTitle col-1 text-primary text-bold text-h4" >
       SKILL
      </div>
      <div class="skillLinear-wrap col-7 column">
        <!-- 스킬 반복 -->
        <div v-for="(skill, index) in skills" :key="index" >
          <span class=" text-accent" >{{ skill.label }}</span>
          <q-linear-progress
            class="skillLinear"
            size="23px"
            :value="skill.progress"
            color="accent"
            track-color="indigo-2"

          >
            <div class="absolute-full flex flex-center">
              <q-badge color="white" text-color="accent" :label="(skill.progress * 100).toFixed(2) + '%'" />
            </div>
          </q-linear-progress>
        </div>
      </div>

      <!-- 스킬 버튼 -->
      <div class="col-4">
        <q-btn
          v-for="(button, index) in buttons"
          :key="index"
          class=" skillBtn text-accent"
        >
          {{ button }}
        </q-btn>
      </div>
    </div>
  </q-card>
</template>

<script setup>
import { ref } from 'vue';


const skills = ref([
  { label: "JAVA", progress: 0.7 },
  { label: "Python", progress: 0.6 },
  { label: "Figma", progress: 0.8 },

]);


const buttons = ref(["UI / UX", "Web Development", "Front End", "Web Design"]);
</script>

<style scoped lang="scss">
.skillCard{
  border-radius: 15px; padding: 7%
}

.skillTitle, .skillLinear-wrap{
  margin-bottom: 8%
}

.skillLinear{
  border-radius: 15px;
  margin-bottom:34px;
}

.skillBtn{
  border-radius: 12px;
  margin: 0 3% 3% 0;
}
</style>
