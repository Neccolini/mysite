<template>
<div>
    <v-container fill-height fluid>
    <v-row justify="center">
    <h1 class="display-2">
        {{title}}
    </h1>
    </v-row>
    </v-container>
</div>
</template>
<script>
export default {
    name: "PageTitle",
    props:{
        title:{
            type:String,
            default:"",
        }
    }
}
</script>

<style scoped>

</style>