import {Route, Routes} from "react-router";
import {AboutProject, Home} from "pages";

export const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<AboutProject/>}/>
            </Routes>
        </div>
    )
}


