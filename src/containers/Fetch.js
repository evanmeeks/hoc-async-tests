import React, { Component } from 'react';
import Request from '../components/request';

class Fetch extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
			isLoading: false,
			error: null
		};
	}

	handleGet(url) {
		fetch(url)
			.then((res) => res.json())
			.then(
				(result) => {
					return this.setState({
						items: result,
						isLoading: false
					});
				},
				// Note: it's important to handle errors here
				// instead of a catch() block so that we don't swallow
				// exceptions from actual bugs in components.
				(error) => {
					this.setState({
						error: error,
						isLoading: false
					});
				}
			);
	}

	handleGet2(url) {
		fetch(url)
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error('Something went wrong ...');
				}
			})
			.then((data) => this.setState({ name: 'withFetch', data: data, isLoading: false, method: 'GET' }))
			.catch((error) => this.setState({ error, isLoading: false }));
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
		return <Request {...this.props} {...this.state} />;
	}
}

export default Fetch;
