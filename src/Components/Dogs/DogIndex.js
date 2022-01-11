import React, {Component} from 'react';

export default class DogIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
        dogImage: '',
        };
    }
    
    componentDidMount() {
        this.getDogImage();
    }
    
    getDogImage() {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            this.setState({
            dogImage: data.message,
            });
        })
        .catch(error => console.log(error));
    }
    
    render() {
        return (
        <div>
            <h1>Here is your dog:</h1>
            <img src={this.state.dogImage} alt="dog" />
            <button onClick={() => this.getDogImage()}>Get a new dog</button>
        </div>
        );
    }
}