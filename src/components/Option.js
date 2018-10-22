import React from 'react';
import * as Md from 'react-icons/md';

const Option = (props) => {
    let id = "option-" + props.index;
    return ( 
        <div>
            <div className="group">
                <input type="text" id={id}  className="input-text" required value={props.text} onChange={(e) => {
                            props.editOption(e, props.index);
                        }
                    } 
                    count={props.count}/>
                {
                    (props.text) && (
                        <button className="delete-button" onClick={() => {
                                    props.deleteOption(props.index, props.text)
                                }
                            }
                        >
                        <Md.MdClear/>
                        </button>
                    )
                }
                <span className="highlight"></span>
                <span className="bar"></span>
                <label htmlFor={id}>{props.labels.attribute}</label>
            </div>
        </div>
     );
}
 
export default Option;