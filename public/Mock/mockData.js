import Mock from "mockjs";


Mock.mock("/api/banner", "get", {
    code: 0,
    msg: "",
    data: [
      {
        num: "2", //随机生成一个可用得两位数
      
      }
    ],
  });