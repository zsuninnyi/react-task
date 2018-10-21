import React from 'react';

const Option = (props) => {
    console.log('props: ', props);
    return ( 
        <div>
            <input type="text" value={props.text} onChange={props.addOption} count={props.count}/>
        </div>
     );
}
 
export default Option;