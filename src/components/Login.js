import React from "react";

function Login() {
  return (
    <div className="container">
      <div className="bg-faded p-4 my-4">
        <hr className="divider" />
        <h2 className="text-center text-lg text-uppercase my-0">
          Contact
          <strong>Business Casual</strong>
        </h2>
        <hr className="divider" />
        <div className="row">
          <div className="col-lg-8">
            <div className="embed-responsive embed-responsive-16by9 map-container mb-4 mb-lg-0">
              <iframe
                frameBorder={0}
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src="http://maps.google.com/maps?hl=en&ie=UTF8&ll=37.0625,-95.677068&spn=56.506174,79.013672&t=m&z=4&output=embed"
              />
            </div>
          </div>
          <div className="col-lg-4">
            <h5 className="mb-0">Phone:</h5>
            <div className="mb-4">123.456.7890</div>
            <h5 className="mb-0">Email:</h5>
            <div className="mb-4">
              <a href="mailto:name@example.com">name@example.com</a>
            </div>
            <h5 className="mb-0">Address:</h5>
            <div className="mb-4">
              3481 Melrose Place
              <br />
              Beverly Hills, CA 90210
            </div>
          </div>
        </div>
      </div>
      <div className="bg-faded p-4 my-4">
        <hr className="divider" />
        <h2 className="text-center text-lg text-uppercase my-0">
          Contact
          <strong>Form</strong>
        </h2>
        <hr className="divider" />
        <form>
          <div className="row">
            <div className="form-group col-lg-6">
              <label className="text-heading">username</label>
              <input
                name="username"
                value=""
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group col-lg-6">
              <label className="text-heading">Password</label>
              <input
                name="password"
                value=""
                type="text"
                className="form-control"
              />
            </div>
            <div className="clearfix" />
            <div className="form-group col-lg-12">
              <button type="submit" className="btn btn-secondary">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
