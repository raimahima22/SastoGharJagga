<template>
    <nav class="navbar">
        <!-- Navbar Brand -->
        <div class="navbar-brand">
            <img v-bind:src="img" alt="logo" class="logo" />

            <!-- <router-link to="/">Brand</router-link> -->
        </div>

        <!-- Navbar Toggler -->
        <!-- <button class="navbar-toggler" @click="isCollapsed = !isCollapsed">
        ☰
      </button> -->

        <!-- Navbar Links -->
        <div class="navbar-collapse" :class="{ show: isCollapsed }">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link
                        to="/"
                        class="nav-link"
                        :class="{ active: activeLink === '/' }"
                        @click="setActive('/')"
                        >Home</router-link
                    >
                </li>
                <li class="nav-item">
                    <router-link
                        to="/about"
                        class="nav-link"
                        :class="{ active: activeLink === '/about' }"
                        @click="setActive('/about')"
                        >About</router-link
                    >
                </li>
                <li class="nav-item dropdown" @click="toggleDropdown">
                    <a href="#" class="nav-link dropdown-toggle"> Dropdown </a>
                    <ul class="dropdown-menu" v-if="isDropdownOpen">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another Action</a></li>
                        <li><a href="#">Something else here</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <router-link
                        to="/login"
                        class="nav-link"
                        :class="{ active: activeLink === '/login' }"
                        @click="setActive('/login')"
                        >Login</router-link
                    >
                </li>
            </ul>

            <!-- Search Form -->
            <form class="search-form" @submit.prevent="search">
                <input
                    type="text"
                    placeholder="Search..."
                    v-model="searchQuery"
                />
                <button type="submit">Search</button>
            </form>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            isCollapsed: false,
            isDropdownOpen: false,
            activeLink: "/",
            searchQuery: "",
            img: "/images/logo.png",
        };
    },

    methods: {
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
        },
        setActive(link) {
            this.activeLink = link;
            this.isDropdownOpen = false; // Close dropdown when a link is clicked
        },
        search() {
            alert(`Searching for: ${this.searchQuery}`);
        },
    },
};
</script>

<style scoped>
/* Navbar styling */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: #f8f9fa; */
    padding: 10px 20px;
    border-bottom: 1px solid #ddd;
}
.navbar-brand a {
    font-size: 1.5em;
    text-decoration: none;
    color: #333;
}
.navbar-toggler {
    font-size: 1.5em;
    border: none;
    background: none;
    cursor: pointer;
}
.navbar-collapse {
    display: none;
    flex-direction: column;
}
.navbar-collapse.show {
    display: flex;
}
.navbar-nav {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
}
.nav-item {
    margin: 5px 0;
}
.nav-link {
    text-decoration: none;
    color: #333;
    padding: 5px 10px;
    transition: background-color 0.2s;
}
/* .nav-link.active {
    background-color: #007bff;
    color: #fff;
  } */
/* .nav-link:hover {
    background-color: #007bff;
    color: #fff;
  } */
.dropdown-menu {
    list-style: none;
    padding: 10px;
    margin: 0;
    background-color: #fff;
    border: 1px solid #ddd;
    position: absolute;
}
.dropdown-menu li {
    margin: 5px 0;
}
.search-form {
    margin-top: 10px;
}
.search-form input {
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 3px;
}
.search-form button {
    padding: 5px 10px;
    border: none;
    background-color: #007bff;
    color: white;
    border-radius: 3px;
    cursor: pointer;
}
.search-form button:hover {
    background-color: #0056b3;
}
.logo {
    width: 300px; /* Adjust width */
    height: auto;
    display: block;
    margin: auto;
    margin-bottom: -100px;
}

/* Responsive Design */
@media (min-width: 768px) {
    .navbar-collapse {
        display: flex !important;
        flex-direction: row;
        align-items: center;
    }
    .navbar-nav {
        flex-direction: row;
        margin-left: auto;
    }
    .nav-item {
        margin: 0 10px;
    }
    .search-form {
        margin: 0;
        margin-left: auto;
    }
}
</style>
