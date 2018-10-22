import React from 'react';
import Option from './Option.js';

const Options = (props) => {
    return (
        <div className="col-lg-9 col-xs-12">
            {
                (props.options.length) && (
                    props.options.map( (option, index) => {
                        return (
                            <Option 
                                key={index + 1}
                                text={option}
                                index={index}
                                editOption={props.editOption}
                            />
                        )

                    })
                )
            }
        </div>
     );
}
 
export default Options;