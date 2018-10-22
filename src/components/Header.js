import React from 'react';

const Header = (props) => {
    return ( 
        <div className="col-lg-3 col-xs-12 sidebar">
            {props.labels.headline}
        </div>
     );
}
 
export default Header;