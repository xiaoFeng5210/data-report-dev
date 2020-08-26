<template>
    <div class="sales-view">
        <el-card shadow="hover">
            <template v-slot:header>
                <div class="menu__wrapper">
                    <el-menu mode="horizontal" :default-active="activeIndex"
                    @select="onMenuSelect">
                        <el-menu-item :index="1">销售额</el-menu-item>
                        <el-menu-item :index="2">访问量</el-menu-item>
                    </el-menu>
                </div>
            </template>
            <template>
                <div>body</div>
            </template>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: 'SalesView',
        data() {
            return {
                activeIndex: 1
            }
        },
        methods: {
            onMenuSelect(index) {
                this.activeIndex = index
            }
        }
    }
</script>


<style scoped>
.sales-view {
    margin-top: 20px;
}
</style>
