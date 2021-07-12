import React, {Component} from "react";
import Header from "./Header";

class Layout extends Component{
    render(){
        return(
            <>
                <Header navigate={this.props.navigation}/>
                <div className="contentContainer">
                    {this.props.children}
                </div>
            </>
        );
    }
}

export default Layout;