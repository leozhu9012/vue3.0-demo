/**
 * count hook
 */
import { ref } from 'vue';
interface Count {
    number: number;
    max: number;
    min: number;
}
const count = ref(0);
// const resetCount = (props: Count, emit: any): any => {
//     count.value = props.number;
//     const addCount = (): void | boolean => {
//         if (count.value >= props.max) {
//             // console.warn(`不能大于${props.max}`);
//             return;
//         }
//         count.value++;
//         emit('submit', count.value);
//     };
//     const reduceCount = (): void | boolean => {
//         if (count.value <= props.min) {
//             // console.log(`不能小于于${props.min}`);
//             return;
//         }
//         count.value--;
//         emit('submit', count.value);
//     };
//     return { addCount, reduceCount };
// };
class Counts {
    constructor(props: Count, emit: any) {
        count.value = props.number;
        (this as any).emit = emit;
        (this as any).props = props;
    }
    public addCount = (): void | boolean => {
        if (count.value >= (this as any).props.max) {
            // console.warn(`不能大于${props.max}`);
            return;
        }
        count.value++;
        (this as any).emit('submit', count.value);
    }
    public reduceCount = (): void | boolean => {
        if (count.value <= (this as any).props.min) {
            // console.log(`不能小于于${props.min}`);
            return;
        }
        count.value--;
        (this as any).emit('submit', count.value);
    }
}

export {
    count,
    Counts,
};
