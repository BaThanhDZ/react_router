import React from 'react';

function User() {
    let username = "Nguyen Van A";
    return (
        <div className="container">
                <div className="bg-faded p-4 my-4">
                <hr className="divider" />
                <h2 className="text-center text-lg text-uppercase my-0"><strong>UserControl</strong></h2>
                <hr className="divider" />
                <form  >
                    <div className="row">
                        <div className="form-group col-lg-6">
                            <label className="text-heading">Hello: <strong>{username}</strong></label>
                        </div>
                        <div className="clearfix" />
                        <div className="form-group col-lg-12">
                            <button type="button" className="btn btn-secondary">Logout</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default User;
