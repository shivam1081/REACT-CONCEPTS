import { Component } from "react";
import NavigationSection  from "./NavigationSection";

class About extends Component {
    render() {
        return (
            <div
                style={{
                    textAlign: "center",
                    width: "100%",
                    color: "blue",
                    backgroundColor: "pink",
                    height: "60%",
                }}
            >
                <h2>This is about page</h2>
                <div>
                    <NavigationSection />
                </div>
            </div>
        );
    }
}
export default About;
