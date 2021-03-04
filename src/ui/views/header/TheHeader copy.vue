<template>
  <div class="flex page-container">
    <nav class="navbar">
	<div class="navbrand">
		<h1><a href="./index.html" class="brand">Brand</a></h1>
		<div class="burger" id="burger">
			<span class="burger-open">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="16">
					<g fill="#252a32" fill-rule="evenodd">
						<path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z" />
					</g>
				</svg>
			</span>
			<span class="burger-close">
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
					<path fill="#252a32" fill-rule="evenodd" d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z" />
				</svg>
			</span>
		</div>
	</div>
	<ul class="menu" id="menu">
		<li class="menu-item"><a href="#" class="menu-link">Menu</a></li>
		<li class="menu-item"><a href="#" class="menu-link">Menu</a></li>
		<li class="menu-item"><a href="#" class="menu-link">Menu</a></li>
		<li class="menu-item"><a href="#" class="menu-link">Menu</a></li>
		<li class="menu-item"><a href="#" class="menu-link">Menu</a></li>
	</ul>
	<div class="social">
		<a href="#" class="social-item"><i class="fab fa-facebook"></i></a>
		<a href="#" class="social-item"><i class="fab fa-twitter"></i></a>
		<a href="#" class="social-item"><i class="fab fa-instagram"></i></a>
		<a href="#" class="social-item"><i class="fab fa-pinterest"></i></a>
	</div>
</nav>
    <!-- <router-link :to="{ name: 'Home' }">
      <img src="~@/ui/assets/images/logo_black.png" alt="logo" title="logo">
    </router-link>
    <TopNav class="margin-auto-r"/>
    <router-link :to="{ name: 'Login' }" class="sign-out">Sign out</router-link> -->
  </div>
</template>

<script>
// import TopNav from '@/ui/views/nav/TheTopNav.vue'

export default {
  components: {
    
  }
}
</script>
<style lang="scss" scoped>
.flex {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.sign-out {
  @media all and (max-width: 768px) {
    display: none;
  }
}

$color-white: #ffffff;
$color-black: #252a32;
$color-light: #f1f5f8;
$color-red: #d32f2f;
$color-blue: #148cb8;

$box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.24);

@mixin largescreen {
	@media only screen and(min-width: 768px) {
		@content;
	}
}

*,
*::before,
*::after {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	list-style: none;
	list-style-type: none;
	text-decoration: none;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	text-rendering: optimizeLegibility;
}

body {
	font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
	font-size: 1rem;
	font-weight: normal;
	line-height: 1.5;
	color: $color-black;
	background: $color-light;
}

img {
	display: block;
	width: 100%;
	height: auto;
}

a,
button {
	font-family: inherit;
	font-size: inherit;
	line-height: inherit;
	cursor: pointer;
	border: none;
	outline: none;
	background: none;
	text-decoration: none;
}

// Elements
.container {
	max-width: 80rem;
	width: 100%;
	height: auto;
	padding: 0 2rem;
	margin: 0 auto;
}

.brand {
	font-family: inherit;
	font-size: 1.75rem;
	font-weight: 700;
	line-height: inherit;
	color: $color-blue;
	text-transform: uppercase;
	text-rendering: optimizeLegibility;
}

// Navbar
.navbar {
	width: 100%;
	height: auto;
	padding: 1rem 2rem;
	color: $color-black;
	background: $color-white;
	box-shadow: $box-shadow;

	// Media Query for Desktop
	@include largescreen {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin: 0 auto;
	}

	.navbrand {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		.burger {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			cursor: pointer;
			border: none;
			outline: none;
			background: none;
			transition: all 0.35s ease;

			&-close {
				display: none;
			}

			&.active {
				.burger-open {
					display: none;
				}
				.burger-close {
					display: flex;
				}
			}

			// Media Query for Desktop
			@include largescreen {
				display: none;
			}
		}
	}

	.menu {
		width: 100%;
		height: 0;
		overflow: hidden;
		transition: all 0.5s ease;

		&-item {
			margin: 0.5rem 0;
		}

		&-link {
			font-family: inherit;
			font-size: 1rem;
			font-weight: 500;
			line-height: inherit;
			color: $color-black;
			text-transform: uppercase;
			text-rendering: optimizeLegibility;
			transition: all 0.35s ease;

			&:hover {
				color: $color-blue;
			}
		}

		&.active {
			width: 100%;
			height: 10rem;
			margin: 1rem 0;
		}

		// Media Query for Desktop
		@include largescreen {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			height: auto;

			&-item {
				padding: 0;
				margin: 0 0.5rem;
			}
		}
	}

	.social {
		display: none;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		&-item {
			font-size: 1.65rem;
			line-height: inherit;
			margin: 0 0.5rem;
			color: $color-black;
			transition: all 0.35s ease;

			&:hover {
				color: $color-blue;
			}
		}

		// Media Query for Desktop
		@include largescreen {
			display: flex;
		}
	}
}


</style>
