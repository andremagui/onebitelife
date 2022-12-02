import AllPages from "./AllPages";
import { useState } from "react";
import AllPages from "./AllPages";
import HomePage from "./HomePages";
import Home from "../Pages/Home";


export default function Routes() {
    const [showHome, setShowHome] = useState("false");

    return (
        <>
            {showHome == "true" ? <HomePage /> : <AllPages />}
        </>
    );
}