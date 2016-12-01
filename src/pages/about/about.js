// Third party
import template from 'lodash-es/template';
import forEach from 'lodash-es/forEach';

// Components
import { layoutEn, layoutZh } from '../../components/layout';

// Assets
import jsData from '../../assets/datas/js-bar-chart.json';

// About
import about from './about.html';
import tplOptsEn from './langs/en.json';
import tplOptsZh from './langs/zh.json';

const imports = {
  'imports': {
    forEach
  }
};

const commom = () => {
  new Chart(document.querySelector('#js-bar-chart'), {
    type: 'bar',
    data: jsData,
    options: { scales: { yAxes: [{ ticks: { beginAtZero: true } }] } }
  });

  new Chart(document.querySelector('#skill-radar-chart'), {
    type: 'radar',
    data: {
      "labels": ["HTML", "CSS", "JS", "Angular", "Express", "Ionic", "Pug", "Stylus", "TypeScript"],
      "datasets": [
        {
          "label": "Skills",
          "backgroundColor": "rgba(179, 181, 198, .2)",
          "borderColor": "rgba(179, 181, 198, 1)",
          "pointBackgroundColor": "rgba(179, 181, 198, 1)",
          "pointBorderColor": "rgba(255, 255, 255, 1)",
          "pointHoverBackgroundColor": "rgba(255, 255, 255, 1)",
          "pointHoverBorderColor": "rgba(179, 181, 198, 1)",
          "data": [90, 50, 75, 80, 50, 33, 85, 75, 80]
        }
      ]
    },
    options: {
      legend: { position: 'top' },
      title: { display: true, text: 'Skill Radar Chart' },
      scale: { ticks: { beginAtZero: true } }
    }
  });
  componentHandler.upgradeAllRegistered();
};

export const ABOUT_EN = () => {
  document.querySelector('#app').innerHTML = layoutEn;
  document.querySelector('#page').innerHTML = template(about, imports)(tplOptsEn);
  document.querySelector('#zh').onclick = () => { page.redirect('/zh/about'); };
  commom();
};

export const ABOUT_ZH = () => {
  document.querySelector('#app').innerHTML = layoutZh;
  document.querySelector('#page').innerHTML = template(about, imports)(tplOptsZh);
  document.querySelector('#en').onclick = () => { page.redirect('/en/about'); };
  commom();
};
