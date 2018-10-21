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
                                key={index + (Math.random() * 1000)}
                                text={option}
                                count={index}
                                addOption={props.addOption}
                            />
                        )

                    })
                )
            }
        </div>
     );
}
 
export default Options;