<template>
    <v-app class="main-bg" theme="dark">
        <v-container fluid class="bg-transparent" density="prominent">
            <div class="d-flex flex-column">
                <p class="name-text">Mark Gerald Teoc</p>
                <p class="name-subtext"><span style="color: #ff4500;">-</span>Fullstack Web Developer</p>
                <v-divider></v-divider>
                <div class="d-flex gap-4 pt-2">
                    <div class="mr-3">
                        <v-btn variant="text" ripple="false" size="x-small" @click="$router.push({name: 'home'})" class="nav-text">Home</v-btn>
                        <v-divider class="nav-icon" thickness="3" v-show="$route.path == '/'"></v-divider>
                    </div>
                    <div class="mr-3">
                        <v-btn variant="text" ripple="false" size="x-small" @click="$router.push({name: 'about'})" class="nav-text">About</v-btn>
                        <v-divider class="nav-icon" thickness="3" v-show="$route.path == '/about'"></v-divider>
                    </div>
                    <div class="mr-3">
                        <v-btn variant="text" ripple="false" size="x-small" @click="$router.push({name: 'projects'})" class="nav-text">Projects</v-btn>
                        <v-divider class="nav-icon" thickness="3" v-show="$route.path == '/projects'"></v-divider>
                    </div>
                    <div class="mr-3">
                        <v-btn variant="text" ripple="false" size="x-small" @click="$router.push({name: 'contact'})" class="nav-text">Contact</v-btn>
                        <v-divider class="nav-icon" thickness="3" v-show="$route.path == '/contact'"></v-divider>
                    </div>
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

