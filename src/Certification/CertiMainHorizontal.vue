<template>
  <div>
    <canvas ref="canvas" ></canvas>
  </div>
</template>

<script>
import {defineComponent, ref, onMounted} from 'vue';
import {Chart, BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend} from 'chart.js';

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

export default defineComponent({
  setup() {
    const canvas = ref(null);

    onMounted(() => {
      new Chart(canvas.value, {
        type: 'bar',
        data: {
          labels: ['자격증1',  '자격증2', '자격증3'],

          datasets: [
            {
              label: '합격률',
              borderRadius: 25,
              barThickness: 27,
              backgroundColor:
                "rgb(255,255,255)",
              data: [40, 20, 12]
            },

          ]
        },
        options: {
          indexAxis: 'y', // This makes the bar chart horizontal
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            },
            title: {
              display: true,
              text: '합격률이 높은 자격증',
              color: 'white', // 제목 텍스트 색상을 하얀색으로 설정
              font: {
                size: 22,

              }
            }
          },
          scales: {
            x: {
              ticks: {
                color: 'white' // x축 레이블 텍스트 색상을 하얀색으로 설정
              },
              grid: {
                color: 'rgba(255, 255, 255, 0.2)' // 선택 사항: 그리드 라인 색상 조정
              }
            },
            y: {
              ticks: {
                color: 'white' // y축 레이블 텍스트 색상을 하얀색으로 설정
              },
              grid: {
                color: 'rgba(255, 255, 255, 0.2)' // 선택 사항: 그리드 라인 색상 조정
              }
            }
          }
        }
      });
    });

    return {
      canvas
    };
  }
});
</script>
