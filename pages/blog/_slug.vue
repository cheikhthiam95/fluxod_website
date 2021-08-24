<template>
    <div>

        <div v-html="post">

        </div>

    </div>
</template>

<script>
export default {

   
    mounted() {
        // this.getPost().then(res=>{
        //     this.post = res
        // })
    },
    data() {
        return {
            
        }
    },
      methods: {


  
    async getPost() {
    //   try {
    //     const response = await this.$axios.$get("/posts/"+this.$route.params.id);
    //     if (response) {
    //        console.log(response)
    //        return response
    //     }
    //   } catch (error) {
    //     console.log("ici", error);
    //   }  
    },

 
  },
    
}
</script>