<template>
  <div class="vue-tempalte">
    <form>
      <h3>Sign In</h3>

      <div class="form-group">
        <label>Email address</label>
        <input type="email" class="form-control form-control-lg" />
      </div>

      <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control form-control-lg" />
      </div>

      <button type="submit" class="btn btn-dark btn-lg btn-block">Sign In</button>

      <p class="forgot-password text-right mt-2 mb-4">
        <router-link to="/forgot-password">Forgot password ?</router-link>
      </p>

      <div class="social-icons">
        <ul>
          <li><a href="#"><i class="fa fa-google"></i></a></li>
          <li><a href="#"><i class="fa fa-facebook"></i></a></li>
          <li><a href="#"><i class="fa fa-twitter"></i></a></li>
        </ul>
      </div>

    </form>
  </div>
</template>

<script>
    import axios from 'axios';
    import Vue from 'vue'
    import Buefy from 'buefy'
    import 'buefy/dist/buefy.css'
    Vue.use(Buefy)

    const ModalForm = {
        props: ['email', 'password', 'canCancel'],
        template: `
            <form action="">
                <div class="modal-card" style="width: auto">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Login</p>
                        <button
                            type="button"
                            class="delete"
                            @click="$emit('close')"/>
                    </header>
                    <section class="modal-card-body">
                        <b-field label="Email">
                            <b-input
                                type="email"
                                :value="email"
                                placeholder="Your email"
                                required>
                            </b-input>
                        </b-field>

                        <b-field label="Password">
                            <b-input
                                type="password"
                                :value="password"
                                password-reveal
                                placeholder="Your password"
                                required>
                            </b-input>
                        </b-field>

                        <b-checkbox>Remember me</b-checkbox>
                    </section>
                    <footer class="modal-card-foot">
                        <button class="button" type="button" @click="$emit('close')">Close</button>
                        <button class="button is-primary">Login</button>
                    </footer>
                </div>
            </form>
        `
    }

    export default {
        name: "Login",
        components: {


        },
        data() {
            return {
                //isComponentModalActive: false,
                formProps: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            signin() {
                axios.post('https://demo.iyogera.com/api/login',
                    {email: this.email, password: this.password},
                    {headers: {'X-Requested-With': 'XMLHttpRequest'}})
                    .then(
                        (response) => {
                            const token = response.data.access_token;
                            console.log(token);
                            // const base64Url = token.split('.')[1];
                            // const base64 = base64Url.replace('-', '+').replace('_', '/');
                            // console.log(JSON.parse(window.atob(base64)));
                            localStorage.setItem('token', token);
                        }
                    )
                    .catch(
                        (error) => console.log(error)
                    );
            }
        }
    }
</script>


