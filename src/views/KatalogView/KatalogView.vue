<template>
    <div class="zxc column">
        <h2>
            Текущий перечень вузов:
        </h2>

        <input type="text" placeholder="Введите ключевые слова" v-model="request" class="search-input">
    </div>
    <div class="zxc column" v-for="item in searchArray" :key="item.tag">

        <router-link :to="`/uni/${item.tag}`" class="item-link">
            <h3>
                {{ item.full_name }}
            </h3>
            
        </router-link>

        <div class="row_el">
            <div class="university-logo">
                <img :src="`unis/${item.tag}.jpg`" alt="logo">
            </div >
            <span class="uni-short-description">
                {{ item.description }}
                
                <br/>
                <br/>
                <span class="dirs-section ">
                    <div v-for="dir in item.directions" :key="dir" class="direction">
                        {{ dir }}
                    </div>
                </span>
            </span>
        </div>
        
    </div>
</template>


<script>
import './KatalogView.css';
import {ref} from 'vue';
import { useStore } from '@/stores/mainStore';


export default {
    name: 'KatalogView',
    data: () => ({
        request: ref(''),
        store: useStore()
    }),
    methods: {},
    computed: {
        searchArray() {
            if (this.request === '') {
                return this.store.unis
            } else {
                const new_array = []

                for (let i of this.store.unis) {
                    if (
                        i.full_name.includes(this.request) ||
                        i.description.includes(this.request) ||
                        i.location.includes(this.request)

                    ) {
                        new_array.push(i)
                    } else {
                        for (let dir of i.directions) {
                            if (dir.includes(this.request)) {
                                new_array.push(i)
                                break
                            }
                        }
                    }
                }
                return new_array
            }
            
        }
    }
}

</script>