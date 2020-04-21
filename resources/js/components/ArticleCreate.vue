<template>
    <div class='container py-4'>
        <div class='row justify-content-center'>
            <div class='col-md-6'>
                <div class='card'>
                    <div class='card-header'>Create Article</div>
                    <div class='card-body'>
                        <div class="alert alert-danger" v-if="errors.length">
                            <b>Terdapat kesalahan dalam input data:</b>
                            <ul>
                                <li v-for="error in errors" :key="error">{{ error }}</li>
                            </ul>
                        </div>

                        <form @submit.prevent="createArticle">
                            <div class='form-group'>
                                <label htmlFor='title'>Title</label>
                                <input type="text" class="form-control" id="title" v-model="article.title">
                            </div>
                            <div class='form-group'>
                                <label htmlFor='content'>Content</label>
                                <textarea type="text" class="form-control" id="content" v-model="article.content" rows="5"></textarea>
                            </div>
                            <div class='form-group'>
                                <router-link :to="{ name: 'home' }" class="btn btn-secondary">Back</router-link>
                                &nbsp;
                                &nbsp;
                                <button class='btn btn-primary'>Create</button>
                            </div>
                        </form>
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
                errors: [],
                title: null,
                content: null,
            }
        },
        methods: {
            createArticle(e){
                
                if (this.$data.article.title != null && this.$data.article.content != null) {
                    this.$swal.fire({
                        title: 'Success',
                        text: "Article created successfully",
                        icon: 'success',
                        timer: 1000
                    })
                    let uri = '/api/article/store';
                    this.axios.post(uri, this.article).then((response) => {
                        this.$router.push({name: 'home'});
                    });
                    return true;
                }

                this.errors = [];

                if (!this.title) {
                    this.errors.push('Title wajib diisi !');
                }
                if (!this.content) {
                    this.errors.push('Content wajib diisi !');
                }

                e.preventDefault();
            }
        }
    }
</script>