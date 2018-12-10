import React, { Component } from 'react';
import axios from 'axios';
import Request from '../components/request';

class Axios extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
			isLoading: false,
			error: null
		};
	}

	handleGet(url) {
		axios
			.get(url)
			.then((response) => {
				this.setState({
					items: response,
					isLoading: false
				});
				// handle success
				console.log('axios response', response);
			})
			.catch((error) => {
				this.setState({
					error,
					isLoading: false
				});
				// handle error
				console.log(error);
			})
			.then(() => {
				// always executed
			});
	}

	handleGet2(url) {
		axios
			.get(url)
			.then((result) =>
				this.setState({
					items: result.data,
					isLoading: false
				})
			)
			.catch((error) =>
				this.setState({
					error,
					isLoading: false
				})
			);
	}

	componentDidMount() {
		this.setState({ isLoading: true });

		switch (this.props.method) {
			case 'bad':
				{
					this.handleGet(this.props.url);
					this.setState({
						methodFn: this.handleGet.toString()
					});
				}
				break;
			case 'good':
				{
					this.handleGet2(this.props.url);
					this.setState({
						methodFn: this.handleGet2.toString()
					});
				}
				break;
			default:
				this.handleGet(this.props.url);
		}
	}

	render() {
		return <Request methodFn={this.handleGet2.toString()} {...this.props} {...this.state} />;
	}
}

export default Axios;
