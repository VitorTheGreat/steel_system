<template>
	<div class="main-content" data="vue">
		<nav class="navbar navbar-expand-md navbar-top navbar-dark" id="navbar-main">
			<div class="container-fluid"><a aria-current="page" href="#/dashboard" class="active router-link-exact-active h4 mb-0 text-white text-uppercase d-none d-lg-inline-block">dashboard</a>
				<!--v-if-->
				<div class="collapse navbar-collapse" id="0.9894065802421679">
					<ul class="navbar-nav align-items-center d-none d-md-flex ml-lg-auto">
						<li class="nav-item dropdown">
							<li class="dropdown dropdown nav-link pr-0" aria-haspopup="true" aria-expanded="false">
								<div class="media align-items-center"><span class="avatar avatar-sm rounded-circle"><img alt="Image placeholder" src="img/theme/team-4-800x800.jpg"></span>
									<div class="media-body ml-2 d-none d-lg-block"><span class="mb-0 text-sm font-weight-bold">Jessica Jones</span></div>
								</div>
								<ul class="dropdown-menu">
									<div class="dropdown-header noti-title">
										<h6 class="text-overflow m-0">Welcome!</h6></div><a href="#/profile" class="dropdown-item"><i class="ni ni-single-02"></i><span>My profile</span></a><a href="#/profile" class="dropdown-item"><i class="ni ni-settings-gear-65"></i><span>Settings</span></a><a href="#/profile" class="dropdown-item"><i class="ni ni-calendar-grid-58"></i><span>Activity</span></a><a href="#/profile" class="dropdown-item"><i class="ni ni-support-16"></i><span>Support</span></a>
									<div class="dropdown-divider"></div><a href="#/profile" class="dropdown-item"><i class="ni ni-user-run"></i><span>Logout</span></a></ul>
							</li>
						</li>
					</ul>
				</div>
			</div>
		</nav>
		<div>
			<!-- your content here -->
			<div>
				<div class="header bg-gradient-success pb-6 pb-8 pt-5 pt-md-8">
					<div class="container-fluid">
						<div class="header-body">
							<div class="row">
								<div class="col-xl-3 col-lg-6">
									<div class="card card-stats mb-4 mb-xl-0" show-footer-line="true">
										<!--v-if-->
										<div class="card-body">
											<div class="row">
												<div class="col">
													<h5 class="card-title text-uppercase text-muted mb-0">Total traffic</h5><span class="h2 font-weight-bold mb-0">350,897</span></div>
												<div class="col-auto">
													<div class="icon icon-shape text-white rounded-circle shadow bg-gradient-red"><i class="ni ni-active-40"></i></div>
												</div>
											</div>
											<p class="mt-3 mb-0 text-sm"><span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 3.48% </span><span class="text-nowrap">Since last month</span></p>
										</div>
										<!--v-if-->
										<!--v-if-->
									</div>
								</div>
								<div class="col-xl-3 col-lg-6">
									<div class="card card-stats mb-4 mb-xl-0" show-footer-line="true">
										<!--v-if-->
										<div class="card-body">
											<div class="row">
												<div class="col">
													<h5 class="card-title text-uppercase text-muted mb-0">Total traffic</h5><span class="h2 font-weight-bold mb-0">2,356</span></div>
												<div class="col-auto">
													<div class="icon icon-shape text-white rounded-circle shadow bg-gradient-orange"><i class="ni ni-chart-pie-35"></i></div>
												</div>
											</div>
											<p class="mt-3 mb-0 text-sm"><span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 12.18% </span><span class="text-nowrap">Since last month</span></p>
										</div>
										<!--v-if-->
										<!--v-if-->
									</div>
								</div>
								<div class="col-xl-3 col-lg-6">
									<div class="card card-stats mb-4 mb-xl-0" show-footer-line="true">
										<!--v-if-->
										<div class="card-body">
											<div class="row">
												<div class="col">
													<h5 class="card-title text-uppercase text-muted mb-0">Sales</h5><span class="h2 font-weight-bold mb-0">924</span></div>
												<div class="col-auto">
													<div class="icon icon-shape text-white rounded-circle shadow bg-gradient-green"><i class="ni ni-money-coins"></i></div>
												</div>
											</div>
											<p class="mt-3 mb-0 text-sm"><span class="text-danger mr-2"><i class="fa fa-arrow-down"></i> 5.72% </span><span class="text-nowrap">Since last month</span></p>
										</div>
										<!--v-if-->
										<!--v-if-->
									</div>
								</div>
								<div class="col-xl-3 col-lg-6">
									<div class="card card-stats mb-4 mb-xl-0" show-footer-line="true">
										<!--v-if-->
										<div class="card-body">
											<div class="row">
												<div class="col">
													<h5 class="card-title text-uppercase text-muted mb-0">Performance</h5><span class="h2 font-weight-bold mb-0">49,65%</span></div>
												<div class="col-auto">
													<div class="icon icon-shape text-white rounded-circle shadow bg-gradient-info"><i class="ni ni-chart-bar-32"></i></div>
												</div>
											</div>
											<p class="mt-3 mb-0 text-sm"><span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 54.8% </span><span class="text-nowrap">Since last month</span></p>
										</div>
										<!--v-if-->
										<!--v-if-->
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="container-fluid mt--7">
				
                    <div class="row">
                        <div class="col"> 
                            <button @click="getAllProducts()" class="btn btn-icon btn-primary" type="button">
                                <span class="btn-inner--icon"><i class="ni ni-bag-17"></i></span>
                                <span class="btn-inner--text">Get All products</span>
                            </button>
                        </div>
                    </div>
				</div>
			</div>
			<footer class="footer px-4">
				<div class="row align-items-center justify-content-lg-between">
					<div class="col-lg-6">
						<div class="copyright text-center text-lg-left text-muted"> © 2021 <a href="https://www.creative-tim.com" class="font-weight-bold ml-1" target="_blank">Creative Tim</a></div>
					</div>
					<div class="col-lg-6">
						<ul class="nav nav-footer justify-content-center justify-content-lg-end">
							<li class="nav-item"><a href="https://www.creative-tim.com" class="nav-link" target="_blank">Creative Tim</a></li>
							<li class="nav-item"><a href="https://www.creative-tim.com/presentation" class="nav-link" target="_blank">About Us</a></li>
							<li class="nav-item"><a href="https://www.creative-tim.com/blog" class="nav-link" target="_blank">Blog</a></li>
							<li class="nav-item"><a href="https://www.creative-tim.com/license" class="nav-link" target="_blank">License</a></li>
						</ul>
					</div>
				</div>
			</footer>
		</div>
	</div>
</template>

<script lang="ts">
import axios from "axios";

export default {
  methods: {
    getAllProducts() {
      axios
        .get("http://localhost:3000/api/products/getAll")
        .then((result) => console.log("result => ", result))
        .catch((err) => console.log("err => ", err));
    },
  },
};
</script>
