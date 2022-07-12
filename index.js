// TODO: 公式リファレンスに沿って JavaScript を記述
const PrefectureCheckbox = {
    data() {
      return {
        prefectures: [
            '北海道','青森','岩手','宮城','秋田','山形','福島','茨城','栃木','群馬','埼玉','千葉',
            '東京','神奈川','新潟','富山','石川','福井','山梨','長野','岐阜','静岡','愛知','三重',
            '滋賀','京都','大阪','兵庫','奈良','和歌山','鳥取','島根','岡山','広島','山口','徳島',
            '香川','愛媛','高知','福岡','佐賀','長崎','熊本','大分','宮崎','鹿児島','沖縄' 
        ],       
      };
    },
  
  
/* html */
template: `
<span v-for="(prefecture, index) in prefectures">
  <input type="checkbox" v-bind:id="'e' + index">
  <label v-bind:for="'e' + index">{{ prefecture }}</label>
</span>
`,
};

const PopulationBarPlot = {
  props:[ 'api' ],
  data() {
    return {
      populations: [],
      
   };
  },
  /* html */
  template: `
  <div>{{ result }}</div>
  <button v-on:click="updateGraph">更新</button>
  <div class="container">
    <div
      v-for="population in populations"
      class="item"
      v-bind:style="'height: ' + population + 'px;'"
    ></div>
  </div>
  `,
  methods: {
    async updateGraph() {
       let xs = await getPopulations(this.api, 27);
       xs = xs['result']['data'][0]['data'];
       
       //let ys = []
       //ys.push(x.value)
       //for (const x of xs){
       //}
       //this.result = xs;
       //this.populations = ys;
       let values = xs.map(function(ys){
        return ys["value"];
      }
      );
      this.populations = values;
      this.populations = this.populations.map((ys) => {
        return ys / 30000;
      }
      );
    },
  },
}; 

const RootComponent = {
  data() {
    return {
      'api': '',
    };
  },
  components: {
    PrefectureCheckbox,
    PopulationBarPlot,
  },
};
Vue.createApp(RootComponent).mount('#app');

