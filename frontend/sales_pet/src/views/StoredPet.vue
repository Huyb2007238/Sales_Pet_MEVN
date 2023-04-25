<template>
    <HeaderView></HeaderView>

    <div class="stored-pets-view container">
        <table class="table table-bordered">
            <thead class="thead-dark">
                <tr class="text-uppercase">
                    <th scope="col-1">STT</th>
                    <th scope="col">ID</th>
                    <th scope="col-3">Giống</th>
                    <th scope="col-3">Màu sắc</th>
                    <th scope="col-2">Giá</th>
                    <th scope="col" colspan="2"></th>
                </tr>
            </thead>

            <tbody v-for="(pet, index) in pets" :key="index">
                <tr class="text-justify">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ pet.ID }}</td>
                    <td>{{ pet.breed }}</td>
                    <td>{{ pet.color }}</td>
                    <td>{{ pet.price }}</td>
                    <td>
                        <router-link :to="'/admin/pets/' + pet._id + '/edit'" class="btn btn-link">Sửa</router-link>
                        <a href="" class="btn btn-link" @click="getIdPet(pet)" :data-id="pet._id" data-toggle="modal"
                            data-target="#delete-book-modal">Xóa</a>
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- Modal -->
        <div class="modal fade" id="delete-book-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Xóa thú cưng?</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        Bạn có chắc muốn xóa thú cưng này?
                    </div>
                    <div class="modal-footer">
                        <button type="button" @click="deletePet()" class="btn btn-danger">Xóa
                            bỏ</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <FooterView></FooterView>
</template>

<script>
import axios from 'axios';
import HeaderView from '../components/HeaderView.vue';
import FooterView from '../components/FooterView.vue';

export default {
    data() {
        return {
            pets: [],
            id: null
        };
    },
    created() {
        axios.get("http://localhost:3000/admin/stored/pets")
            .then(res => {
                this.pets = res.data.pets;
            })
            .catch(err => {
                console.log(err);
            });
    },
    methods: {
        getIdPet(pet) {
            this.id = pet._id;
            // this.$el.getAttribute('data-id');
        },
        deletePet() {
            axios.delete("http://localhost:3000/pets/" + this.id)
                .then(() => {
                    console.log(this.id);
                    this.$router.push("/admin/stored/pets");
                    window.alert("Xóa thành công");
                    window.location.reload();
                })
                .catch(err => console.log(err));
        },
    },
    components: { HeaderView, FooterView }
}
</script>

<style scoped>
.stored-pets-view {
    margin: 16px auto;
}

.btn.btn-link {
    text-decoration: none;
}
</style>
