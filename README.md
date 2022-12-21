# pockethealth

The app has 2 folders backend and frontend.
Please `cd` into the backend folder and run the backend app by entring the following command: `go run httpserver.go`.
On a separate tab `cd` into the frontned folder and run `npm install && npm start`. Frontend will be server on http://localhost:4200

After submitting the form if you inspect go to the network tab you can see we make a call to the API endpoint `api/subscribeconfirm`, I changed the backend and add the `api` part into the endpoint. I also made an addition to accept the colour. You might also see an error on the console that is caused by the backend, backend returns a HTML page instead a JSON when the API call is made and that causes the error since frontend is looking for a JSON but gets a HTML. However, backend is not checking, saving or processing the data so the call is successfully made and it returns 200(OK).

## Frontend

This app is written in Angular v14.2.10

Frontend includes 2 components; home and sign up newsletter.
Home page looks like how it looks like in the golang app, it has a subscribe button that opens a popup window to sign up to the newsletter. The form on the popup page has sanitization check in all the fields. It will warn you about required fields and what those fields accept.

It also has 13 tests, the code is not fully covered, I just put enough tests to show my abilities to write tests.


Hope you enjoy what you see! 
