<template>

  <div class="container" style="background: #f8f8f8; display: flex; justify-content: center; margin: 100px 0;">
    <!--전체 감싸는 컨테이너 -->
    <div class="backgroundReview  items-center justify-center"
         style="width:1000px; height: 100%;  background: rgba(255, 255, 255, 0.71); ">
      <!-- 페이지 타이틀 -->
      <div class="col-3 flex row"
           style="
           width: 100%;
            color: #413090;
            font-family: 'Gmarket Sans', sans-serif;
            font-weight: bold;
            font-size: 1.9rem;
            padding: 5%;
            margin-bottom: 10px">
        자격증 후기 입력</div>

      <!-- 자격증 선택 -->
    <div class="col-2 flex  row"  style="padding: 0 50px ; margin-bottom: 60px; ">

        <q-btn-dropdown
          push
          no-caps
          text-color="indigo-3"
          label="자격증 선택해주세요"
          @click="onMainClick"
          style="width: 25%"
      >
        <!-- 공유 드롭다운-->
        <q-list>
          <q-item clickable v-close-popup @click="copyURL">
            <q-item-section>
              <q-item-label>자격증1</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-close-popup @click="onItemClick">
            <q-item-section>
              <q-item-label>자격증2</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>

    </div>
      <div class="col-4 flex  row"  style="width: 100% ; padding: 0 50px ; margin-bottom:200px">
      <q-editor
        v-model="editor"
        flat
        content-class="bg-indigo-1"
        toolbar-text-color="white"
        toolbar-bg="indigo-8"
        :toolbar="[
        ['bold', 'italic', 'underline'],
        [{
          label: $q.lang.editor.formatting,
          icon: $q.iconSet.editor.formatting,
          list: 'no-icons',
          options: ['p', 'h3', 'h4', 'h5', 'h6', 'code']
        }]
      ]"

        style="width:100%; "
      />
    </div>
      <div class="col-3  flex row items-center justify-center">
        <q-btn style=" border-radius: 10px;
              padding:10px;
              font-family: 'Gmarket Sans', sans-serif; font-weight: bold; font-size: 1rem;
              border: 1px solid #413090;
              color: #413090;
              width : 100px; height: 100%; margin-right: 2%"
               label="저장"/>

        <q-btn  @click="goBack"
                style=" border-radius: 10px;
              padding:10px;
              font-family: 'Gmarket Sans', sans-serif; font-weight: bold; font-size: 1rem;
              border: 1px solid #413090;
              color: #413090;
              width : 100px; height: 100%"
               label="이전으로"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.go(-1)
}
</script>

<style scoped lang="scss">

</style>
