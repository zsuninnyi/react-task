import React from 'react';

const Footer = (props) => {
    return ( 
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="float-right">
                            <button className="btn">Cancel</button>
                            <button className="btn" onClick={props.saveOptions}>Save</button>
                        </div>
                    </div>    
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;