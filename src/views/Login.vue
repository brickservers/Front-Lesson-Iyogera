<!--<template>-->

<!--</template>-->

<!--<script>-->
<!--    import axios from 'axios';-->
<!--    import Vue from 'vue'-->
<!--    import Buefy from 'buefy'-->
<!--    import 'buefy/dist/buefy.css'-->
<!--    Vue.use(Buefy)-->

<!--    export default {-->
<!--        name: "Login",-->
<!--        components: {-->


<!--        },-->
<!--        data() {-->
<!--            return {-->
<!--                //isComponentModalActive: false,-->
<!--                formProps: {-->
<!--                    email: '',-->
<!--                    password: ''-->
<!--                }-->
<!--            }-->
<!--        },-->
<!--        methods: {-->
<!--            signin() {-->
<!--                axios.post('https://demo.iyogera.com/api/login',-->
<!--                    {email: this.email, password: this.password},-->
<!--                    {headers: {'X-Requested-With': 'XMLHttpRequest'}})-->
<!--                    .then(-->
<!--                        (response) => {-->
<!--                            const token = response.data.access_token;-->
<!--                            console.log(token);-->
<!--                            // const base64Url = token.split('.')[1];-->
<!--                            // const base64 = base64Url.replace('-', '+').replace('_', '/');-->
<!--                            // console.log(JSON.parse(window.atob(base64)));-->
<!--                            localStorage.setItem('token', token);-->
<!--                        }-->
<!--                    )-->
<!--                    .catch(-->
<!--                        (error) => console.log(error)-->
<!--                    );-->
<!--            }-->
<!--        }-->
<!--    }-->
<!--</script>-->


