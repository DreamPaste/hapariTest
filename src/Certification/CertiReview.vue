<template>
  <div class="container" style="background: #f8f8f8; display: flex; justify-content: center; margin: 100px 0;">
    <!-- 전체 감싸는 컨테이너 -->
    <div class="backgroundReview items-center justify-center" style="width: 1000px; height: 100%; background: rgba(255, 255, 255, 0.71);">
      <!-- 페이지 타이틀 -->
      <div class="col-3 flex row" style="width: 100%; color: #413090;  font-weight: bold; font-size: 1.9rem; padding: 5%; margin-bottom: 10px">
        자격증 후기 작성 &nbsp;
        <!-- 아이콘 사야함 !!! -->
        <img src = "src/assets/Image/후기작성.jpg" alt="후기작성" style="width:4%; height: 4%"/>
      </div>

      <!-- 자격증 아이디 표시 -->
      <div class="col-1 flex row" style="padding: 0 50px; margin-bottom: 30px;">
        <q-card class="my-card bg-indigo-1 text-indigo-9">
          <q-card-section>
            자격증 ID: {{ certificationId }}
          </q-card-section>
        </q-card>
      </div>

      <!-- 타이틀 입력 -->
      <div class="col-1 flex row" style="padding: 0 50px; margin-bottom: 30px;">
        <q-input v-model="title" filled autogrow label="title" bg-color="blue-1" style="width: 100%; font-weight: bold; font-size: 1.2rem;" />
      </div>

      <!-- 내용 입력 -->
      <div class="col-3 flex row" style="width: 100%; padding: 0 50px; margin-bottom: 200px;">
        <q-input v-model="contents" filled type="textarea" label="review" bg-color="blue-1" style="width: 100%; font-weight: bold; font-size: 1.2rem;" />
      </div>

      <div class="col-3 flex row items-center justify-center">
        <!-- 저장 버튼 -->
        <q-btn flat class="bg-blue-1 text-blue-9" @click="saveReview"
               style="border-radius: 10px;
               padding: 10px;
               font-size: 1rem;
              width: 100px; height: 100%; margin-right: 2%;" label="저장" />
        <!-- 이전 버튼 -->
        <q-btn flat class="bg-blue-1 text-blue-9" @click="goBack"
               style="border-radius: 10px;
               padding: 10px;
               font-size: 1rem;   width: 100px; height: 100%;" label="이전으로" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { api } from 'boot/axios';

export default {
  props: {
    certificationId: {
      type: Number,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const router = useRouter();
    const title = ref('');
    const contents = ref('');

    const goBack = () => {
      router.go(-1);
    };

    const saveReview = () => {
      const reviewData = {
        title: title.value,
        contents: contents.value,
        userId: props.userId,
      };
      api.post(`/api/certifications/${props.certificationId}/reviews`, reviewData, {
        headers: {
          Authorization: `Bearer `,
        }
      })
        .then(response => {
          if (response && response.data) {
            alert('후기 저장에 성공하였습니다.');
          } else {
            alert('후기 저장에 실패하였습니다.');
          }
        })
        .catch(error => {
          alert('게시글 저장에 실패했습니다: ' + error.response.data.message);
        });
    };

    return {
      title,
      contents,
      goBack,
      saveReview,
    };
  }
};
</script>

<style scoped>
/* 스타일 정의 */
</style>
