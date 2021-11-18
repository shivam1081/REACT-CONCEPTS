import HomeData from "./HomeData";
import NavigationBar from "./NavigationBar";

const { Component } = require("react");

class HomePage extends Component {
    render() {
        return (
            <div>
                
                <HomeData/>
            </div>
        );
    }
}
export default HomePage;
