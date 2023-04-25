
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddPetView from '../views/AddPetView.vue';
import StoredPet from '../views/StoredPet.vue';
import EditPetView from '../views/EditPetView.vue';
import DogView from '../views/DogView.vue';
import CatView from '../views/CatView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/pets/dog',
            name: 'dog-view',
            component: DogView
        },
        {
            path: '/pets/cat',
            name: 'cat-view',
            component: CatView
        },
        {
            path: '/admin/pets/create',
            name: 'add-pet',
            component: AddPetView
        },
        {
            path: '/admin/stored/pets',
            name: 'stored-pet',
            component: StoredPet
        },
        {
            path: '/admin/pets/:id/edit',
            name: 'edit-pet',
            component: EditPetView
        },
        {
            path: '/auth/login',
            name: 'login',
            component: LoginView
        },
        {
            path: '/auth/register',
            name: 'register',
            component: RegisterView
        }
    ]
})

export default router
