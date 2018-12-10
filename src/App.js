import React, { Component } from 'react';
import Request from './components/request';
import withFetching from './containers/WithFetching';
import withXhr from './containers/WithXhr';
import withAxios from './containers/WithAxios';
import withJquery from './containers/WithJquery';

import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			urls: []
		};
	}

	componentDidMount() {
		const urls = [
			'https://jsonplaceholder.typicode.com/postses',
			'https://jsonplaceholder.typicode.com/posts/1',
			'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'
		];

		this.setState({
			urls
		});
	}

	methodsList(urls, method) {
		return urls.map((url, k) => {
			const AppWithFetch = withFetching(url, method)(Request);
			const AppWithXhr = withXhr(url, method)(Request);
			const AppWithAxios = withAxios(url, method)(Request);
			const AppWithJquery = withJquery(url, method)(Request);
			return (
				<div>
					<AppWithFetch />
					<AppWithXhr />
					<AppWithAxios />
					<AppWithJquery />
				</div>
			);
		});
	}

	render() {
		const urls = this.state.urls;

		return (
			<div className='App '>
				<section id='SECTION_1'>
					<div id='DIV_2'>
						<div id='DIV_3'>
							<div id='DIV_4'>
								<h3>Note: Demo Source Code Not Wrapping on (Netlify) Production</h3>
								<div id='DIV_6'>
									<p>
										If you're viewing this on Netlify I left this hosted on Netlify to demonstrate the intital problem I had demoing this app. As you can see
										below the demonstrated higher order component source isn't wrapping or formatting. Interesting problem. Eventually I realized the problem
										was that since I was using .toString() on the source code that was being deployed to production, the reason it wouldn't wrap or format
										wasn't due to some difference in hosting.
										<p>
											It
											<strong> was due to the fact that the source is getting minimized on production builds</strong> , and the in-memory code source is still
											interestingly enough, still minimized. &nbsp;
											<br />
										</p>
										<p>
											<a href='https://84y6zykmnj.codesandbox.io/' target='blank_'>
												Working code-wrapping solution on CodeSandbox
											</a>
										</p>
										<p />
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<div>{this.methodsList(urls, 'bad')}</div>
				{/* <div>{this.methodsList(urls, 'good')}</div> */}
			</div>
		);
	}
}

export default App;
