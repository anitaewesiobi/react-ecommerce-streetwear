import React from 'react';
function News() {
    return (
        <React.Fragment>
        <div id="parallax">
        <div className="container-fluid text-justify p-5">
            <div className="col-12  ml-5 subscribe">
                    <h1 className="subscribe-heading">Subscribe to get discount coupons & new offers!</h1>
                    <p className="subscribe-subtext">Earn 25% off the latest syles and trends if you join our email list before September 25th. </p>
             <input className="subscribe-input" placeholder="Enter your email" type="email" name="email" id="email"/> <button className="subscribe-btn text-center"> SUBSCRIBE  </button>
            </div>
        </div>
        </div>
            <p className="latest-news text-center pt-5">LATEST NEWS</p>
        <div className="container-fluid">
            <div className="row news-row">
                <div className="col-4 card">
                        <img src="https://images.unsplash.com/photo-1532186232057-80e418ed6614?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="news" className="card-img-top img-1 img-fluid mt-3"/>
                    <div className="card-footer">
                        <p className=" blog-cat mb-0 text-muted"><strong>LOOKBOOK</strong></p>
                        <p className="blog-heading">Fresh Lookbook From Prash Tonslie</p>
                        <p className="blog-par">This is an extreme honor to anounce our new lookbook in the edition of Tash.</p>
                    </div>
                </div>
                    <div className="col-4 card">
                        <img src="https://images.unsplash.com/photo-1520269520859-7e7df081564b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="news" className="card-img-top img-fluid mt-3" />
                    <div className="card-footer">
                        <p className=" blog-cat mb-0 text-muted"><strong> MUSIC</strong></p>
                        <p className="blog-heading">Fresh New Album From Warner</p>
                        <p className="blog-par">Tune in to hear the newest album realesed by famed Henry Warner.</p>
                    </div>
                </div>
                    <div className="col-4 card">
                        <img src="https://images.unsplash.com/photo-1462181606837-023a46b2d355?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="news" className="card-img-top img-fluid mt-3 " />
                    <div className="card-footer">
                        <p className=" blog-cat text-muted mb-0"><strong>LOOKBOOK</strong></p>
                        <p className="blog-heading">Fresh Lookbook From Prash Tonslie</p>
                        <p className="blog-par">The September edition of Skate showcased by the one and only Tony Hawk.</p>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}

export default News
