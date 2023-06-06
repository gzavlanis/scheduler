import { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AuthService from "./services/auth.service";
import IUser from './types/user.type';
import Login from "./Components/login.component";
import Register from "./Components/register.component";
import Home from "./Components/home.component";
import Profile from "./Components/profile.component";
import BoardUser from "./Components/board-user.component";
import BoardModerator from "./Components/board-moderator.component";
import BoardAdmin from "./Components/board-admin.component";
import EventBus from "./common/EventBus";

type Props = {};

type State = { showModeratorBoard: boolean, showAdminBoard: boolean, currentUser: IUser | undefined }

class App extends Component<Props, State> {
  
}

export default App;