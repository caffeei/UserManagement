<template>
  <div class="addUser container">
    <Alert v-if="alert" :message="alert"></Alert>

    <h1 class="page-header">添加用户</h1>
    <form>
      <div class="well">
        <h4>用户信息</h4>
        <div class="form-group">
          <label>姓名</label>
          <input type="text" class="form-control" placeholder="name" v-model="customer.name" />
        </div>
        <div class="form-group">
          <label for>电话号码</label>
          <input
            type="text"
            class="form-control"
            name
            id
            placeholder="phone"
            v-model="customer.phone"
          />
        </div>
        <div class="form-group">
          <label for>邮箱</label>
          <input
            type="text"
            class="form-control"
            name
            id
            placeholder="email"
            v-model="customer.email"
          />
        </div>
        <div class="form-group">
          <label for>学历</label>
          <input
            type="text"
            class="form-control"
            name
            id
            placeholder="education"
            v-model="customer.education"
          />
        </div>
        <div class="form-group">
          <label for>毕业学校</label>
          <input
            type="text"
            class="form-control"
            name
            id
            placeholder="school"
            v-model="customer.school"
          />
        </div>
        <div class="form-group">
          <label for>职业</label>
          <input
            type="text"
            class="form-control"
            name
            id
            placeholder="profession"
            v-model="customer.profession"
          />
        </div>
        <div class="form-group">
          <label for>个人简介</label>
          <textarea class="form-control" rows="10" v-model="customer.profile"></textarea>
        </div>
        <button @click="addCustomers" type="submit" class="btn">添加</button>
      </div>
    </form>
  </div>
</template>

<script>
import Alert from "./Alert";

export default {
  name: "addUser",
  data() {
    return {
      customer: {},
      alert: ""
    };
  },
  components: {
    Alert
  },
  methods: {
    addCustomers(e) {
      console.log(123);
      if (!this.customer.name || !this.customer.phone || !this.customer.email) {
        this.alert = "请添加对应的信息";
      } else {
        let newCustomer = {
          name: this.customer.name,
          phone: this.customer.phone,
          email: this.customer.email,
          education: this.customer.education,
          school: this.customer.school,
          profession: this.customer.profession,
          profile: this.customer.profile
        };
        this.$http
          .post("http://localhost:3000/user", newCustomer)
          .then(function(response) {
            console.log(response);
            this.$router.push({
              path: "/",
              query: {
                alert: "用户信息添加成功!"
              }
            });
          });
      }

      e.preventDefault();
    }
  }
};
</script>

<style scoped>
</style>
