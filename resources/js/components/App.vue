<template>
    <div class="container">
        <SaveInFactory />
        <main class="main_container">
            <div class="counters">
                <div class="conters_item">
                    <span>В хранилище VueX:</span>
                    <b>{{ $store.getters.getLength }}</b>
                    <span> записей</span>
                </div>
                <button class="btn_primary" @click="$store.commit('clearValues')">Очистить хранилище</button>
            </div>
            <div class="route_link_container">
                <router-link :to="{ name: 'home' }" class="route_link">Home</router-link>
                <router-link :to="{ name: 'ListPage' }" class="route_link">List</router-link>
            </div>
            <router-view />
        </main>
    </div>
</template>
<script>
import SaveInFactory from './saveInFactory.vue';
export default {
    components: {
        SaveInFactory
    }
}
</script>
<style>
.container {
    max-width: 600px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 15px;
    padding: 15px;
    margin: 0 auto;
}

.route_link_container {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    width: 100%;
}

.route_link {
    flex-grow: 1;
}

.main_container {
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 600px;
    width: 100%;
}

.main_container>div {
    display: flex;
    justify-content: center;
    width: 100%;
}

.counters {
    background-color: #fff;
    border-radius: 12px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
}
</style>