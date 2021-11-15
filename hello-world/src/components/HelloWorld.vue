<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
          target="_blank"
          rel="noopener"
          >babel</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
          target="_blank"
          rel="noopener"
          >eslint</a
        >
      </li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank" rel="noopener"
          >Forum</a
        >
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank" rel="noopener"
          >Community Chat</a
        >
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank" rel="noopener"
          >Twitter</a
        >
      </li>
      <li>
        <a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a>
      </li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li>
        <a href="https://router.vuejs.org" target="_blank" rel="noopener"
          >vue-router</a
        >
      </li>
      <li>
        <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-devtools#vue-devtools"
          target="_blank"
          rel="noopener"
          >vue-devtools</a
        >
      </li>
      <li>
        <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener"
          >vue-loader</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
          rel="noopener"
          >awesome-vue</a
        >
      </li>
    </ul>
    <div ref="dom-element" v-onFix:foo.a.b="500">{{ count }}</div>
    <div id="baseexample">
      <p>Scroll down the page</p>
      <p v-pin:[{direction,count}]="200">
        Stick me 200px from the top of the page
      </p>
    </div>
    <input type="text" v-model="message" />
    <span>{{ message }}</span>
    <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">{{ checked }}</label>
    <input type="radio" v-model="pick" value="a" name="pickup" />
    <input type="radio" v-model="pick" value="b" name="pickup" />
    <input type="checkbox" v-model="toggle" true-value="yes" false-value="no" />
    <input v-model.lazy="message" />
    <button @click="say('Hiếu')">Hiếu</button>
    <button @click="say('Lan')">Lan</button>

    <div v-if="loginType === 'name'">
      <label>Username</label>
      <input placeholder="Enter your username" key="a" />
    </div>
    <div v-else>
      <label>Email</label>
      <input placeholder="Enter your email address" key="b" />
    </div>
    <button
      @click="
        loginType === 'name' ? (loginType = 'email') : (loginType = 'name')
      "
    >
      {{ loginType === "name" ? "email" : "name" }}
    </button>

    <div id="example">
      <p>Thông điệp ban đầu: "{{ message | upperCase | removeSpacing }}"</p>
      <p>Thông điệp bị đảo ngược bằng tính toán (computed): "{{ reverse }}"</p>
    </div>
    <div id="app">
      <p>A = {{ propertyA }}</p>
      <p>B = {{ propertyB }}</p>
      <button v-on:click="a++">Thêm 1 vào a</button>
      <button v-on:click="b++">Thêm 1 vào b</button>
      <button v-on:click="propertyA = 100">Gán a = 100</button>
    </div>
    <input type="text" v-model="courses[0].name" />
    <span>{{ path }}</span>
    <router-link :to="{ name: 'hello1' }">Home</router-link>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
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
    path: function () {
      console.log("hí");
      console.log(this.$route);
      return this.message;
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
    // setInterval(() => {
    //   this.count++
    // }, 1000)
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
    console.log(+this.$refs["dom-element"].textContent === this.count);
  },
  updated() {
    // Fired every second, should always be true
    // chạy sau khi dom thay đổi thành công
    console.log(+this.$refs["dom-element"].textContent === this.count);
  },
  beforeDestroy() {
    // Perform the teardown procedure for someLeakyProperty.
    // (In this case, effectively nothing)
    this.someLeakyProperty = null;
    delete this.someLeakyProperty;
    console.log("trước khi huỷ");
    // chạy trước khi component unmount
  },
  destroyed() {
    // chạy khi component đã unmount
    console.log("đã huỷ");
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
<style lang="scss" scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
  li {
    display: inline-block;
    margin: 0 30px;
  }
}

a {
  color: #42b983;
}
</style>
