import { event } from "jquery";
import React, { Component } from "react";
const maxFileSize = 5000000;
const imageFileRegex = /\.(gif|jpg|jpeg|tiff|png)$/i;
import { toast } from "react-toastify";
class ShowStoreProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: "",
            errormessage: "",
            successmessage: "",
            address: "",
            name: "",
            url: "",
            id: this.props.match.params.id,
        };
    }

    componentDidMount() {
        axios
            .get(`http://127.0.0.1:8000/api/shop/${this.state.id}`)
            .then((res) => {
                this.setState({
                    name: res.data.data.name,
                    address: res.data.data.address,
                    content: res.data.data.logo,
                    url: res.data.data.url,
                });
                console.log(this.state.address);
                console.log(this.state.content);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    handleReturnHomePage = () => {
        this.setState({
            successmessage: "",
        });
        window.location.href = `/`;
    };

    handleGoToEdit = () => {
        this.setState({
            successmessage: "",
        });
        window.location.href = `/store/${this.state.id}/edit`;
    };
    //xu li url
    render() {
        return (
            <div
                className="row mt-5"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <div className="col-9">
                    <h3>Store profile</h3>
                    <form>
                        {/* input ten cua cua hang */}
                        <h5>Name</h5>
                        <div className="form-group">
                            <label className="form-control">
                                {" "}
                                {this.state.name}
                            </label>

                            {/* input dia chi cua cua hang */}
                        </div>
                        <h5>Address</h5>
                        <div className="form-group">
                            <label className="form-control">
                                {" "}
                                {this.state.address}
                            </label>
                        </div>
                        <h5>Logo</h5>
                        <div className="form-group">
                            <label className="form-control">
                                {" "}
                                {this.state.content}
                            </label>
                        </div>
                        <h5>Url store</h5>
                        <div className="form-group">
                            <label className="form-control">
                                {" "}
                                {this.state.url}
                            </label>
                        </div>
                        <div className="form-group"></div>
                        {this.state.errormessage ? (
                            <div className="alert alert-danger" role="alert">
                                {this.state.errormessage}
                            </div>
                        ) : null}
                        {this.state.successmessage ? (
                            <div className="alert alert-danger" role="alert">
                                {this.state.successmessage}
                            </div>
                        ) : null}

                        <div
                            style={{
                                textAlign: "center",
                            }}
                        >
                            <button
                                type="button"
                                className="btn btn-success"
                                onClick={this.handleGoToEdit}
                                style={{ margin: 5 }}
                            >
                                Edit
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={this.handleReturnHomePage}
                                style={{ margin: 5 }}
                            >
                                Back to Home
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default ShowStoreProfile;
