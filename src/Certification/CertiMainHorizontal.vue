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
              backgroundColor: [
                "rgba(165,227,253,0.58)",
                "rgba(187,239,255,0.56)",
                "rgba(153,193,255,0.58)",
              ],
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
              position: 'bottom',

            },
            title: {
              display: true,
              text: '합격률이 높은 자격증',
              font:{
              size: 18
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
