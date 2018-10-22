import React from 'react';
import Header from './Header.js';
import Options from './Options.js';
import Footer from './Footer.js';

class ReactTask extends React.Component {
    state = { 
        options : [""]
    };
    
    editOption = (e, index) => {   
        const newValue = e.target.value;
        const elemIndex = index;
        let tempArray = [...this.state.options];
        tempArray[elemIndex] = newValue;
        this.setState( (prevState) => {
                if (prevState.options[elemIndex] === "") {
                    tempArray.push("");
                }
                return {
                    options: tempArray
                }
        });
    };

    deleteOption = (optionIndex, optionValue) => {
        this.setState((prevState) => {
            console.log('prevState: ', prevState);
            return {
                options: prevState.options.filter((elem, index) => {
                    return optionIndex !== index;
                })
            }
        });
    };

    saveOptions = () => {
        let returnArray = [...this.state.options];
        returnArray.pop();
        console.log('returnArray: ', returnArray);
        return returnArray;
    }

    render() { 
        return ( 
            <div className="wrapper">
                <main role="main">
                    <div className="container">
                        <div className="row">
                            <Header />
                            <Options 
                                options={this.state.options} 
                                editOption={this.editOption}
                                deleteOption={this.deleteOption}
                            />
                        </div>
                    </div>
                </main>
                <Footer saveOptions={this.saveOptions}/>
            </div>
         );
    };
}
 
export default ReactTask;