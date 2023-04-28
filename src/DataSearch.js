import React from "react";
class DataSearch extends React.Component {
  state = {
    data: [
      {
        categoryName: "Java",
        courseName: "Spring Cloud",
        metaDescription: "Microservices With Spring Cloud & OAuth 2 Security",
        imageUrl: require("./image/img1.jpeg"),
      },
      {
        categoryName: "Java",
        courseName: "Java Web Servlet Jsp",
        metaDescription: "Giới thiệu về cách sử dụng Java Web Servlet Jsp",
        imageUrl: require("./image/img2.jpeg"),
      },
      {
        categoryName: "Java",
        courseName: "Java Core & JDBC SQL",
        metaDescription: "Khóa học Core & JDBC SQL cho người bắt đầu",
        imageUrl: require("./image/img3.jpeg"),
      },
      {
        categoryName: "JavaScript",
        courseName: "ReactJs & Redux",
        metaDescription: "ReactJs la một thư viện sử dụng JavaScript",
        imageUrl: require("./image/img4.jpeg"),
      },
      {
        categoryName: "SQL",
        courseName: "SQL co ban va nang cao",
        metaDescription: "Khóa học SQL cung cấp kiến thức nền tảng vững chắc",
        imageUrl: require("./image/img5.jpeg"),
      },
      {
        categoryName: "html-css-js",
        courseName: "Frontend",
        metaDescription: "Khóa học FE cơ bản",
        imageUrl: require("./image/img6.jpeg"),
      },
      {
        categoryName: "Nodejs",
        courseName: "Backend",
        metaDescription: "Khóa học BE cơ bản",
        imageUrl: require("./image/img7.jpeg"),
      },
      {
        categoryName: "Python co ban",
        courseName: "Python co ban",
        metaDescription: "Khóa học Python cơ bản",
        imageUrl: require("./image/img8.jpeg"),
      },
      {
        categoryName: "Python nang cao",
        courseName: "Python nang cao",
        metaDescription: "Khóa học Python cơ bản",
        imageUrl: require("./image/img9.jpeg"),
      },
    ],

    editdata: {},
  };
  Search = (courseName) => {
    let current = this.state.data;
    current = current.filter((item) => item.courseName === courseName);
    this.setState({ data: [...this.state.data, current] });
    // toast.success("Wow so easy!");
  };
}
export default DataSearch;
