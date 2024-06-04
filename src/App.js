import React, { Component } from "react";
import axios from "axios";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
    };
  }
  formSubmithandler = (e) => {
    e.preventDefault();
    // alert("dsidyi");
    //console.log(e.target.tital.value);

    const tital = e.target.tital.value;
    const body = e.target.body.value;

    axios
      .post("https://jsonplaceholder.typicode.com/posts", { tital, body })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res.data);
        this.setState({
          post: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  dataDeleteHandler=(id)=>{
    //alert(id)
    axios.delete("https://jsonplaceholder.typicode.com/posts/" +id).then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {
    //console.log("post", this.state.post);
    return (
      <div>
        <form className="w-50 mx-auto mt-3" onSubmit={this.formSubmithandler}>
          <div className="mb-3">
            <label className="form-label">title</label>
            <input
              type="text"
              className="form-control"
              name="tital"
              aria-describedby="emailHelp"
            ></input>
          </div>
          <div className="mb-3">
            <label className="form-label">body</label>
            <input type="text" className="form-control" name="body"></input>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <h1>Get API</h1>
        {this.state.post !== null
          ? this.state.post.map((data) => {
              return (
                <ul key={data.id}>
                  <li>Id:{data.id}</li>
                  <li>UserId:{data.userid}</li>
                  <li>Tital:{data.tital}</li>
                  <li>Body:{data.body}</li>
                  <li><button className="btn btn-primary  " onClick={()=>this.dataDeleteHandler(data.id)}>delete</button></li>
                </ul>
              );
            })
          : ""}
      </div>
    );
  }
}

export default App;
