<template >
    <div class="add-pet-view container">

        <h3 class="text-uppercase my-4">Thêm Thú Cưng</h3>

        <form method="POST" @submit.prevent="addPet" action="">
            <div class="form-row mb-4">
                <div class="form-group col-md-2">
                    <label for="id-pet">ID</label>
                    <input type="text" class="form-control" id="id-pet" v-model="posts.ID">
                </div>

                <div class="form-group col-md-4">
                    <label for="name-breed">Giống</label>
                    <input type="text" class="form-control" id="name-breed" v-model="posts.breed">
                </div>

                <div class="form-group">
                    <label for="color">Màu sắc</label>
                    <input type="text" class="form-control" id="color" v-model="posts.color">
                </div>
            </div>

            <div class="form-group mb-4">
                <label class="form-label" for="price">Giá bán</label>
                <input type="text" class="form-control" id="price" v-model="posts.price">
            </div>

            <div class="form-group mb-4">
                <label class="form-label" for="gender">Gender</label>
                <select class="select" id="gender" v-model="posts.gender">
                    <option disabled value="">Giới tính</option>
                    <option>Đực</option>
                    <option>Cái</option>
                </select>
            </div>

            <div class="form-group mb-4">
                <label class="form-label" for="typeOf">Thể loại</label>
                <select class="select" id="typeOf" v-model="posts.typeOf">
                    <option disabled value="">Thể loại</option>
                    <option>Chó</option>
                    <option>Mèo</option>
                    <option>Hamster</option>
                    <option>Thỏ</option>
                </select>
            </div>

            <div class="form-group mb-4">
                <label class="form-label" for="pathURL">Chọn hình ảnh</label><br>
                <input type="file" name="name-file" id="pathURL">
            </div>

            <button type="submit" class="btn btn-success btn-lg mb-1 mt-4 text-uppercase" @click="getNameFileImg">Thêm
                thú cưng</button>
            <button type="button" v-on:click="comebackHome()" class="btn btn-info btn-lg mb-1 mx-5 mt-4 text-white">Về trang
                chủ</button>
        </form>

    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            posts: {
                ID: null,
                breed: null,
                color: null,
                gender: null,
                typeOf: null,
                price: null,
                image: null
            }
        }
    },

    methods: {
        getNameFileImg() {
            const fake_path = document.getElementById('pathURL').value;
            this.posts.image = fake_path.split("\\").pop();
        },
        addPet() {
            axios.post('http://localhost:3000/admin/pets/store', this.posts)
                // .then(res => console.log(res))
                .then(res => {
                    if (res.data.status === 200) {
                        window.alert("Thêm thú cưng thành công")
                        this.posts.ID = "";
                        this.posts.breed = "";
                        this.posts.color = "";
                        this.posts.gender = "";
                        this.posts.typeOf = "";
                        this.posts.price = "";
                        this.posts.image = "";
                        document.getElementById('pathURL').value = "";
                    }
                    else if (res.data.status === 500) {
                        window.alert("Thêm thú cưng thất bại")
                    }
                })
                .catch(err => console.log(err))
        },
        comebackHome() {
            this.$router.push("/");
        }
    }
}
</script>


<style scoped>
.add-pet-view {
    margin: 16px auto;
}

.form-row {
    display: flex;
    justify-content: space-between;
}
</style>