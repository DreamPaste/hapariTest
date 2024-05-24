<template>
  <div class="container" style="background: #f8f8f8; display: flex; justify-content: center; margin: 100px 0;">
    <!-- 전체 감싸는 컨테이너 -->
    <div class="backgroundReview items-center justify-center" style="width:1000px; height: 100%; background: rgba(255, 255, 255, 0.71);">
      <!-- 페이지 타이틀 -->
      <div class="col-3 flex row" style="width: 100%; color: #413090; font-family: 'Gmarket Sans', sans-serif; font-weight: bold; font-size: 1.9rem; padding: 5%; margin-bottom: 10px">
        자격증 후기 수정
      </div>

      <!-- 자격증 선택 -->
      <div class="col-1 flex row" style="padding: 0 50px; margin-bottom: 30px;">
        <q-card class="my-card bg-secondary text-white">
          <q-card-section>
            <div class="certiTItle">{{ certificationId }}</div>
          </q-card-section>

        </q-card>
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
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { api } from "boot/axios";

export default {
  props: {
    certificationId: {
      type: Number,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    }
  },
  setup(props) {
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
        userId: props.userId,
      }
    }

    const fetchData = (certificationId, reviewId) => {
      console.log(certificationId);
      const res = api.get(`/api/certifications/${certificationId}/reviews/${reviewId}`, {
        headers: {
          Authorization: `Bearer`,
          certificationId: certificationId,
        }
      })
        .then((response) => {
          if (response && response.status === 200) {
            const data = response.data;
            console.log(data);
            alert("게시글 수정에 성공했습니다.");
          }

        })
        .catch((err) => {
          console.log(err);
          alert("해당 게시글을 수정할 수 없습니다.");
        });
    };

    return {
      title,
      contents,
      goBack,
      saveReview,
      fetchData
    };
  }
}
</script>

<style scoped lang="scss">

</style>
