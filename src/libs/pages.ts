

import { ref } from 'vue';
const page = ref(1);
const limit = ref(10);
class NewPage {
    constructor(spage: number = 1, slimit: number = 10, search: any) {
        page.value = spage;
        limit.value = slimit;
        (this as any).esearch = search;
    }
    public search = (): void => {
        page.value = 1;
        (this as any).esearch();
    }
    public currentPageChange = (e: number): void => {
        page.value = e;
        (this as any).esearch();
    }
    public limitChange = (e: number): void => {
        page.value = 1;
        limit.value = e;
        (this as any).esearch();
    }
}
export {
    NewPage,
    page,
    limit,
};
