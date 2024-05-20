<template>
  <div class="container" style="background: #f8f8f8; display: flex; justify-content: center; margin: 100px 0;">
    <!-- 전체 감싸는 컨테이너 -->
    <div class="backgroundReview items-center justify-center" style="width:1000px; height: 100%; background: rgba(255, 255, 255, 0.71);">
      <!-- 페이지 타이틀 -->
      <div class="col-3 flex row" style="width: 100%; color: #413090; font-family: 'Gmarket Sans', sans-serif; font-weight: bold; font-size: 1.9rem; padding: 5%; margin-bottom: 10px">
        자격증 후기 입력
      </div>

      <!-- 자격증 선택 -->
      <div class="col-1 flex row" style="padding: 0 50px; margin-bottom: 30px;">
        <q-btn-dropdown push no-caps text-color="indigo-3" :label="selectedCertificationLabel" style="width: 25%">
          <!-- 공유 드롭다운 -->
          <q-list>
            <q-item clickable v-close-popup @click="selectCertification('자격증1')">
              <q-item-section>
                <q-item-label>자격증1</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="selectCertification('자격증2')">
              <q-item-section>
                <q-item-label>자격증2</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>

      <!-- 타이틀 입력 -->
      <div class="col-1 flex row" style="padding: 0 50px; margin-bottom: 30px;">
        <q-input v-model="title" filled autogrow label="title" bg-color="indigo-1" style="width:100%; font-family: 'Gmarket Sans', sans-serif; font-weight: bold; font-size: 1.2rem;" />
      </div>
      <!-- 내용 입력 -->
      <div class="col-3 flex row" style="width: 100%; padding: 0 50px; margin-bottom:200px">
        <q-input v-model="contents" filled type="textarea" label="review" bg-color="indigo-1" style="width:100%; font-family: 'Gmarket Sans', sans-serif; font-weight: bold; font-size: 1.2rem;" />
      </div>
      <div class="col-3 flex row items-center justify-center">
        <!-- 저장 버튼 -->
        <q-btn @click="saveReview" style="border-radius: 10px; padding:10px; font-family: 'Gmarket Sans', sans-serif; font-weight: bold; font-size: 1rem; border: 1px solid #413090; color: #413090; width: 100px; height: 100%; margin-right: 2%" label="저장"/>
        <!-- 이전 버튼 -->
        <q-btn @click="goBack" style="border-radius: 10px; padding:10px; font-family: 'Gmarket Sans', sans-serif; font-weight: bold; font-size: 1rem; border: 1px solid #413090; color: #413090; width: 100px; height: 100%" label="이전으로"/>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
import {api} from "boot/axios";

export default {
  setup() {
    const router = useRouter()
    const title = ref('')
    const contents = ref('')

    const goBack = () => {
      router.go(-1)
    }

    const saveReview = () => {
      const reviews = {
        title: title.value,
        contents: contents.value,
        userId: this.userId,
      }
      api.post(`/api/certifications/${this.certificationId}/reviews`, reviews, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJiYjc3ODgiLCJpc3MiOiJwdWxsZXkiLCJpYXQiOjE3MTYxMTM4MDAsImV4cCI6MTcxNjExNDQwMH0.DRs9e2BNnq10Jadz5rPD3VAV04V3hqwJ85KdmHHOZbM`,
          userId: this.userId,
        }
      })
        .then(response => {
          if (response && response.status === 200) {
            console.log('Review saved:', response.data.msg)
            alert('Review saved successfully!')
          } else {
            console.log("응답은 성공, but 오류")
          }
        })
        .catch(error => {
          console.error('There was an error saving the review:', error)
          alert('Error saving review. Please try again,' + error.response.data.userId + "님!")
        })
    }

    return {
      router,
      title,
      contents,
      goBack,
      saveReview
    }
  },
  props: {
    certificationId: {
      type: Number,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    }
  }
}
</script>

<style scoped lang="scss">
</style>
