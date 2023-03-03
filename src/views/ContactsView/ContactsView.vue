<template>
    <div class="wide zxc column ">
        <h1>
            Спасибо, что воспользовались нашей платформой!
            <br>
            
        </h1>
        <span>
            <strong>Наши контакты:</strong> 
            <br>
            Моб. телефон: +79776563263
            <br>
            Почта: tabalex2005@gmail.com
        </span>
        <hr>
        
        <span class="my-logo">
            <h3>Проект подготовил </h3>
            <span class="row_el to_center">
                <img src="https://sun1-18.userapi.com/impg/ustdgM7COwwUOxZ3oo2yVAcdGJrNKU7NgWG7Zg/DUIT5oew9Io.jpg?size=2048x2048&quality=95&sign=c750ba9c8ff32a4e44b0a5b8b173537a&type=album" alt="daun">
                
               
                <span class="dir-section">
                    <h4>
                    Табольский Александр
                    </h4>
                    <h6>
                        ученик 11 Б класса
                    </h6>
                    <br>
                    <a class="direction" href="https://github.com/AlexLovser">
                        GitHub
                    </a>
                    <a class="direction" href="https://vk.com/alex_lovser">
                        VK
                    </a>
                    <a class="direction" href="https://t.me/alex_lovser">
                        Telegram
                    </a>
                </span>
            </span>
            <br>

            <h3>Подготовка / Помощь</h3>
           
            <span class="row_el to_center">
                <img src="https://sun1-84.userapi.com/impf/c836234/v836234639/455ea/G1U7RXdI-R4.jpg?size=1717x2160&quality=96&sign=e3d34b65dc9e826b4edbe922f47b0fbf&type=album" alt="daun">
                
               
                <span class="dir-section">
                    <h4>
                        Абрамов Александр Александрочич 
                    </h4>
                    <h6>
                        Куратор проекта, учитель информатики
                    </h6>

                </span>
            </span>
            <br>
            <span class="row_el to_center">
                <img src="https://sun1-16.userapi.com/s/v1/if1/Z9uH6-atz48SVmzt-Q88AFKw6encIx8f_v3L_plvxhRyuqgMDO0YTWfLc_ORyh0tGTybMtPZ.jpg?size=200x200&quality=96&crop=247,103,573,573&ava=1" alt="daun">
                
               
                <span class="dir-section">
                    <h4>
                    Александа Сергеевна
                    </h4>
                    <h6>
                        Помощь и моральная поддержка, учитель информатики
                    </h6>

                </span>
            </span>
            <br>
            <span class="row_el to_center">
                <img src="https://sun1-57.userapi.com/s/v1/ig2/rUPsBqnlzfQ0xAMdlpL8RS_wKaGd9EJE96504bWmPG1b_xc3fvci6f7Xk86pw5LyuWqLRDHszdqr200BvCeCtYyG.jpg?size=200x200&quality=95&crop=543,639,959,959&ava=1" alt="daun">
                
               
                <span class="dir-section">
                    <h4>
                    Борисова Светлана Александровна
                    </h4>
                    <h6>
                        Куратор проекта, учитель физики
                    </h6>

                </span>
            </span>
           
        </span>
       
    </div>
</template>


<script>
import './ContactsView.css';

import { useStore } from '@/stores/mainStore';

export default {
    name: 'ContactsView',
    setup() {
        const store = useStore()
        return {
            store,
        }
    },
    methods: {
        
    },
}
</script>