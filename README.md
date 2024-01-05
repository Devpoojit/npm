nodemon restarts the project

Basics of Client Server Architecture

HTTP: Hypertext Transfer Protocol

Browser -sends HTTP-> Server
Server -responds-->Browser

Request:
    1.  Method
        GET
        PUT
        POST
        DELETE
    2.  URL / Endpoint:
        Tells what resource you are looking for
    3. Headers:
        Metada : Type of content to receive, Authentication
    4. Body:
        Data being sent to server.
        e.g: Comment

Response
    1.  HTTP Status Code
        Numerical Code of servers response
        e.g,    200: OK
                404: Not Found
                500: Internal Server Error
    2.  Headers
        Metada about the response
            Server COntent type, cash control
    3.  Body
        Not all response have body
        Contains data user has requested

HTTP Methods:
    Ways in which we communicate with the server
        1.  GET:    Retrieve Data 
        2.  POST:   Insert or add new data. Adding new order, create new account {Sign up for new account}
        3.  PUT:    Update existing data (Updates entire data) 
        4.  PATCH:  Partial Updates (Updates specific part of data)
        5.  DELETE: Remove Data

HTTP Status Codes:
    Numerical responses that idicate output of a request made to a website or web app
    1.  1XX:    Information or Preliminary Responses
                    Acknowledgement
                    e.g. 100: Server has received initial part of the request and is waiting for the remaining part
    2.  2XX:    Success Responses
                    e.g. 200:   OK
    3.  3XX:        Redirection Messages
                    You need to take an extra-step
                    e.g. 300: The resourcce you are trying to access has permanently moved to a new URL.
    4.  4XX:    Client Side Errors:
                    There was a problem with the request
                    e.g.    404:    Server cant find requested resource
                            403:    Forbidden: Not allowed to access this resource
    5.  5XX:    Server Side Errors
                    e.g     500: Server ecountered internal error and could not fulfil the request

    
             