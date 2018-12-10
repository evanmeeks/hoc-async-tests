import React from 'react';
import $ from 'jquery';
const withJquery = (url) => (Component) =>
	class WithJquery extends React.Component {
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
			$.get(url, (data) => {
				this.setState({
					items: data,
					isLoading: false
				});
				console.log('cb first success');
			})
				.done((data) => {
					this.setState({ url, name: 'withJquery', methodFn: this.handleGetFn, data, isLoading: false, method: 'GET' });
					console.log('promise second success');
				})
				.fail((error) => {
					this.setState({ url, name: 'withJquery', methodFn: this.handleGetFn, error, data: error, isLoading: false, method: 'GET' });
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
export default withJquery;
