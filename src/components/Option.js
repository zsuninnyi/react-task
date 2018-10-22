import React from 'react';

const Option = (props) => {
    let id = "option-" + props.index;
    return ( 
        <div>
            <div><label htmlFor={id}>Test Attribute</label></div>
            <input type="text" id={id}  className="input-text" value={props.text} onChange={(e) => {
                        props.editOption(e, props.index);
                    }
                } 
                count={props.count}/>
            {
                (props.text) && (
                    <button onClick={() => {
                                props.deleteOption(props.index, props.text)
                            }
                        }
                    >
                    Delete</button>
                )
            }
        </div>
     );
}
 
export default Option;