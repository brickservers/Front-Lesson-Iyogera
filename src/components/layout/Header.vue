<template>
  <b-navbar fixed-top>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="@/assets/img/iyogera_c_mid.png"
                    alt="Lesson Iyogera"
                >
            </b-navbar-item>
        </template>
        
          <template slot="end">
          <b-navbar-item tag="router-link" :to="{ path: '/' }">
            <div class="buttons">
              <a class="button is-primary">
                Home
              </a>
            </div>            
          </b-navbar-item>
              <button class="button is-secondary is-mini"
                      @click="isComponentModalActive = true">
                    Login
              </button>
              <Login/>
        </template>
  </b-navbar>
</template>

<script>
    import Login from "../../views/Login";
    import Vue from 'vue'
    import Buefy from 'buefy'
    import 'buefy/dist/buefy.css'
Vue.use(Buefy)

export default {
  name: "Header",
    components: {
      Login
    },
    data() {
        return {
            isComponentModalActive: false,
        }
    }

}
</script>

<style scoped>
  .navbar {
  background-color: white;
  min-height: 3.25rem;
  position: relative;
  z-index: 30;
}

.navbar.is-white {
  background-color: white;
  color: #0a0a0a;
}

.navbar.is-white .navbar-brand > .navbar-item,
.navbar.is-white .navbar-brand .navbar-link {
  color: #0a0a0a;
}

.navbar.is-white .navbar-brand > a.navbar-item:focus, .navbar.is-white .navbar-brand > a.navbar-item:hover, .navbar.is-white .navbar-brand > a.navbar-item.is-active,
.navbar.is-white .navbar-brand .navbar-link:focus,
.navbar.is-white .navbar-brand .navbar-link:hover,
.navbar.is-white .navbar-brand .navbar-link.is-active {
  background-color: #f2f2f2;
  color: #0a0a0a;
}

.navbar.is-white .navbar-brand .navbar-link::after {
  border-color: #0a0a0a;
}

.navbar.is-white .navbar-burger {
  color: #0a0a0a;
}

@media screen and (min-width: 1024px) {
  .navbar.is-white .navbar-start > .navbar-item,
  .navbar.is-white .navbar-start .navbar-link,
  .navbar.is-white .navbar-end > .navbar-item,
  .navbar.is-white .navbar-end .navbar-link {
    color: #0a0a0a;
  }
  .navbar.is-white .navbar-start > a.navbar-item:focus, .navbar.is-white .navbar-start > a.navbar-item:hover, .navbar.is-white .navbar-start > a.navbar-item.is-active,
  .navbar.is-white .navbar-start .navbar-link:focus,
  .navbar.is-white .navbar-start .navbar-link:hover,
  .navbar.is-white .navbar-start .navbar-link.is-active,
  .navbar.is-white .navbar-end > a.navbar-item:focus,
  .navbar.is-white .navbar-end > a.navbar-item:hover,
  .navbar.is-white .navbar-end > a.navbar-item.is-active,
  .navbar.is-white .navbar-end .navbar-link:focus,
  .navbar.is-white .navbar-end .navbar-link:hover,
  .navbar.is-white .navbar-end .navbar-link.is-active {
    background-color: #f2f2f2;
    color: #0a0a0a;
  }
  .navbar.is-white .navbar-start .navbar-link::after,
  .navbar.is-white .navbar-end .navbar-link::after {
    border-color: #0a0a0a;
  }
  .navbar.is-white .navbar-item.has-dropdown:focus .navbar-link,
  .navbar.is-white .navbar-item.has-dropdown:hover .navbar-link,
  .navbar.is-white .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: #f2f2f2;
    color: #0a0a0a;
  }
  .navbar.is-white .navbar-dropdown a.navbar-item.is-active {
    background-color: white;
    color: #0a0a0a;
  }
}

.navbar.is-black {
  background-color: #0a0a0a;
  color: white;
}

.navbar.is-black .navbar-brand > .navbar-item,
.navbar.is-black .navbar-brand .navbar-link {
  color: white;
}

.navbar.is-black .navbar-brand > a.navbar-item:focus, .navbar.is-black .navbar-brand > a.navbar-item:hover, .navbar.is-black .navbar-brand > a.navbar-item.is-active,
.navbar.is-black .navbar-brand .navbar-link:focus,
.navbar.is-black .navbar-brand .navbar-link:hover,
.navbar.is-black .navbar-brand .navbar-link.is-active {
  background-color: black;
  color: white;
}

.navbar.is-black .navbar-brand .navbar-link::after {
  border-color: white;
}

.navbar.is-black .navbar-burger {
  color: white;
}

@media screen and (min-width: 1024px) {
  .navbar.is-black .navbar-start > .navbar-item,
  .navbar.is-black .navbar-start .navbar-link,
  .navbar.is-black .navbar-end > .navbar-item,
  .navbar.is-black .navbar-end .navbar-link {
    color: white;
  }
  .navbar.is-black .navbar-start > a.navbar-item:focus, .navbar.is-black .navbar-start > a.navbar-item:hover, .navbar.is-black .navbar-start > a.navbar-item.is-active,
  .navbar.is-black .navbar-start .navbar-link:focus,
  .navbar.is-black .navbar-start .navbar-link:hover,
  .navbar.is-black .navbar-start .navbar-link.is-active,
  .navbar.is-black .navbar-end > a.navbar-item:focus,
  .navbar.is-black .navbar-end > a.navbar-item:hover,
  .navbar.is-black .navbar-end > a.navbar-item.is-active,
  .navbar.is-black .navbar-end .navbar-link:focus,
  .navbar.is-black .navbar-end .navbar-link:hover,
  .navbar.is-black .navbar-end .navbar-link.is-active {
    background-color: black;
    color: white;
  }
  .navbar.is-black .navbar-start .navbar-link::after,
  .navbar.is-black .navbar-end .navbar-link::after {
    border-color: white;
  }
  .navbar.is-black .navbar-item.has-dropdown:focus .navbar-link,
  .navbar.is-black .navbar-item.has-dropdown:hover .navbar-link,
  .navbar.is-black .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: black;
    color: white;
  }
  .navbar.is-black .navbar-dropdown a.navbar-item.is-active {
    background-color: #0a0a0a;
    color: white;
  }
}

.navbar.is-light {
  background-color: whitesmoke;
  color: rgba(0, 0, 0, 0.7);
}

.navbar.is-light .navbar-brand > .navbar-item,
.navbar.is-light .navbar-brand .navbar-link {
  color: rgba(0, 0, 0, 0.7);
}

.navbar.is-light .navbar-brand > a.navbar-item:focus, .navbar.is-light .navbar-brand > a.navbar-item:hover, .navbar.is-light .navbar-brand > a.navbar-item.is-active,
.navbar.is-light .navbar-brand .navbar-link:focus,
.navbar.is-light .navbar-brand .navbar-link:hover,
.navbar.is-light .navbar-brand .navbar-link.is-active {
  background-color: #e8e8e8;
  color: rgba(0, 0, 0, 0.7);
}

.navbar.is-light .navbar-brand .navbar-link::after {
  border-color: rgba(0, 0, 0, 0.7);
}

.navbar.is-light .navbar-burger {
  color: rgba(0, 0, 0, 0.7);
}

@media screen and (min-width: 1024px) {
  .navbar.is-light .navbar-start > .navbar-item,
  .navbar.is-light .navbar-start .navbar-link,
  .navbar.is-light .navbar-end > .navbar-item,
  .navbar.is-light .navbar-end .navbar-link {
    color: rgba(0, 0, 0, 0.7);
  }
  .navbar.is-light .navbar-start > a.navbar-item:focus, .navbar.is-light .navbar-start > a.navbar-item:hover, .navbar.is-light .navbar-start > a.navbar-item.is-active,
  .navbar.is-light .navbar-start .navbar-link:focus,
  .navbar.is-light .navbar-start .navbar-link:hover,
  .navbar.is-light .navbar-start .navbar-link.is-active,
  .navbar.is-light .navbar-end > a.navbar-item:focus,
  .navbar.is-light .navbar-end > a.navbar-item:hover,
  .navbar.is-light .navbar-end > a.navbar-item.is-active,
  .navbar.is-light .navbar-end .navbar-link:focus,
  .navbar.is-light .navbar-end .navbar-link:hover,
  .navbar.is-light .navbar-end .navbar-link.is-active {
    background-color: #e8e8e8;
    color: rgba(0, 0, 0, 0.7);
  }
  .navbar.is-light .navbar-start .navbar-link::after,
  .navbar.is-light .navbar-end .navbar-link::after {
    border-color: rgba(0, 0, 0, 0.7);
  }
  .navbar.is-light .navbar-item.has-dropdown:focus .navbar-link,
  .navbar.is-light .navbar-item.has-dropdown:hover .navbar-link,
  .navbar.is-light .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: #e8e8e8;
    color: rgba(0, 0, 0, 0.7);
  }
  .navbar.is-light .navbar-dropdown a.navbar-item.is-active {
    background-color: whitesmoke;
    color: rgba(0, 0, 0, 0.7);
  }
}

.navbar.is-dark {
  background-color: #363636;
  color: #fff;
}

.navbar.is-dark .navbar-brand > .navbar-item,
.navbar.is-dark .navbar-brand .navbar-link {
  color: #fff;
}

.navbar.is-dark .navbar-brand > a.navbar-item:focus, .navbar.is-dark .navbar-brand > a.navbar-item:hover, .navbar.is-dark .navbar-brand > a.navbar-item.is-active,
.navbar.is-dark .navbar-brand .navbar-link:focus,
.navbar.is-dark .navbar-brand .navbar-link:hover,
.navbar.is-dark .navbar-brand .navbar-link.is-active {
  background-color: #292929;
  color: #fff;
}

.navbar.is-dark .navbar-brand .navbar-link::after {
  border-color: #fff;
}

.navbar.is-dark .navbar-burger {
  color: #fff;
}

@media screen and (min-width: 1024px) {
  .navbar.is-dark .navbar-start > .navbar-item,
  .navbar.is-dark .navbar-start .navbar-link,
  .navbar.is-dark .navbar-end > .navbar-item,
  .navbar.is-dark .navbar-end .navbar-link {
    color: #fff;
  }
  .navbar.is-dark .navbar-start > a.navbar-item:focus, .navbar.is-dark .navbar-start > a.navbar-item:hover, .navbar.is-dark .navbar-start > a.navbar-item.is-active,
  .navbar.is-dark .navbar-start .navbar-link:focus,
  .navbar.is-dark .navbar-start .navbar-link:hover,
  .navbar.is-dark .navbar-start .navbar-link.is-active,
  .navbar.is-dark .navbar-end > a.navbar-item:focus,
  .navbar.is-dark .navbar-end > a.navbar-item:hover,
  .navbar.is-dark .navbar-end > a.navbar-item.is-active,
  .navbar.is-dark .navbar-end .navbar-link:focus,
  .navbar.is-dark .navbar-end .navbar-link:hover,
  .navbar.is-dark .navbar-end .navbar-link.is-active {
    background-color: #292929;
    color: #fff;
  }
  .navbar.is-dark .navbar-start .navbar-link::after,
  .navbar.is-dark .navbar-end .navbar-link::after {
    border-color: #fff;
  }
  .navbar.is-dark .navbar-item.has-dropdown:focus .navbar-link,
  .navbar.is-dark .navbar-item.has-dropdown:hover .navbar-link,
  .navbar.is-dark .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: #292929;
    color: #fff;
  }
  .navbar.is-dark .navbar-dropdown a.navbar-item.is-active {
    background-color: #363636;
    color: #fff;
  }
}

.navbar.is-primary {
  background-color: #00d1b2;
  color: #fff;
}

.navbar.is-primary .navbar-brand > .navbar-item,
.navbar.is-primary .navbar-brand .navbar-link {
  color: #fff;
}

.navbar.is-primary .navbar-brand > a.navbar-item:focus, .navbar.is-primary .navbar-brand > a.navbar-item:hover, .navbar.is-primary .navbar-brand > a.navbar-item.is-active,
.navbar.is-primary .navbar-brand .navbar-link:focus,
.navbar.is-primary .navbar-brand .navbar-link:hover,
.navbar.is-primary .navbar-brand .navbar-link.is-active {
  background-color: #00b89c;
  color: #fff;
}

.navbar.is-primary .navbar-brand .navbar-link::after {
  border-color: #fff;
}

.navbar.is-primary .navbar-burger {
  color: #fff;
}

@media screen and (min-width: 1024px) {
  .navbar.is-primary .navbar-start > .navbar-item,
  .navbar.is-primary .navbar-start .navbar-link,
  .navbar.is-primary .navbar-end > .navbar-item,
  .navbar.is-primary .navbar-end .navbar-link {
    color: #fff;
  }
  .navbar.is-primary .navbar-start > a.navbar-item:focus, .navbar.is-primary .navbar-start > a.navbar-item:hover, .navbar.is-primary .navbar-start > a.navbar-item.is-active,
  .navbar.is-primary .navbar-start .navbar-link:focus,
  .navbar.is-primary .navbar-start .navbar-link:hover,
  .navbar.is-primary .navbar-start .navbar-link.is-active,
  .navbar.is-primary .navbar-end > a.navbar-item:focus,
  .navbar.is-primary .navbar-end > a.navbar-item:hover,
  .navbar.is-primary .navbar-end > a.navbar-item.is-active,
  .navbar.is-primary .navbar-end .navbar-link:focus,
  .navbar.is-primary .navbar-end .navbar-link:hover,
  .navbar.is-primary .navbar-end .navbar-link.is-active {
    background-color: #00b89c;
    color: #fff;
  }
  .navbar.is-primary .navbar-start .navbar-link::after,
  .navbar.is-primary .navbar-end .navbar-link::after {
    border-color: #fff;
  }
  .navbar.is-primary .navbar-item.has-dropdown:focus .navbar-link,
  .navbar.is-primary .navbar-item.has-dropdown:hover .navbar-link,
  .navbar.is-primary .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: #00b89c;
    color: #fff;
  }
  .navbar.is-primary .navbar-dropdown a.navbar-item.is-active {
    background-color: #00d1b2;
    color: #fff;
  }
}

.navbar.is-link {
  background-color: #3273dc;
  color: #fff;
}

.navbar.is-link .navbar-brand > .navbar-item,
.navbar.is-link .navbar-brand .navbar-link {
  color: #fff;
}

.navbar.is-link .navbar-brand > a.navbar-item:focus, .navbar.is-link .navbar-brand > a.navbar-item:hover, .navbar.is-link .navbar-brand > a.navbar-item.is-active,
.navbar.is-link .navbar-brand .navbar-link:focus,
.navbar.is-link .navbar-brand .navbar-link:hover,
.navbar.is-link .navbar-brand .navbar-link.is-active {
  background-color: #2366d1;
  color: #fff;
}

.navbar.is-link .navbar-brand .navbar-link::after {
  border-color: #fff;
}

.navbar.is-link .navbar-burger {
  color: #fff;
}

@media screen and (min-width: 1024px) {
  .navbar.is-link .navbar-start > .navbar-item,
  .navbar.is-link .navbar-start .navbar-link,
  .navbar.is-link .navbar-end > .navbar-item,
  .navbar.is-link .navbar-end .navbar-link {
    color: #fff;
  }
  .navbar.is-link .navbar-start > a.navbar-item:focus, .navbar.is-link .navbar-start > a.navbar-item:hover, .navbar.is-link .navbar-start > a.navbar-item.is-active,
  .navbar.is-link .navbar-start .navbar-link:focus,
  .navbar.is-link .navbar-start .navbar-link:hover,
  .navbar.is-link .navbar-start .navbar-link.is-active,
  .navbar.is-link .navbar-end > a.navbar-item:focus,
  .navbar.is-link .navbar-end > a.navbar-item:hover,
  .navbar.is-link .navbar-end > a.navbar-item.is-active,
  .navbar.is-link .navbar-end .navbar-link:focus,
  .navbar.is-link .navbar-end .navbar-link:hover,
  .navbar.is-link .navbar-end .navbar-link.is-active {
    background-color: #2366d1;
    color: #fff;
  }
  .navbar.is-link .navbar-start .navbar-link::after,
  .navbar.is-link .navbar-end .navbar-link::after {
    border-color: #fff;
  }
  .navbar.is-link .navbar-item.has-dropdown:focus .navbar-link,
  .navbar.is-link .navbar-item.has-dropdown:hover .navbar-link,
  .navbar.is-link .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: #2366d1;
    color: #fff;
  }
  .navbar.is-link .navbar-dropdown a.navbar-item.is-active {
    background-color: #3273dc;
    color: #fff;
  }
}

.navbar.is-info {
  background-color: #3298dc;
  color: #fff;
}

.navbar.is-info .navbar-brand > .navbar-item,
.navbar.is-info .navbar-brand .navbar-link {
  color: #fff;
}

.navbar.is-info .navbar-brand > a.navbar-item:focus, .navbar.is-info .navbar-brand > a.navbar-item:hover, .navbar.is-info .navbar-brand > a.navbar-item.is-active,
.navbar.is-info .navbar-brand .navbar-link:focus,
.navbar.is-info .navbar-brand .navbar-link:hover,
.navbar.is-info .navbar-brand .navbar-link.is-active {
  background-color: #238cd1;
  color: #fff;
}

.navbar.is-info .navbar-brand .navbar-link::after {
  border-color: #fff;
}

.navbar.is-info .navbar-burger {
  color: #fff;
}

@media screen and (min-width: 1024px) {
  .navbar.is-info .navbar-start > .navbar-item,
  .navbar.is-info .navbar-start .navbar-link,
  .navbar.is-info .navbar-end > .navbar-item,
  .navbar.is-info .navbar-end .navbar-link {
    color: #fff;
  }
  .navbar.is-info .navbar-start > a.navbar-item:focus, .navbar.is-info .navbar-start > a.navbar-item:hover, .navbar.is-info .navbar-start > a.navbar-item.is-active,
  .navbar.is-info .navbar-start .navbar-link:focus,
  .navbar.is-info .navbar-start .navbar-link:hover,
  .navbar.is-info .navbar-start .navbar-link.is-active,
  .navbar.is-info .navbar-end > a.navbar-item:focus,
  .navbar.is-info .navbar-end > a.navbar-item:hover,
  .navbar.is-info .navbar-end > a.navbar-item.is-active,
  .navbar.is-info .navbar-end .navbar-link:focus,
  .navbar.is-info .navbar-end .navbar-link:hover,
  .navbar.is-info .navbar-end .navbar-link.is-active {
    background-color: #238cd1;
    color: #fff;
  }
  .navbar.is-info .navbar-start .navbar-link::after,
  .navbar.is-info .navbar-end .navbar-link::after {
    border-color: #fff;
  }
  .navbar.is-info .navbar-item.has-dropdown:focus .navbar-link,
  .navbar.is-info .navbar-item.has-dropdown:hover .navbar-link,
  .navbar.is-info .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: #238cd1;
    color: #fff;
  }
  .navbar.is-info .navbar-dropdown a.navbar-item.is-active {
    background-color: #3298dc;
    color: #fff;
  }
}

.navbar.is-success {
  background-color: #48c774;
  color: #fff;
}

.navbar.is-success .navbar-brand > .navbar-item,
.navbar.is-success .navbar-brand .navbar-link {
  color: #fff;
}

.navbar.is-success .navbar-brand > a.navbar-item:focus, .navbar.is-success .navbar-brand > a.navbar-item:hover, .navbar.is-success .navbar-brand > a.navbar-item.is-active,
.navbar.is-success .navbar-brand .navbar-link:focus,
.navbar.is-success .navbar-brand .navbar-link:hover,
.navbar.is-success .navbar-brand .navbar-link.is-active {
  background-color: #3abb67;
  color: #fff;
}

.navbar.is-success .navbar-brand .navbar-link::after {
  border-color: #fff;
}

.navbar.is-success .navbar-burger {
  color: #fff;
}

@media screen and (min-width: 1024px) {
  .navbar.is-success .navbar-start > .navbar-item,
  .navbar.is-success .navbar-start .navbar-link,
  .navbar.is-success .navbar-end > .navbar-item,
  .navbar.is-success .navbar-end .navbar-link {
    color: #fff;
  }
  .navbar.is-success .navbar-start > a.navbar-item:focus, .navbar.is-success .navbar-start > a.navbar-item:hover, .navbar.is-success .navbar-start > a.navbar-item.is-active,
  .navbar.is-success .navbar-start .navbar-link:focus,
  .navbar.is-success .navbar-start .navbar-link:hover,
  .navbar.is-success .navbar-start .navbar-link.is-active,
  .navbar.is-success .navbar-end > a.navbar-item:focus,
  .navbar.is-success .navbar-end > a.navbar-item:hover,
  .navbar.is-success .navbar-end > a.navbar-item.is-active,
  .navbar.is-success .navbar-end .navbar-link:focus,
  .navbar.is-success .navbar-end .navbar-link:hover,
  .navbar.is-success .navbar-end .navbar-link.is-active {
    background-color: #3abb67;
    color: #fff;
  }
  .navbar.is-success .navbar-start .navbar-link::after,
  .navbar.is-success .navbar-end .navbar-link::after {
    border-color: #fff;
  }
  .navbar.is-success .navbar-item.has-dropdown:focus .navbar-link,
  .navbar.is-success .navbar-item.has-dropdown:hover .navbar-link,
  .navbar.is-success .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: #3abb67;
    color: #fff;
  }
  .navbar.is-success .navbar-dropdown a.navbar-item.is-active {
    background-color: #48c774;
    color: #fff;
  }
}

.navbar.is-warning {
  background-color: #ffdd57;
  color: rgba(0, 0, 0, 0.7);
}

.navbar.is-warning .navbar-brand > .navbar-item,
.navbar.is-warning .navbar-brand .navbar-link {
  color: rgba(0, 0, 0, 0.7);
}

.navbar.is-warning .navbar-brand > a.navbar-item:focus, .navbar.is-warning .navbar-brand > a.navbar-item:hover, .navbar.is-warning .navbar-brand > a.navbar-item.is-active,
.navbar.is-warning .navbar-brand .navbar-link:focus,
.navbar.is-warning .navbar-brand .navbar-link:hover,
.navbar.is-warning .navbar-brand .navbar-link.is-active {
  background-color: #ffd83d;
  color: rgba(0, 0, 0, 0.7);
}

.navbar.is-warning .navbar-brand .navbar-link::after {
  border-color: rgba(0, 0, 0, 0.7);
}

.navbar.is-warning .navbar-burger {
  color: rgba(0, 0, 0, 0.7);
}

@media screen and (min-width: 1024px) {
  .navbar.is-warning .navbar-start > .navbar-item,
  .navbar.is-warning .navbar-start .navbar-link,
  .navbar.is-warning .navbar-end > .navbar-item,
  .navbar.is-warning .navbar-end .navbar-link {
    color: rgba(0, 0, 0, 0.7);
  }
  .navbar.is-warning .navbar-start > a.navbar-item:focus, .navbar.is-warning .navbar-start > a.navbar-item:hover, .navbar.is-warning .navbar-start > a.navbar-item.is-active,
  .navbar.is-warning .navbar-start .navbar-link:focus,
  .navbar.is-warning .navbar-start .navbar-link:hover,
  .navbar.is-warning .navbar-start .navbar-link.is-active,
  .navbar.is-warning .navbar-end > a.navbar-item:focus,
  .navbar.is-warning .navbar-end > a.navbar-item:hover,
  .navbar.is-warning .navbar-end > a.navbar-item.is-active,
  .navbar.is-warning .navbar-end .navbar-link:focus,
  .navbar.is-warning .navbar-end .navbar-link:hover,
  .navbar.is-warning .navbar-end .navbar-link.is-active {
    background-color: #ffd83d;
    color: rgba(0, 0, 0, 0.7);
  }
  .navbar.is-warning .navbar-start .navbar-link::after,
  .navbar.is-warning .navbar-end .navbar-link::after {
    border-color: rgba(0, 0, 0, 0.7);
  }
  .navbar.is-warning .navbar-item.has-dropdown:focus .navbar-link,
  .navbar.is-warning .navbar-item.has-dropdown:hover .navbar-link,
  .navbar.is-warning .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: #ffd83d;
    color: rgba(0, 0, 0, 0.7);
  }
  .navbar.is-warning .navbar-dropdown a.navbar-item.is-active {
    background-color: #ffdd57;
    color: rgba(0, 0, 0, 0.7);
  }
}

.navbar.is-danger {
  background-color: #f14668;
  color: #fff;
}

.navbar.is-danger .navbar-brand > .navbar-item,
.navbar.is-danger .navbar-brand .navbar-link {
  color: #fff;
}

.navbar.is-danger .navbar-brand > a.navbar-item:focus, .navbar.is-danger .navbar-brand > a.navbar-item:hover, .navbar.is-danger .navbar-brand > a.navbar-item.is-active,
.navbar.is-danger .navbar-brand .navbar-link:focus,
.navbar.is-danger .navbar-brand .navbar-link:hover,
.navbar.is-danger .navbar-brand .navbar-link.is-active {
  background-color: #ef2e55;
  color: #fff;
}

.navbar.is-danger .navbar-brand .navbar-link::after {
  border-color: #fff;
}

.navbar.is-danger .navbar-burger {
  color: #fff;
}

@media screen and (min-width: 1024px) {
  .navbar.is-danger .navbar-start > .navbar-item,
  .navbar.is-danger .navbar-start .navbar-link,
  .navbar.is-danger .navbar-end > .navbar-item,
  .navbar.is-danger .navbar-end .navbar-link {
    color: #fff;
  }
  .navbar.is-danger .navbar-start > a.navbar-item:focus, .navbar.is-danger .navbar-start > a.navbar-item:hover, .navbar.is-danger .navbar-start > a.navbar-item.is-active,
  .navbar.is-danger .navbar-start .navbar-link:focus,
  .navbar.is-danger .navbar-start .navbar-link:hover,
  .navbar.is-danger .navbar-start .navbar-link.is-active,
  .navbar.is-danger .navbar-end > a.navbar-item:focus,
  .navbar.is-danger .navbar-end > a.navbar-item:hover,
  .navbar.is-danger .navbar-end > a.navbar-item.is-active,
  .navbar.is-danger .navbar-end .navbar-link:focus,
  .navbar.is-danger .navbar-end .navbar-link:hover,
  .navbar.is-danger .navbar-end .navbar-link.is-active {
    background-color: #ef2e55;
    color: #fff;
  }
  .navbar.is-danger .navbar-start .navbar-link::after,
  .navbar.is-danger .navbar-end .navbar-link::after {
    border-color: #fff;
  }
  .navbar.is-danger .navbar-item.has-dropdown:focus .navbar-link,
  .navbar.is-danger .navbar-item.has-dropdown:hover .navbar-link,
  .navbar.is-danger .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: #ef2e55;
    color: #fff;
  }
  .navbar.is-danger .navbar-dropdown a.navbar-item.is-active {
    background-color: #f14668;
    color: #fff;
  }
}

.navbar > .container {
  align-items: stretch;
  display: flex;
  min-height: 3.25rem;
  width: 100%;
}

.navbar.has-shadow {
  box-shadow: 0 2px 0 0 whitesmoke;
}

.navbar.is-fixed-bottom, .navbar.is-fixed-top {
  left: 0;
  position: fixed;
  right: 0;
  z-index: 30;
}

.navbar.is-fixed-bottom {
  bottom: 0;
}

.navbar.is-fixed-bottom.has-shadow {
  box-shadow: 0 -2px 0 0 whitesmoke;
}

.navbar.is-fixed-top {
  top: 0;
}
</style>


