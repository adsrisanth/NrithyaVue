<script setup>
import { computed, onMounted, ref } from "vue"
import { useRouter } from "vue-router";

const router = useRouter()

const teams = [
    {
        parent:'Chiefs',
        children:[
            {
                role:'',
                members:[
                    {
                        name:'Ajay N',
                        image:'https://i.postimg.cc/7HQH5sTC/IMG-20240105-192417-428-Namala-Ajay.jpg',
                    },
                    {
                        name:'Dev Adapa',
                        image:'https://i.postimg.cc/wBMKHz2w/photo-2024-02-05-12-43-17.jpg',
                    }  
                ]
            },
        ]
    },
    {
        parent:"Associate Chief's",
        children:[
            {
                role:'',
                members:[
                    {
                        name:'Vishal Kuppili',
                        image:'https://i.postimg.cc/zzqbCcB0/IMG-20240108-002014-Kuppili-Vishal.jpg',
                        designation:'Student Co-Ordinator'
                    },
                    {
                        name:'Jahnavi Kodi',
                        image:'https://i.postimg.cc/Gb32ty4s/drafting-photo-Kodi-Jahnavi-1.jpg',
                        designation:'Drafting'
                    },
                    {
                        name:'Surya Pranav Varma D',
                        image:'https://i.postimg.cc/wzn72MGS/IMG-0016-Arun-Sai-Vanama.jpg',
                        designation:'SponsorShip'
                    },
                    {
                        name:'Kishan Rao Kasineni',
                        image:'https://i.postimg.cc/PTCLQZXs/IMG-20221019-214152-400-2-Kishan-Royal.jpg',
                        designation:'Stage Managment'
                    },
                    {
                        name:'Madhuri Nallam',
                        image:'https://i.postimg.cc/265SPgLY/IMG-20240108-065139-MADHURI-NALLAM.jpg',
                        designation:'HR & Grievances'
                    },
                    {
                        name:'Govardhana Siri Teja Konnipati',
                        image:'https://i.postimg.cc/1Rt8TVDF/IMG-20240112-201454-Govardhana-Siri-Teja-Konnipati-1.jpg',
                        designation:'Logistics'
                    },
                    {
                        name:'Sudarshan Preetham K',
                        image:'https://i.postimg.cc/X37BXmtv/IMG-3496-SUDARSAN-PREETHAM.jpg',
                        designation:'Campus Relations'
                    },
                    {
                        name:'Sai Gana Mukesh Polasani',
                        image:'https://i.postimg.cc/ZZ7BNjhx/In-Shot-20231129-105518959-Polasani-sai-Gana-mukesh.jpg',
                        designation:'Protocol'
                    },
                    {
                        name:'Prudhvi Raju Penumatsa',
                        image:'https://i.postimg.cc/T1LYPmcH/Screenshot-2024-01-12-223626.png',
                        designation:'Design Production'
                    },
                    {
                        name:'Trishitha Ketineni',
                        image:'https://i.postimg.cc/MW2jTT8k/Trishitha-Ketineni-Trishitha.jpg',
                        designation:'Public Relations & Marketing'
                    },
                    {
                        name:'Sarvani D',
                        image:'https://i.postimg.cc/ydw2Fr9B/photo-2024-02-05-13-00-49.jpg',
                        designation:'Event Manager'
                    },{
                        name:'Pavan Sai',
                        image:'https://i.postimg.cc/mZHvbBfr/photo-2024-02-05-13-00-51.jpg',
                        designation:'Stall'
                    },{
                        name:'Sujana Jonnala',
                        image:'https://i.postimg.cc/RVxjhy4L/photo-2024-02-05-13-00-51-2.jpg',
                        designation:'Legal & Space Management'
                    },{
                        name:'Satwika Punna',
                        image:'https://i.postimg.cc/ZKPXdHqt/photo-2024-02-05-13-00-52.jpg',
                        designation:'Registrations & Assitance'
                    },{
                        name:'Tejaswini CH',
                        image:'https://i.postimg.cc/1tgLVZ8J/photo-2024-02-05-13-00-53.jpg',
                        designation:'Spot Events'
                    },{
                        name:'Vidya Praveena Guna',
                        image:'https://i.postimg.cc/rsx3gCC4/photo-2024-02-05-13-00-54.jpg',
                        designation:'Media'
                    },{
                        name:'Akansha Adapa',
                        image:'https://i.postimg.cc/k55r9Sqr/photo-2024-02-05-13-00-55.jpg',
                        designation:'Ambiance'
                    },
                ]
            },
        ]
    },
    {
        parent:"Website",
        children:[{
            role: '',
            members:[
                    {
                        name:'Dinesh SriSanth Adari',
                        image:'https://i.postimg.cc/4Xf17FmL/photo-2024-02-11-19-24-06.jpg',
                    },
                    {
                        name:'Harsha Vardhan Polamarsetty',
                        image:'https://i.postimg.cc/bqfCFJGM/Whats-App-Image-2024-02-11-at-19-15-52.jpg',
                    },
                    {
                        name:'Shaik Arshad',
                        image:'https://i.postimg.cc/VL67rFYX/aishwariya.png',
                    }
                ]
            }
        ]
    }
]

const activeParent = ref('Chiefs')
const activeParentIndex = computed(() => {
    return teams.findIndex(team => team.parent === activeParent.value);
});

const activeChild = ref(teams[activeParentIndex.value].children[0].role || '')

const activeChildIndex = computed(() => {
    const activeParentIndexValue = activeParentIndex.value;
    const activeChildValue = activeChild.value;

    if (activeParentIndexValue !== -1) {
        const activeParentChildren = teams[activeParentIndexValue].children;

        // Find the index of the active child role
        const index = activeParentChildren.findIndex(child => child.role === activeChildValue);

        return index;
    }

    return -1;
});

const handleParentNavItemClick = (team) =>{
    activeParent.value = team
    activeChild.value = teams[activeParentIndex.value].children[0].role
}

const handleChildrenNavItemClick = (role) =>{
    activeChild.value = role.role
}

onMounted(()=>{
    document.title = `Team - Nrithya`
})

</script>

<template>
    <div class="flex flex-col min-h-[100vh] bg-[rgb(0,0,0)] justify-center py-4 ssm:pb-12 px-8">
        <button @click="router.back()" class="arrow-icon-prev fixed top-5 left-5 duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
        </button>
        <span class="text-center font-montserrat font-extrabold tracking-wide text-3xl sm:text-4xl relative mt-16">Team Nrithya</span>
        <div class="flex flex-col gap-8 w-full justify-center relative mt-6">
            <nav aria-label="team-parent-nav" class="flex justify-center">
                <div class="border-b-2 border-gray-300 border-opacity-50 px-8 flex flex-wrap justify-center gap-8 pb-2">
                    <button :class="activeParent==team.parent ? 'text-gray-50': 'text-gray-400'" class="text-xl hover:text-gray-300 font-semibold transition-all tracking-wider" v-for="team in teams" :key="team.parent" @click="handleParentNavItemClick(team.parent)">{{ team.parent }}</button>
                </div>
            </nav>
            <nav v-if="teams[activeParentIndex].children[0].role.length>0 || false" aria-label="team-children-nav" class="flex justify-center">
                <div class="border-b-2 border-gray-300 border-opacity-50 px-8 flex flex-wrap justify-center gap-8 pb-2">
                    <button :class="activeChild==role.role?'text-gray-50':'text-gray-400'" class="text-xl hover:text-gray-300 font-semibold transition-all tracking-wider" v-for="role in teams[activeParentIndex].children" :key="role" @click="handleChildrenNavItemClick(role)">{{ role.role }}</button>
                </div>
            </nav>
        </div>

        <div class="flex relative min-[100vh] mt-12 justify-center">
            <div class="flex sm:gap-14 gap-10 flex-wrap justify-evenly">
                <div class="group rounded-2xl cursor-pointer scale-95 hover:scale-100 transition-all bg-[#1d1e2a] max-w-[250px] max-h-[350px] md:max-w-[300px] md:max-h-[400px] overflow-hidden" v-for="(member, index) in teams[activeParentIndex].children[activeChildIndex].members" :key="index">
                    <img class="group-hover:bg-opacity-20" :src="member.image" :alt="member.name"/>
                    <div class="flex rounded-r-lg group-hover:bg-[rgb(0,0,0)] group-hover:translate-x-0 group-hover:transition-all group-hover:duration-700 -translate-x-10 group-hover:backdrop:blur-xl flex-col px-4 py-2 absolute opacity-0 group-hover:opacity-100 bg-transparent bottom-3 text-center">
                        <span class="text-lg text-gray-300 font-semibold font-merriweather">{{ member.name }}</span>
                        <span class="text-md text-gray-400 font-robotoslab">{{ member.designation }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Oswald:wght@400;600&family=Roboto+Slab:wght@300;400;700&display=swap');
.arrow-icon-prev{
    animation: left-right 1000ms infinite;
}

@keyframes left-right {
    0% {
        transform: translateX(0);
    }
    50% {
        transform: translateX(-5px);
    }
    100% {
        transform: translateX(0);
    }
}

</style>