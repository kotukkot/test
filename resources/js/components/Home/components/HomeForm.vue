<template>
    <form class="form" @submit.prevent="send">
        <div class="form_group">
            <input type="text" placeholder="Имя" v-model.trim="form.name">
        </div>
        <div class="form_group">
            <textarea type="text" placeholder="Обращение" v-model.trim="form.description"></textarea>
        </div>
        <button class="btn_primary" type="submit">Отправить</button>
    </form>
</template>
<script>
import peoplesData from './peoples.json';
export default {
    data() {
        return {
            peoples: peoplesData,
            form: {
                name: null,
                description: null
            },
        }
    },
    methods: {
        clearForm() {
            this.form = {
                name: null,
                description: null
            }
        },
        async send() {
            await this.$store.commit('addValue', this.form)
            this.generatePeople();
        },
        randInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min)
        },
        generatePeople() {
            this.form = {
                name: this.peoples[this.randInt(0, 4)].firstName + ' ' + this.peoples[this.randInt(0, 4)].lastName,
                description: this.peoples[this.randInt(0, 4)].description
            }

        }
    },
    mounted() {
        this.generatePeople();
    }
}
</script>
<style scoped>
.form {
    background: #fff;
    border-radius: 12px;
    padding: 15px;
    max-width: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    flex-grow: 1;
}

textarea,
input {
    width: 100%;
    padding: 15px;
    background-color: #f1f1f1;
}
</style>