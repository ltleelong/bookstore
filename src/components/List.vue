<template>
  <div>
    <div class="col-md-3" v-for="book in books">
      <div class="class-panel panel-warning" >
        <div class="panel-heading">书名:{{book.bookName}}</div>
        <div class="panel-body text-center">
          <img :src="book.bookCover" alt="">
        </div>
        <div class="panel-footer">价格{{book.bookPrice | currency('$')}}
          <router-link :to="{name:'Detail',params:{id:book.id}}">进入详情</router-link>
        </div>

      </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        books:[]
      }
    },
    filters:{
      currency(input,param1){
          return param1+input ;
      }
    },
    created(){
      this.$ajax.get('/book').then((res)=>{
console.log(res.data);
        this.books= res.data
      })
    }
  }

</script>

<style scoped>
  img{
    width: 150px;
    height: 200px;
  }

</style>
