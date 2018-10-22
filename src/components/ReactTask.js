import React from 'react';
import Header from './Header.js';
import Options from './Options.js';
import Footer from './Footer.js';

class ReactTask extends React.Component {
    state = { 
        options : ["one", "two", "three"]
    };
    
    editOption = (e, index) => {   
        const newValue = e.target.value;
        const elemIndex = index;
        let tempArray = [...this.state.options];
        tempArray[elemIndex] = newValue;
        this.setState({
                options: tempArray
        });
    };

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
                            />
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
         );
    };
}
 
export default ReactTask;