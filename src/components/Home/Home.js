import React from "react";
import { Link } from "react-router-dom";
import HorizontalLine from "../../common/HorizontalLine";
import Select from "../../common/Select";

const test = [
    {
        id: "1",
        activity: 'exercise'
    },
    {
        id: "2",
        activity: 'grooming'
    },
    {
        id: "3",
        activity: 'medical'
    }

]

const Home = () => {

    // const displayOptions = () => {
    //     test.map(activity => {activity.activity})
    // }

    return (
        <div className="buttons">
            <h1 className="center">Home</h1>
            <br />
            <HorizontalLine />
            <br/>
            <Link to="/employeePortal">
                <button>+ Employee</button>
                <br />
            </Link>
            <footer>
                <div className="footer">
                    <span>
                        Hello
                    </span>
                </div>
            </footer>
        </div>
    )
}

export default Home;