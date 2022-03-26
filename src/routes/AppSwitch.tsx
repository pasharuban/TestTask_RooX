import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Aside from "../components/Aside/Aside";
import UserData from "../components/UserData/UserData";
import UserList from "../components/UserList/UserList";
import BaseContentContainer from "../containers/BaseContentContainer/BaseContentContainer";

import { routes } from "./routes";

function AppSwitch() {
  return (
    <Router>
      <Aside />
      <BaseContentContainer>
        <Switch>
          <Route exact path={routes.userList}>
            <UserList />
          </Route>
          <Route path={routes.user}>
            <UserData />
          </Route>
        </Switch>
      </BaseContentContainer>
    </Router>
  );
}

export default AppSwitch;
