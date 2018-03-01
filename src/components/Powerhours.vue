<template>
  <b-card-group class="card-wrapper" deck>
    <b-card title="Power Hours"
            sub-title="November 2017">
      <div class="card-text">
        <table class="table">
          <tr><th></th><th>Monday</th><th>Tuesday</th><th>Wednesday</th><th>Thursday</th><th>Friday</th><th>Saturday</th><th>Sunday</th>
          </tr>

          <tr class="table-row" v-for="row in calendarData">
            <!-- manually add columns to ensure correct order -->
            <td >{{ row.hour }}:00</td>
            <td :style="getHeatColor( row.Monday )">{{ row.Monday }}</td>
            <td :style="getHeatColor( row.Tuesday )">{{ row.Tuesday }}</td>
            <td :style="getHeatColor( row.Wednesday )">{{ row.Wednesday }}</td>
            <td :style="getHeatColor( row.Thursday )">{{ row.Thursday }}</td>
            <td :style="getHeatColor( row.Friday )">{{ row.Friday }}</td>
            <td :style="getHeatColor( row.Saturday )">{{ row.Saturday }}</td>
            <td :style="getHeatColor( row.Sunday )">{{ row.Sunday }}</td>
          </tr>
        </table>
      </div>
      <b-link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              class="card-link">This is a link</b-link>
    </b-card>
  </b-card-group>

</template>

<script>
  export default{
    props: {
      calendarData: { type: Array, required: true }
    },
    data(){
      return {
        min: Infinity,
        max: -Infinity
      }
    },
    computed: {
    },
    methods: {
      getHeatColor( value ){
        if( this.min == Infinity ){
          this.getMinMax()
        }
        //normalize to scale with min 0
        let max = this.max-this.min
        let valueN = value - this.min
        //calculate where on a 255 scale we are
        let intensity = Math.floor(255 * (1-  valueN/max ))
        console.log(value +" "+valueN/max+" " +intensity)
        return "background-color: rgb("+intensity+",255,"+intensity+");"//box-shadow: 10px 10px 50px 10px rgb("+intensity+",255,"+intensity+");"
      },
      getMinMax(){
        for( let index in this.calendarData){
          let filtered = Object.values( this.calendarData[index] ).filter(e=> typeof e == "number")
          let max = Math.max(...filtered)
          let min = Math.min(...filtered)

          if( this.max < max ){
            this.max = max
          }
          if( this.min > min ){
            this.min = min
          }
        }
      }
    }
  }
</script>

<style>
  .card-wrapper{
    padding: 2em;
    /*fix negative margin causing horizontal scroll*/
    margin:0;
  }
  .table{
    width:100%;
  }
  .table-row td:not(:first-child) {
    border: 0px;
  }
  .table-row td {
    padding:0.5em;
  }

  @media only screen and (max-width: 800px) {
    .table-row td {
      padding:0.1em;
    }
    th {
      max-width: 12%;
      font-size: 0.5em;
      padding: 0.1em !important;
    }
  }
  @media only screen and (max-width: 600px) {
    .table-row td {
      font-size: 0.5em;;
    }
  }
</style>
