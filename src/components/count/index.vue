<template>
    <div class="count">
        <span class="box" @click="reduceCount">-</span>
        <span >{{count}}</span>
        <span class="box" @click="addCount">+</span>
    </div>
</template>

<script lang="ts">
    import { ref, defineComponent } from 'vue';
    import { count, Counts } from './index';
    export default defineComponent({
        props: {
            number: {
                type: Number,
                default: 1,
            },
            max: {
                type: Number,
                default: 100,
            },
            min: {
                type: Number,
                default: 1,
            }
        },
        setup(props, { emit }) {
            const counts = new Counts(props, emit);
            console.log(counts);
            return {
                count,
                ...counts
            }
        }
    })
</script>

<style scoped>
    .count{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 10px;
    }
    .count span{
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #fff;
        cursor: pointer;
    }
    .count span.box{
        border-color: #ccc;
        border-radius: 3px;
    }
</style>

