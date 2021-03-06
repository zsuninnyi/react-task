import React from 'react';
import Header from './Header.js';
import Options from './Options.js';
import Footer from './Footer.js';

class ReactTask extends React.Component {
    state = { 
        options : [''],
        labels: {
            'save': 'Save',
            'cancel': 'Cancel',
            'headline': 'Test Headline',
            'attribute': 'Test Attribute',
            'error': 'Something went wrong!'
        }
    };
    
    editOption = (e, index) => {   
        const newValue = e.target.value;
        const elemIndex = index;
        if (newValue === "") {
            this.deleteOption(index);
            return false;
        }
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

    deleteOption = (optionIndex) => {
        this.setState((prevState) => {
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
                            <Header 
                                labels={this.state.labels}
                            />
                            <Options 
                                options={this.state.options} 
                                editOption={this.editOption}
                                deleteOption={this.deleteOption}
                                labels={this.state.labels}
                            />
                        </div>
                    </div>
                </main>
                <Footer 
                    saveOptions={this.saveOptions}
                    labels={this.state.labels}
                />
            </div>
         );
    };
}
 
export default ReactTask;