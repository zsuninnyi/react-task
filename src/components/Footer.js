import React from 'react';

const Footer = (props) => {
    return ( 
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div class="col">
                        <div class="float-right">
                            <button className="btn">Cancel</button>
                            <button className="btn">Save</button>
                        </div>
                    </div>    
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;