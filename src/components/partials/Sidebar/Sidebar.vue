<template>
  <nav
    class="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white"
    id="sidenav-main"
    background-color="vue"
    short-title="Argon"
    title="Argon"
  >
    <div class="container-fluid">
      <!--Toggler--><button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click.prevent="toggleModal()"
      >
        <span class="navbar-toggler-icon"></span></button
      ><a href="#/" class="active navbar-brand"
        ><img src="img/brand/green.png" class="navbar-brand-img" alt="..."
      /></a>
      <ul class="nav align-items-center d-md-none">
        <li
          class="dropdown dropdown nav-item"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <a
            class="nav-link nav-link-icon"
            href="#"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            ><i class="ni ni-bell-55"></i
          ></a>
          <ul class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="#">Action</a
            ><a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </ul>
        </li>
        <li
          class="dropdown dropdown nav-item"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <a class="nav-link" href="#" role="button"
            ><div class="media align-items-center">
              <span class="avatar avatar-sm rounded-circle"
                ><img
                  alt="Image placeholder"
                  src="img/theme/team-1-800x800.jpg"
              /></span></div
          ></a>
          <ul class="dropdown-menu dropdown-menu-right">
            <div class="dropdown-header noti-title">
              <h6 class="text-overflow m-0">Welcome!</h6>
            </div>
            <a href="#/profile" class="dropdown-item"
              ><i class="ni ni-single-02"></i><span>My profile</span></a
            ><a href="#/profile" class="dropdown-item"
              ><i class="ni ni-settings-gear-65"></i><span>Settings</span></a
            ><a href="#/profile" class="dropdown-item"
              ><i class="ni ni-calendar-grid-58"></i><span>Activity</span></a
            ><a href="#/profile" class="dropdown-item"
              ><i class="ni ni-support-16"></i><span>Support</span></a
            >
            <div class="dropdown-divider"></div>
            <a href="#!" class="dropdown-item"
              ><i class="ni ni-user-run"></i><span>Logout</span></a
            >
          </ul>
        </li>
      </ul>
      <div
        class="navbar-collapse collapse show"
        :class="{ 'd-none': !openNav }"
        id="sidenav-collapse-main"
      >
        <div class="navbar-collapse-header d-md-none">
          <div class="row">
            <div class="col-6 collapse-brand">
              <a href="#/" class="active"><img src="img/brand/green.png" /></a>
            </div>
            <div class="col-6 collapse-close">
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
                @click.prevent="toggleModal()"
              >
                <span></span><span></span>
              </button>
            </div>
          </div>
        </div>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a
              aria-current="page"
              href="#/dashboard"
              class="active router-link-exact-active nav-link"
              ><i class="ni ni-tv-2 text-primary"></i
              ><span class="nav-link-text">Dashboard</span></a
            >
          </li>
          <li class="nav-item">
            <a href="#/icons" class="nav-link"
              ><i class="ni ni-planet text-blue"></i
              ><span class="nav-link-text">Icons</span></a
            >
          </li>
          <li class="nav-item">
            <a href="#/maps" class="nav-link"
              ><i class="ni ni-pin-3 text-orange"></i
              ><span class="nav-link-text">Maps</span></a
            >
          </li>
          <li class="nav-item">
            <a href="#/profile" class="nav-link"
              ><i class="ni ni-single-02 text-yellow"></i
              ><span class="nav-link-text">User Profile</span></a
            >
          </li>
          <li class="nav-item">
            <a href="#/tables" class="nav-link"
              ><i class="ni ni-bullet-list-67 text-red"></i
              ><span class="nav-link-text">Tables</span></a
            >
          </li>
          <li class="nav-item">
            <a href="#/login" class="nav-link"
              ><i class="ni ni-key-25 text-info"></i
              ><span class="nav-link-text">Login</span></a
            >
          </li>
          <li class="nav-item">
            <a href="#/register" class="nav-link"
              ><i class="ni ni-circle-08 text-pink"></i
              ><span class="nav-link-text">Register</span></a
            >
          </li>
        </ul>
        <!--Divider-->
        <hr class="my-3" />
        <!--Heading-->
        <h6 class="navbar-heading text-muted">Documentation</h6>
        <!--Navigation-->
        <ul class="navbar-nav mb-md-3">
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://demos.creative-tim.com/vue-argon-dashboard/documentation"
              ><i class="ni ni-spaceship"></i> Getting started
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://demos.creative-tim.com/vue-argon-dashboard/documentation/foundation/colors.html"
              ><i class="ni ni-palette"></i> Foundation
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://demos.creative-tim.com/vue-argon-dashboard/documentation/components/alerts.html"
              ><i class="ni ni-ui-04"></i> Components
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent ({
  name: "Sidebar",
  data() {
      return {
          openNav: false as boolean
      }
  },
  methods: {
    toggleModal() {
      this.openNav = !this.openNav
    },
  },
});
</script>
