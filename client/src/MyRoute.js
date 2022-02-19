import { BrowserRouter,Switch,Route } from "react-router-dom";
import LoginComponent from "./components/LoginComponent";
import RegisterComponent from "./components/RegisterComponent";
import AnnounceComponent from "./components/AnnounceComponent";
import App from "./App"
const MyRoute=()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App}/>
                <Route path="/announce" exact component={AnnounceComponent}/>
                <Route path="/login" exact component={LoginComponent}/>
                <Route path="/register" exact component={RegisterComponent}/>
            </Switch>
        </BrowserRouter>
    );
}
export default MyRoute;