import React from 'react';
import Map from '../Map/Map';
import './Destination.css';

const Destination = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <label htmlFor="">Pick From</label><br/>
                        <input className="form-control my-2" type="text" placeholder="Mirpur 1"/><br/>
                        <label htmlFor="">Pick To</label><br/>
                        <input className="form-control my-2" type="text" placeholder="Dhanmondi"/>
                        <input className="my-3 px-5 py-1 btn btn-info" type="submit" name="search" value="Search"/>
                    </div>
                    <div className="col-lg-7">
                    <Map></Map>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;