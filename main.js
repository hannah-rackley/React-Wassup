const h = React.createElement;
const wassups = [ 
    {
        "userName": 'Michael',
        "id": 1,
        "body": "If I had a gun with two bullets and I was in a room with Hitler, Bin Laden, and Toby, I would shoot Toby twice.",
    },
    {
        "userName": 'Jim',
        "id": 2,
        "body": "Beets, Bears, Battlestar Galactica."
    },
    {
        "userName": 'Kelly',
        "id": 3,
        "body": "I have alot of questions. Number one, how dare you?"
    },
    {
        "userName": 'Andy',
        "id": 4,
        "body": "Sorry I annoyed you with my friendship."
    },
    {
        "userName": 'Pam',
        "id": 5,
        "body": "I feel God in this Chili’s tonight."
    },
    {
        "userName": 'Dwight',
        "id": 6,
        "body": "Whenever I'm about to do something, I think, 'Would an idiot do that?' And if they would, I do not do that thing."
    },
    {
        "userName": "Michael",
        "id": 8,
        "body": "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me."
    }
]

let WassupRow = props => 
    <div className='rows'>
        <h3>{props.wassup.body}</h3>
        <p className="author">-{props.wassup.userName}</p>
    </div>;


let WassupList = props => 
    <div>
        {props.wassups.map(wassup => <WassupRow props={props} wassup={wassup} key={wassup.id}/>)}
    </div>;

class WassupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newWassup: "",
            user: ""
        }
    }
    render() {
        let handleSubmit = (event) => {
            event.preventDefault();
            this.props.addWassup({ body: this.state.newWassup, userName: this.state.user });
            this.setState({ newWassup: "" });
        }
        let handleNewWassup = (event) => this.setState({ newWassup: event.target.value });
        let handleNewUser = (event) => this.setState({ user: event.target.value });
        return <form className="input-fields" onSubmit={handleSubmit}>
            <input type="text" placeholder="What's up?" value={this.state.newWassup} onChange={handleNewWassup}/>
            <input type="text" placeholder="Username" value={this.state.user} onChange={handleNewUser}/>
            <input type='submit' value="Post"/>
        </form>
    }
}

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wassups: wassups,
            id: 8
        }
    }
    render() {
        let addWassup = (props) => {
            this.setState({
                id: this.state.id += 1
            })
            this.setState({ 
                wassups: [
                    {
                        userName: props.userName,
                        id: this.state.id,
                        body: props.body
                    }
                ].concat(this.state.wassups)
             })
        }
        return <div className="homepage">
            <h1>Wassup</h1>
            <WassupForm addWassup={addWassup}/>
            <WassupList wassups={this.state.wassups}/>
        </div>
    }
 }

 ReactDOM.render(
     <Homepage></Homepage>, document.querySelector('.react-root')
 );