import React from 'react';
import Header from './Header.js';
import Options from './Options.js';
import Footer from './Footer.js';

class ReactTask extends React.Component {
    state = { 
        options : ["one", "two", "three"]
    };
    
    addOption(e) {   
        console.log('data: ', e.target);
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
                                addOption={this.addOption}
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