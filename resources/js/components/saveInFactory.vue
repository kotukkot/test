<template>
    <div class="default_box">
        <small>Отправка данных на back-end с помощью axios, далее обработка и сохранение в базу sqlite</small>
        <form @submit.prevent="send">
            <div class="group_radio_buttons">
                <label class="radio_button" :class="form.type === 'database' ? 'active' : ''">
                    <span>database</span>
                    <input type="radio" v-model="form.type" value="database" hidden>
                </label>

                <label class="radio_button" :class="form.type === 'email' ? 'active' : ''">
                    <span>email</span>
                    <input type="radio" v-model="form.type" value="email" hidden>
                </label>
            </div>
            <button class="btn_primary" type="submit">Отправить тип в back-end</button>
        </form>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            form: {
                type: 'database'
            }
        }
    },
    methods: {
        send() {
            axios
                .post('/api/test', this.form)
                .then(response => {
                    console.log(response);
                });
        }
    }
}
</script>
<style scoped>
.group_radio_buttons {
    display: flex;
    gap: 15px;
    margin-bottom: 15px;
}

input[type=radio] {
    position: absolute;
    inset: 0;
    z-index: 1;
}


.radio_button {
    background: rgba(var(--primary-color), 1);
    color: #fff;
    padding: 10px;
    border-radius: 4px;
    width: 100%;
    position: relative;
    transition: .2s;
    text-align: center;
}

.radio_button.active {
    background: rgba(var(--alternate-color), 1);
}

small {
    font-size: 12px;
    color: #999;
    margin-bottom: 20px;
    display: block;
}
</style>