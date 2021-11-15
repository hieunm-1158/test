<template>
  <div class="user">
    {{ $route.params }}
    <span>{{ count }}</span>
    <router-link to="/user/1/hello1">Home</router-link> |
    <router-link to="/user/1/hello2">About</router-link>
    <root-vue>
      <template slot="image" slot-scope="{ text }" v-text="text">
        Đây là tên con, your handsome son ✌🏼
      </template>
      <template slot="name">
        Đây là ảnh của con, your handsome son ✌🏼
        <img
          height="150"
          width="150"
          src="https://i.pravatar.cc/150?img=2"
          alt="Avatar"
        />
      </template>
    </root-vue>
    <nav-link>
      <template v-slot="slotProps">
        <span class="green">{{ slotProps.text }}</span>
      </template>
    </nav-link>
    <hr />
    <router-view></router-view>
    <router-view name="helper"></router-view>
  </div>
</template>

<script>
import myMixin from "../mixins/myMixin";
import NavLink from "./NavLink.vue";
import rootVue from "./rootVue.vue";
// import subVue from "./subVue.vue";
export default {
  mixins: [myMixin],
  name: "HelloWorld",
  components: {
    rootVue,
    NavLink,
    // subVue,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
      direction: "right",
      message: "Nguyễn Minh Hiếu",
      checked: true,
      pick: "a",
      toggle: "yes",
      text1: "Hiếu",
      text2: "Lan",
      loginType: "name",
      fullName: "hiếu 1",
      a: 1,
      b: 1,
      courses: [
        {
          id: 1,
          name: "html",
        },
        {
          id: 2,
          name: "js",
        },
      ],
    };
  },
  computed: {
    // computed chỉ chạy dữ liêuj trong data. không thể truyền vào tham số. Giống useMemo. get và set phải đi đôi với nhau nếu có
    propertyComputed() {
      console.log("I change when this.property changes.");
      return this.count;
    },
    reverse: function () {
      console.log("tao sẽ log khi message đổi");
      return this.message.split(" ").reverse().join(" ");
    },
    propertyA: {
      get: function () {
        console.log("Tính toán thuộc tính A");
        return this.a;
      },
      set: function (number) {
        this.a = number;
      },
    },
    propertyB: function () {
      console.log("Tính toán thuộc tính B");
      return this.b;
    },
  },
  beforeCreate() {
    console.log(this.count);
    // chạy khi vừa tạo vue instance, chưa tạo data
  },
  created() {
    // hay gọi api ở đây
    // chạy khi tạo xong data và event
    console.log(this.count);
    console.log(this.$el);
    console.log(this.$route);
    this.greet();
    // setInterval(() => {
    //   this.count++;
    // }, 1000);
  },
  beforeMount() {
    console.log(this.$el);
    console.log(`this.$el doesn't exist yet, but it will soon!`);
    // chạy trước khi component được mount
  },
  mounted() {
    console.log(this.$el); // I'm text inside the component.
    // chạy khi component được mount thành công
    // sử dụng để init library, setup gì đó cho component
  },
  beforeUpdate() {
    // chạy trước khi dom thay đổi
    console.log(this.count); // Logs the counter value every second, before the DOM updates.
    // console.log(+this.$refs["dom-element"].textContent === this.count);
  },
  updated() {
    // Fired every second, should always be true
    // console.log(this.count);
    // chạy sau khi dom thay đổi thành công
    // console.log(+this.$refs["dom-element"].textContent === this.count);
  },
  beforeDestroy() {
    // Perform the teardown procedure for someLeakyProperty.
    // (In this case, effectively nothing)
    this.someLeakyProperty = null;
    delete this.someLeakyProperty;
    // chạy trước khi component unmount
  },
  destroyed() {
    // chạy khi component đã unmount
    console.log(this); // There's practically nothing here!
    // MyCreepyAnalyticsService.informService('Component destroyed. All assets move in on target on my mark.')
  },
  directives: {
    onFix: {
      bind: function (el, binding, vnode) {
        var s = JSON.stringify;
        el.innerHTML =
          "name: " +
          s(binding.name) +
          "<br>" +
          "value: " +
          s(binding.value) +
          "<br>" +
          "expression: " +
          s(binding.expression) +
          "<br>" +
          "argument: " +
          s(binding.arg) +
          "<br>" +
          "modifiers: " +
          s(binding.modifiers) +
          "<br>" +
          "vnode keys: " +
          Object.keys(vnode).join(", ");
      },
    },
    pin: {
      bind: function (el, binding) {
        el.style.position = "fixed";
        console.log([el]);
        var s = binding.arg.direction == "left" ? "left" : "top";
        el.style[s] = binding.value + "px";
      },
    },
  },
  methods: {
    say: function (message) {
      alert(message);
    },
  },
  filters: {
    upperCase: function (value) {
      return value.toUpperCase();
    },
    removeSpacing: function (value) {
      return value.split(" ").join("-");
    },
  },
  watch: {
    // chạy khi data thay đổi, có thể sử dụng các hàm trong method
    message: function (newMessage, oldMessage) {
      console.log("new mess", newMessage);
      console.log("oldMessage", oldMessage);
    },
    courses: {
      // sử dụng khi object thay đổi sâu
      handler(newValue) {
        // console.log("Person with ID:" + newValue.id + " modified");
        // console.log("New naME: " + newValue.name);
        console.log(newValue);
      },
      deep: true,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
