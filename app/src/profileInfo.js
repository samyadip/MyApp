import React from 'react';

class ProfilePic extends React.Component{
	render(){
		return(
			<img src = {this.props.imageURL} />
		);
	}
}

class ProfileLink extends React.Component{
	render(){
		return(
			<div>
				<a href = {'https://www.facebook.com/' + this.props.username}>
					{this.props.username}
				</a>
			</div>
		);
	}
}

class ProfileName extends React.Component {
	render(){
		return(
			<div> {this.props.name} </div>
		);
	}
}

class ProfileInfo extends React.Component {
    constructor(props) {
    	super(props);
		this.state = {
			name : 'Mobassherah Sadia',
			username : 'mobassherah.sadia',
			image : '../../images/flower.jpg'
		};
  	}
    render(){
		return(
			<div>
				<ProfilePic imageURL = {this.state.image} />
				<ProfileLink username = {this.state.username} />
				<ProfileName name = {this.state.name} />
			</div>
		);
	}
}

export default ProfileInfo;