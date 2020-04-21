<template>
    <div class='container py-4'>
        <div class='row justify-content-center'>
            <div class='col-md-6'>
                <div class='card'>
                    <div class='card-header'>Detail Article</div>
                    <div class='card-body'>
                        <div class='form-group'>
                            <label htmlFor='title'>Title</label>
                            <input type="text" class="form-control" id="title" v-model="article.title" disabled>
                        </div>
                        <div class='form-group'>
                            <label htmlFor='content'>Content</label>
                            <textarea type="text" class="form-control" id="content" v-model="article.content" rows="5" disabled></textarea>
                        </div>
                        <div class='form-group'>
                            <router-link :to="{ name: 'home' }" class="btn btn-secondary">Back</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
        return {
            article:{},
        }
    },
    created() {
        let uri = `/api/article/show/${this.$route.params.id}`;
        this.axios.get(uri).then((response) => {
            this.article = response.data;
        });
    },
    method: {

    }
  }
</script>