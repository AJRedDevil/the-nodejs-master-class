# RESTful Uptime Monitoring Application
> An "uptime monitor" allows users to enter URLs they want monitored, and receive alerts when those resources "go down" or "come back up".

**Plain node along with build-in node modules. No npm packages. Twillio for SMS.**

## Requirement Spec
- The API listens on a PORT and accepts incoming HTTP requests for POST, GET, PUT, DELETE AND HEAD.
- The API allows a client to connect, then create a new user, then edit and delete that user.
- The API allows a user to "sign-in" which gives them a token that they can use for subsequent authenticated requests.
- The API allows the user to "sign out" which invalidates their token.
- The API allows a signed-in user to use their token to create a new "check". Define what up and down is.
- The API allows a signed-in user to edit or delete any of their checks. Limit of *5 checks*.
- In the background, workers perform all the "checks" at the appropriate times(1min.), and send alerts(send an SMS) to the users when a check changes its state from "up" to "down", or vice-versa. 




