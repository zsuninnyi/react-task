import React from 'react';
import Option from './Option.js';
import PropTypes from 'prop-types';

const Options = (props) => {
    return (
        <div className="col-lg-9 col-xs-12 options">
            {
                (props.options.length) && (
                    props.options.map( (option, index) => {
                        return (
                            <Option 
                                key={index + 1}
                                text={option}
                                index={index}
                                editOption={props.editOption}
                                deleteOption={props.deleteOption}
                                labels={props.labels}
                            />
                        )

                    })
                )
            }
            {
                (!props.options.length) && (
                    <span className="alert alert-danger">{props.labels.error}</span>
                )
            }
        </div>
     );
}
 
Options.propTypes = {
    options: PropTypes.array.isRequired
}

Options.defaultProps = {
    options: ['']
}

export default Options;

