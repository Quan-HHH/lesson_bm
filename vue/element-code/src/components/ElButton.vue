<template>
<button
    @click="handleClick"
    class="el-button"
    :class="[
        type?'el-button--'+type:'',
        {
            'is-round': round,
            'is-circle': circle
        }
    ]"
    >
    <!-- {{type}} - {{tit}} -->
    <!-- Button -->
    <slot></slot>
</button>
</template>
<script>
// props 检查 解构
export default {
    data() {
        // 组件的内部状态
        return {
            tit: 'hello'
        }
    },
    props: {
        type: { 
            type: String,
            default: 'default'
        },
        round: {
            type: Boolean
        },
        circle: {
            type: Boolean
        }
    },
    created() {
        console.log(this.type, this.tit)
    },
    methods: {
        handleClick(evt) {
            // $emit vue中做事件处理的一种方案
            this.$emit('click', evt);
        }
    }
}
</script>
<style lang="stylus">

</style>