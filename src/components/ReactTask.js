import React from 'react';
import Footer from './Footer.js';
import Options from './Options.js';

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
                            <div className="col-lg-3 col-xs-12">
                                Test
                            </div>
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