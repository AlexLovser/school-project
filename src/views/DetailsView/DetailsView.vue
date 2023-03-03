<template>
    <div class="zxc column to_center">
        
 
        <div class="details-banner">
            <img :src="`/unis/${uni.tag}.jpg`" alt="logo">
        </div >
        <h1>
            {{ uni.full_name }}
        </h1>
        <span class="uni-short-description">
            {{ uni.description }}
            
            <br/>
            <strong>Направления:</strong>
            <br/>
            
            <span class="dirs-section ">
                <div v-for="dir in uni.directions" :key="dir" class="direction">
                    {{ dir }}
                </div>
            </span>

            <span class="fac-section">
                <div v-for="fac in uni.facs" :key="fac" class="fac">
                    <img :src="`/fac_back.jpg`" alt="logo">
                    {{ fac }}
                </div>
            </span>
            
        </span>

        <h1 style="margin-top: 3rem; margin-bottom: 3rem;">Спасибо, что используете проект "Кто я?"!</h1>
        

       


    </div>
</template>


<script>
import './DetailsView.css';
import { useRoute } from 'vue-router';
import { useStore } from '@/stores/mainStore';

export default {
    name: 'DetailsView',
    setup() {
        const tag = useRoute().params.tag
        const store = useStore()
        let uni

        for (let i of store.unis) {
            if (i.tag === tag) {
                uni = i
            }
        }
        console.log(uni.tag)
        return {
            uni,
            publicPath: process.env.BASE_URL
        }
    },
    methods: {
        
    },
}
</script>