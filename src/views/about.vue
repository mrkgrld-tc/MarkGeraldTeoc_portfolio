<template>
    <v-container>
        <div>
            <p class="title-text">Character Profile</p>
            <v-divider></v-divider>
            <div class="d-flex pa-2 align-center">
                <v-avatar image="src\assets\profile.jpg" size="100"></v-avatar>
                <v-divider vertical class="px-2"></v-divider>
                <div class="pl-3 d-flex flex-column">
                    <p>Nickname: The man, the myth, the legend "Gerald"</p>
                    <p>Level: 23</p>
                    <v-progress-linear class="accent" model-value="20"></v-progress-linear>
                    <p>Server: Cavite, Phillipines</p>
                    <p>Class: Fullstack Developer</p>
                    <p>Passive: Enhance debugging skill after 5:00pm</p>
                </div>
            </div>
            <v-divider></v-divider>
            <p class="title-text">Quests</p>
            <v-row>
                <v-col lg="6" md="6" sm="12" cols="12" v-for="(item, i) in missions" :key="i">
                    <v-card 
                        class="glass-card" 
                        @click="toggleLock(item)"
                        @mouseenter="handleMouseEnter(item)"
                        @mouseleave="handleMouseLeave(item)"
                    >
                        <div class="d-flex">
                            <p class="subtitle-text">{{item.title}}</p>
                            <v-spacer></v-spacer>
                            <v-icon>{{ item.locked ? 'mdi-information' : 'mdi-information-outline' }}</v-icon>
                        </div>
                        <v-divider></v-divider>
                        <div>
                            <p>Info: {{item.info}}</p>
                            <p>Difficulty: <span :class="'text-'+item.color">{{item.difficulty}}</span></p>
                            <p>Status:<span class="text-green">Finished</span></p>
                        </div>
                        <v-expand-transition>
                            <div v-show="item.viewInfo">
                                <p v-for="([key, val], i) in Object.entries(item.details)" :key="i">
                                    {{ key }}: {{ val }}
                                </p>
                            </div>
                        </v-expand-transition>
                    </v-card>
                </v-col>
            </v-row>
        </div>
    </v-container>
</template>
<script>
    export default{
        data(){
            return{
                missions: [
                    {
                        title: 'Graduate College',
                        info: 'Finish College and obtain a college degree',
                        difficulty : 'Hard',
                        color: 'red',
                        status: 'Finished',
                        viewInfo: false,
                        locked: false,
                        details:{
                            School: 'Mindoro State University Main Campus',
                            Course: 'Bachelor of Science in Information Technology',
                            Achievements: 'One of Three who passed the DICT Proficiency Examination'
                        }
                    },
                    {
                        title: 'Graduate Senior High School',
                        info: 'Complete specialized track and college preparation',
                        difficulty : 'Medium-Hard',
                        color: 'orange',
                        status: 'Finished',
                        viewInfo: false,
                        locked: false,
                        details:{
                            School: 'Leuteboro National HighSchool',
                            Strand: 'General Academic Strand',
                            Achievements: 'Graduate with Honors (gwa: 94)'
                        }
                    },
                    {
                        title: 'Graduate Junior High School',
                        info: 'Complete secondary education and core subjects',
                        difficulty : 'Medium',
                        color: 'yellow',
                        status: 'Finished',
                        viewInfo: false,
                        locked: false,
                        details:{
                            School: 'Leuteboro National HighSchool',
                            Achievements: 'Perfect Attendance'
                        }
                    },
                    {
                        title: 'Graduate Elementary',
                        info: 'Complete elementary education and basic fundamentals',
                        difficulty : 'Easy',
                        color: 'green',
                        status: 'Finished',
                        viewInfo: false,
                        locked: false,
                        details:{
                            School: 'Matungao Elementary School',
                            Achievements: 'consistent with ribbon, (mabait, malinis, tahimik)'
                        }
                    },
                ],
            }
        },
        methods: {
            toggleLock(item) {
                item.locked = !item.locked;
                item.viewInfo = item.locked;
            },
            handleMouseEnter(item) {
                if (!item.locked) {
                    item.viewInfo = true;
                }
            },
            handleMouseLeave(item) {
                if (!item.locked) {
                    item.viewInfo = false;
                }
            }
        }
    }
</script>
<style>
</style>
