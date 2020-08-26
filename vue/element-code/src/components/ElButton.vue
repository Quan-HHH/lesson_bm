<template>
<button
    @click="handleClick"
    class="el-button"
    :disabled="loading"
    :type="nativeType"
    :autofocus="autofocus"
    :class="[
        type?'el-button--'+type:'',
        buttonSize?'el-button--'+buttonSize:'',
        {
            'is-round': round,
            'is-circle': circle,
            'is-loading': loading,
            'is-disabled': buttonDisabled,
            'is-plain': plain
        }
    ]"
    >
    <i class="el-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon"></i>
    <!-- {{type}} - {{tit}} -->
    <!-- Button -->
    <span v-if="$slots.default"><slot></slot></span>
</button>
</template>
<script>
// props 检查 解构
export default {
    name: 'ElButton',
    data() {
        // 组件的内部状态
        return {
            tit: 'hello',
            // loading: true
        }
    },
    computed:{
        buttonDisabled() {
            return this.disabled
        },
        buttonSize() {
            return this.size
        }
    },
    props: {
        size: {
            type: String,
            default: ''
        },
        nativeType: {
            type: String,
            default: 'button'
        },
        type: { 
            type: String,
            default: 'default'
        },
        autofocus: {

        },
        round: {
            type: Boolean
        },
        circle: {
            type: Boolean
        },
        icon: {
            type: String,
            default: ""
        },
        loading: {
            type: Boolean
        },
        plain: Boolean,
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