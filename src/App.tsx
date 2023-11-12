import {Route, Routes} from "react-router";
import {AboutProject, History, Home} from "pages";

export const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<AboutProject/>}/>
                <Route path="/history" element={<History/>}/>
            </Routes>
        </div>
    )
}


