import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
    return ( 
        <div className="col-lg-3 col-xs-12 sidebar">
            {props.labels.headline}
        </div>
     );
}
 
Option.propTypes = {
    labels: PropTypes.object.isRequired
};

export default Header;