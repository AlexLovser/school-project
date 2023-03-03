<template>
    <div id="header">

            <div id="logo">
                <img src="logo.png" alt="logo" >
                Кто Я?
            </div>
                



            <router-link to="/" class="header-item">
                Общее
            </router-link>

      
            <router-link to="/katalog" class="header-item">
                Каталог вузов
            </router-link>

            <router-link to="/contacts" class="header-item">
                Наши контакты
            </router-link>
     
    </div>
</template>

<script>
import './Header.css';


export default {
    name: 'HeaderVue',
    methods: {

    }
}
</script>