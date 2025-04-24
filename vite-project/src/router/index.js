import { createRouter, createWebHistory } from 'vue-router'
import GetItems from '../views/GetItems.vue'
import AddItems from '../views/AddItems.vue'
import UpdateItems from '../views/UpdateItems.vue'
import DeleteItems from '../views/DeleteItems.vue'

const routes = [
    { path: '/get-items', name: 'GetItems', component: GetItems },
    { path: '/add-items', name: 'AddItems', component: AddItems },
    { path: '/update-items', name: 'UpdateItems', component: UpdateItems },
    { path: '/delete-items', name: 'DeleteItems', component: DeleteItems },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
