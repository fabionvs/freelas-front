import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Create  from './Create';


function Index() {
    return (
        <>
            <Routes>
                <Route path="/create" element={<Create />} />
            </Routes>
        </>
    )
}
export default Index;