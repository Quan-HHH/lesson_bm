<template>
    <div class="el-badge">
        <slot></slot>
        <transition name="el-zoom-in-center">
            <sup
            v-show="!hidden"
            v-text="content"
            class="el-badge__content"
            ></sup>
        </transition>
    </div>
</template>

<script>
import { type } from 'os';
    export default {
        name: 'HhBadge',
        props: {
            value: [String, Number],
            max: Number,
            isDot: Boolean,
            hidden: Boolean,
            type: {
                type: String,
                validator(val) {
                    return ['parmary', 'success', 'warning', 'info', 'danger'].indexOf(val) > -1;
                }
            }
        },
        computed: {
            content() {
                if(this.isDot) return;
                // vue中 data和prop中的东西都可以通过this拿到
                const value = this.value;
                // 框架通用性之外 可配置性
                const max = this.max;

                if(typeof value === 'number' && typeof max === 'number') {
                    return max < value ? `${max}+` : value;
                }

                return value;
            }
        }
    }
</script>

<style scoped>

</style>