import React from 'react';

const Footer = (props) => {
    return ( 
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="float-right">
                            <button className="btn">{props.labels.cancel}</button>
                            <button className="btn save" onClick={props.saveOptions}>{props.labels.save}</button>
                        </div>
                    </div>    
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;