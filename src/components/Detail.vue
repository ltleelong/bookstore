<template>
  <div>
    <div class="col-md-12">
      <div class="class-panel panel-warning" >
        <div class="panel-heading">
          书名: <span v-show="!flag">{{book.bookName}}</span>
          <input type="text" v-model="book.bookName" v-show="flag">
        </div>
        <div class="panel-body text-center">
          <img :src="book.bookCover" alt="">
        </div>
        <div class="panel-footer">
          价格: <span v-show="!flag">{{book.bookPrice | currency('$')}}</span>
          <input type="text" v-model="book.bookPrice" v-show="flag">
          <button class="btn btn-danger" @click="remove" v-show="!flag">删除</button>
          <button class="btn btn-waining" v-show="!flag" @click="changeFlag">修改</button>
          <button class="btn btn-primary" v-show="flag" @click="update">确认修改</button>
        </div>

      </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        book:{
          bookName:'',
          bookCover:'',
          bookPrice:''
        },
        id:'',
//        默认不显示输入框
        flag:false
      }
    },
    filters:{
      currency(input,param1){
        return param1+input ;
      }
    },
    created(){
       this.id = this.$route.params.id;
      this.$ajax.get('/book?id='+this.id).then((res)=>{
        this.book = res.data

      })
    },
    methods:{
      remove(){
          this.$ajax.delete('/book?id='+this.id).then((res)=>{
            this.$router.push('/list')
          })
      },
      changeFlag(){
        this.flag = !this.flag
      },
      update(){
        this.$ajax.put('/book?id='+this.id,this.book).then(()=>{
          this.flag = false
        })

      }
    }


  }

</script>

<style scoped>
  img{
    width: 150px;
    height: 200px;
  }

</style>
