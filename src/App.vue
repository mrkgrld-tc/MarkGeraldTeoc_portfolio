<template>
    <v-app class="main-bg" theme="dark">
        <v-container fluid class="bg-transparent" density="prominent">
            <div class="d-flex flex-column">
                <p class="name-text">Mark Gerald Teoc</p>
                <p class="name-subtext"><span style="color: #ff4500;">-</span>Fullstack Web Developer</p>
                <v-divider></v-divider>
                <div class="d-flex flex-column pt-4">
                    <p @click="$router.push({name: 'home'})" class="nav-text">
                        Home
                        <v-icon class="nav-icon" v-show="$route.path == '/'">mdi-chevron-left</v-icon>
                    </p>
                    <p @click="$router.push({name: 'about'})" class="nav-text">
                        About
                        <v-icon class="nav-icon" v-show="$route.path == '/about'">mdi-chevron-left</v-icon>
                    </p>
                    <p @click="$router.push({name: 'projects'})" class="nav-text">
                        Projects
                        <v-icon class="nav-icon" v-show="$route.path == '/projects'">mdi-chevron-left</v-icon>
                    </p>
                    <p @click="$router.push({name: 'contact'})" class="nav-text">
                        Contact
                        <v-icon class="nav-icon" v-show="$route.path == '/contact'" >mdi-chevron-left</v-icon>
                    </p>
                </div>
            </div>
        </v-container>
        <v-main>
          <router-view></router-view>
        </v-main>
    </v-app>
</template>
<script>
export default{
    
}
</script>

