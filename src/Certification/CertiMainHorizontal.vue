<template>
  <div class="col-12 column flex align-center justify-center">
    <div class="col-3 flex align-center justify-center">
      <span class="text-bold text-white" style="font-size: 1.5rem;">합격률이 높은 자격증</span>
    </div>
    <div class="col-9 row flex align-center justify-center" style="padding: 2%">
      <div
        v-for="(cert, index) in certificates"
        :key="index"
        class="col-12 row flex align-center justify-center"
      >
        <span class="col-3 column text-bold text-white" style="font-size: 1rem">{{ cert.name }}</span>
        <div class="col-9">
          <q-linear-progress
            rounded
            size="20px"
            :value="cert.progress"
            color="white"
            track-color="deep-purple-2"
            style="margin-bottom: 5%; border-radius: 15px"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const certificates = [
      { name: '자격증1', progress: 0.4 },
      { name: '자격증2', progress: 0.6 },
      { name: '자격증3', progress: 0.8 }
    ];

    return {
      certificates
    };
  }
};
</script>

<style scoped lang="scss">

</style>
