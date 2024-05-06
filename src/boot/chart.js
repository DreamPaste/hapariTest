// src/boot/chart.js

import Chart from 'chart.js/auto';

export default ({ app }) => {
  app.config.globalProperties.$Chart = Chart;
};
