<template>
    <div class="list_box">
        <div class="list">
            <div v-for="(item, index) in getList" :key="index" class="item">
                <span>{{ item.name }}</span>
                <span>{{ item.description }}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    computed: {
        getList() {
            return this.$store.getters.getList;
        }
    }
}
</script>
<style scoped>
.list_box {
    overflow-x: auto;
}

.list {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.item {
    background-color: #fff;
    border-radius: 12px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

span:first-child {
    font-size: 18px;
    font-weight: bold;
}

span:last-child {
    font-size: 12px;
    color: #999;
}
</style>