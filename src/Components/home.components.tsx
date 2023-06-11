import { Component } from "react";
import UserService from "../services/user.service";
import userService from "../services/user.service";

type Props = {};
type State = { content: string; }
export default class Home extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { content: "" };
    }

    componentDidMount() {
        userService.getPublicContent().then(response => { this.setState({ content: response.data }); })
    }
}