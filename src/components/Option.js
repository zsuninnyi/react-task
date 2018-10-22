import React from 'react';

const Option = (props) => {
    return ( 
        <div>
            <input type="text" value={props.text} onChange={(e) => {
                        console.log('e: ', e);
                        props.editOption(e, props.index);
                    }
                } 
                count={props.count}/>
        </div>
     );
}
 
export default Option;