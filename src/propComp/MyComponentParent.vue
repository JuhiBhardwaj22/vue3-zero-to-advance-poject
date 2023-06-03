<template>
  <div>
    <h4>My-Component- Parent</h4>
    <my-component-child
      title="This is Child Component"
      :visible="isShow"
      :list="newArr"
      :value="count"
      :msg="msg"
      @getFullName="onFullname"
      @getNameInfo="onNamelist($event)"
      @countData="onCountData"
    />
    <p>{{ fullName }}</p>
    <h1>{{ count }}</h1>
  </div>
</template>

<script>
import MyComponentChild from "./MyComponentChild.vue";

export default {
  name: "MyComponentParent",
  components: { MyComponentChild },
  data() {
    return {
      msg: "This is Dynamic props",
      count: 0,
      isShow: false,
      newArr: [],
      fullName: "",
      count: 0,
    };
  },
  methods: {
    onFullname(name) {
      this.fullName = name;
      console.log("onFullname", name);
    },
    onNamelist(firstName, lastName) {
      console.log("Full-Name->", firstName, lastName);
    },
    onCountData(arg) {
      this.count = arg;
    },
  },
};
</script>
