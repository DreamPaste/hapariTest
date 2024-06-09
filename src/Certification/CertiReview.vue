<template>
  <div class="container" style="background: #f8f8f8; display: flex; justify-content: center; margin: 100px 0;">
    <!-- 전체 감싸는 컨테이너 -->
    <div class="backgroundReview items-center justify-center" style="width: 1000px; height: 100%; background: rgba(255, 255, 255, 0.71);">
      <!-- 페이지 타이틀 -->
      <div class="col-3 flex row " style="width: 100%;   font-weight: bold; font-size: 2rem; padding: 5%; margin-bottom: 10px">
        <span class="text-indigo-7 ">자격증 후기 작성 &nbsp;</span>
        <img src = "~/assets/Image/수정하기2.jpg" alt="수정하기" style="width:4%; height: 4%;"/>
      </div>

      <!-- 자격증 아이디 표시 -->
      <div class="col-1 flex row " style="padding: 0 50px; margin-bottom: 30px;">
        <q-card flat class="my-card bg-red-1 text-red-9 flex items-center justify-center" style="border-radius: 15px; width:14%; height:38px; font-size: 1rem">

            {{ certificationName }}

        </q-card>
      </div>

      <!-- 타이틀 입력 -->
      <div class="col-1 flex row" style="padding: 0 50px; margin-bottom: 30px;">
        <q-input   outlined v-model="title" autogrow label="title"  style="width: 100%; font-weight: bold; font-size: 1.2rem;" />
      </div>

      <!-- 내용 입력 -->
      <div class="col-3 flex row" style="width: 100%; padding: 0 50px; margin-bottom: 200px;">
        <q-input   outlined v-model="content"  type="textarea" label="review" style="width: 100%; font-weight: bold; font-size: 1.2rem;" />
      </div>

      <div class="col-3 flex row items-center justify-center">
        <!-- 저장 버튼 -->
        <q-btn flat class="text-accent bg-secondary" @click="saveReview"
               style="border-radius: 10px;
               padding: 10px;
               font-size: 1rem;
              width: 100px; height: 100%; margin-right: 2%;" label="저장" />
        <!-- 이전 버튼 -->
        <q-btn flat class="text-accent bg-secondary" @click="goBack"
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
    certificationName: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    console.log('certificationName:', props.certificationName);
    const router = useRouter();
    const title = ref('');
    const content = ref('');

    const goBack = () => {
      router.go(-1);
    };

    const saveReview = async () => {
      try {
        const reviewData = {
          title: title.value,
          contents: contents.value,
          userId: props.userId,
          certificationName: props.certificationName,
        };

        const response = await api.post(`/api/certifications/reviews/${props.reviewId}`, reviewData, {
          headers: {
            Authorization: `Bearer `,
          }
        });

        if (response && response.data) {
          alert("게시글 저장에 성공했습니다.");
        } else {
          alert('게시글 저장에 실패하였습니다.');
        }
      } catch (error) {
        alert('해당 게시글을 저장할 수 없습니다: ' + error.response.data.message);
      }
    };


    return {
      title,
      content,
      goBack,
      saveReview,
    };
  }
};
</script>

<style scoped>
/* 스타일 정의 */
</style>
