# Used for testing differing behavior between new and older asynchronous transport APIs

Newer solutions such as Axios and Fetch don't account for all error cases when using a default recommended implementation. 
This project was to test various "default" implementations against each other provided good and bad fetching endpoints.

Demo: https://hoc-async-tests.netlify.com/

## Demo Source Code Not Wrapping on Production
After deploying to Netlify the source display of the .toString() source from the HOC wrapped component was not "wrapping".
It was due to the fact that the WebPack production builds were being minimized, and the in-memory code source is still interestingly enough, still minimized.

|![undefined](https://cdn.buttercms.com/Owz6SYtTUmBMeodeT47V)  | ![undefined](https://cdn.buttercms.com/mK31fNdPScC6ekkw28M8) |
|--|--|
|  |  |
