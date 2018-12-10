import React from 'react';
import axios from 'axios';
const withAxios = (url) => (Component) =>
	class WithAxios extends React.Component {
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
			axios
				.get(url)
				.then((response) => {
					this.setState({ url, name: 'withAxios', methodFn: this.handleGetFn, data: response, isLoading: false, method: 'GET' });

					// handle success
					console.log('axios response', response);
					return response;
				})
				.catch((error) => {
					const { status } = error;
					this.setState({ url, name: 'withAxios', methodFn: this.handleGetFn, data: error, error: status, isLoading: false, method: 'GET' });
					// handle error
					console.log(error);
				})
				.then(() => {
					// always executed
				});
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
export default withAxios;
