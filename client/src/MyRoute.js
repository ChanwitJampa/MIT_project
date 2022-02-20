import { BrowserRouter,Switch,Route } from "react-router-dom";
import LoginComponent from "./components/LoginComponent";
import RegisterComponent from "./components/RegisterComponent";
import AnnounceComponent from "./components/AnnounceComponent";
import MapComponent from "./components/MapComponent";
import App from "./App"
const MyRoute=()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App}/>
                <Route path="/announce" exact component={AnnounceComponent}/>
                <Route path="/login" exact component={LoginComponent}/>
                <Route path="/register" exact component={RegisterComponent}/>
                <Route path="/map" exact component={MapComponent}/>
            </Switch>
        </BrowserRouter>
    );
}
export default MyRoute;