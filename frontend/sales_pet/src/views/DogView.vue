
<template >
    <HeaderView></HeaderView>

    <div class="dog-view container">

        <div class="sections row">
            <template v-for="(pet, index) in pets" :key="index">

                <div v-if="pet.typeOf == 'Chó'" class="card" style="width: 290px;">
                    <img class="card-img-top img-fluid" style="height: 320px;" :src="path + pet.image" alt="...">
                    <div class="card-body">
                        <h6 class="card-title">{{ pet.breed }} - {{ pet.ID }}</h6>
                        <p class="card-text">Đơn giá: {{ formatPrice(pet.price) }}</p>
                    </div>
                </div>

            </template>

        </div>
    </div>

    <FooterView></FooterView>
</template>

<script>
import axios from 'axios'
import staticPath from '../assets/staticPath';
import HeaderView from '../components/HeaderView.vue';
import FooterView from '../components/FooterView.vue';

export default {
    data() {
        return {
            pets: []
        };
    },
    computed: {
        path() {
            return staticPath;
        }
    },
    methods: {
        formatPrice(price) {
            return price.toLocaleString("it-IT", { style: "currency", currency: "VND" });
        }
    },
    created() {
        axios.get("http://localhost:3000/")
            .then(res => {
                this.pets = res.data.pets;
            })
            .catch(err => console.log(err));
    },
    components: { HeaderView, FooterView }
}
</script>


<style scoped>
.dog-view {
    margin: 16px auto;
}

.card {
    display: inline-block;
    margin: 0 12px 8px;
}
</style>
