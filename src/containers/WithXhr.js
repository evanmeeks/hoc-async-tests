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
				name: null,
				methodFn: null
			};
		}

		handleGet(url) {
			console.log(' xhr url', url);
			const xhr = new XMLHttpRequest();
			// Setup our listener to process compeleted requests
			xhr.onreadystatechange = () => {
				this.setState({
					isLoading: true
				});
				// Only run if the request is complete
				if (xhr.readyState !== 4) return;

				// Process our return data
				if (xhr.status >= 200 && xhr.status < 300 && url) {
					// What do when the request is successful
					this.setState({ url, name: 'withXhr', methodFn: this.handleGetFn, data: JSON.parse(xhr.responseText), isLoading: false, method: 'GET' });

					return xhr.responseText;
				} else {
					// What to do when the request has failed
					this.setState({ url, name: 'withXhr', methodFn: this.handleGetFn, data: xhr.responseText, isLoading: false, method: 'GET' });

					console.log('withAjax error', xhr);
					return xhr.status;
				}
			};

			xhr.open('GET', url);
			xhr.send();
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
