<template>
  <div>
    <b-card-group class="card-wrapper" deck>
      <template v-for="metric, key in metrics" >
        <b-card :title="(metric.value).toString()">
          <p class="card-text">
            {{ metric.title }}
          </p>
          <div slot="footer">
            <small class="text-muted">Last updated {{ metric.updated }}</small>
          </div>
        </b-card>
      </template>
    </b-card-group>

    <b-card-group class="card-wrapper" deck>
      <b-card title="Passersby">
        <table class="passersby-table">
          <tr><td>Total:</td><td>{{ passersby.total }}</td></tr>
          <tr><td>Total potential:</td><td>{{ passersby.total_potential }}</td></tr>
          <tr><td>Capture rate:</td><td>{{ captureRate }}%</td></tr>
        </table>
        <div slot="footer">
          <small class="text-muted">Last updated {{ passersby.updated }}</small>
        </div>
      </b-card>
      <b-card title="Customer Live feed">
        <p class="card-text">
          <img class="live-feed" src="https://img-9gag-lol.9cache.com/photo/aEG8vgo_460sa_v1.gif"><img>
        </p>
        <div slot="footer">
          <small class="text-muted">Last updated: LIVE </small>
        </div>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
  import Pie from './cssPie'

  export default {
    props:{
      metrics: Object,
      passersby: Object
    },
    components:{
      Pie
    },
    computed:{
      captureRate(){
        return (this.passersby.capture_rate*100).toFixed(2)
      }
    }
  }
</script>

<style>
.card-wrapper{
  padding: 2em 2em 0 2em;
  /*fix negative margin causing horizontal scroll*/
  margin:0;
}
.live-feed{
  width:100%
}
.passersby-table{
  width:100%;
}
.passersby-table td:first-child{
  text-align:right;
}
.passersby-table td:last-child{
  text-align: left;
}
.passersby-table td{
  width:50%;
  padding: 0.4em;
}
</style>
