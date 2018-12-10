import React from 'react';
import axios from 'axios';
const withFetching = (url) => (Component) =>
	class WithFetching extends React.Component {
		constructor(props) {
			super(props);

			this.state = {
				data: null,
				isLoading: false,
				error: null,
				method: null,
				name: null
			};
		}
		handleGet(url) {
			fetch(url)
				.then((response) => {
					if (response.ok) {
						return response.json();
					} else {
						throw new Error('Something went wrong ...');
					}
				})
				.then((data) => this.setState({ url, name: 'withFetch', methodFn: this.handleGetFn, data: data, isLoading: false, method: 'GET' }))
				.catch((error) => this.setState({ url, name: 'withFetch', methodFn: this.handleGetFn, data: error, isLoading: false, method: 'GET' }));
		}

		handleGetFn = this.handleGet.toString();

		componentDidMount() {
			this.setState({ isLoading: true });
			this.handleGet(url);
		}

		render() {
			return <Component {...this.props} {...this.state} />;
		}
	};
export default withFetching;
