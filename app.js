var data = {
  title: "The VueJS Instance",
  showParagraph: false
};

Vue.component("hello", {
  template: "<h1>Hello!</h1>"
});

var vm1 = new Vue({
  data: data,
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle("The VueJS Instance (Updated)");
      this.$refs.myButton.innerText = "Test";
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert("Title changed, new value: " + value);
    }
  }
});

vm1.$mount("#app1");

console.log(vm1.$data === data);
vm1.$refs.heading.innerText = "Something else";

setTimeout(function() {
  vm1.title = "Changed by Timer";
}, 300);

var vm2 = new Vue({
  el: "#app2",
  data: {
    title: "The second instance"
  },
  methods: {
    onChange: function() {
      vm1.title = "Changed!";
    }
  }
});

var vm3 = new Vue({
  template: "<h1>Hello!</h1>"
});

vm3.$mount();
document.getElementById("#app3").appendChild(vm3.$el);

// *** The VueJS Instance Lifecycle ***
/*
new Vue({
  el: "#app",
  data: {
    title: "The VueJS Instance"
  },
  beforeCreate: function() {
    console.log("beforeCreate()");
  },
  created: function() {
    console.log("created()");
  },
  beforeMount: function() {
    console.log("beforeMount()");
  },
  mounted: function() {
    console.log("mounted()");
  },
  beforeUpdate: function() {
    console.log("beforeUpdate()");
  },
  updated: function() {
    console.log("updated()");
  },
  beforeDestroy: function() {
    console.log("beforeDestroy()");
  },
  destroyed: function() {
    console.log("destroyed()");
  },
  methods: {
    destroy: function() {
      this.$destroy();
    }
  }
});
*/
