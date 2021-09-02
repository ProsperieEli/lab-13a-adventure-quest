## Making a plan

1.  Make a drawing of your app. Simple "wireframes"
2.  Once you have a drawing, name the HTML elements you'll need to realize your vision
3.  For each HTML element ask: Why do I need this?
4.  Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5.  Is there some state we need to initialize?

         -name
         -emoticon
         -value1
         -value2
         -visited questions

6.  Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?

         -First page: submit button
             --State of name and emoticon change
                 --takes to second page

         -Second page: Click event
             --directed to url of one of three questions

         -Third-five: submit button
             --changes: value1, value2 and visited questions based on user selection radio button
                 --redirects to second page

         -Results page: play again button
             --On click, clear out all local storage
                 --redirect to first page

7.  Think about how to validate each of your steps

         Data model.
         findById
         Write function that takes form data and returns plain JS.
             -set and get user data
         Render function
             -keep track of results on second-fifth with user data displayed
         function to track if pages have been visited
             -one function that redirects and crosses off the seen sites

8.  Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9.  Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.

## First Page(Greeting page)

    -header

    -form for name
    -three radio buttons for emotions (what do you prefer: three random animals)
    -button for submission

## Second Page(list of 3 links)

    -header

    -3 <a to question page> (hard code)
    -keep track of results on second-fifth with user data displayed

## Three-five(Same question pages/Dynamic pages)

    -keep track of results on second-fifth with user data displayed
    -form

<!--Only thing hard coded is form-->

    -title
    -image
    -div(description)
    -3 radio buttons
    -button for submission

## Final(results page)

    -name
    -emoticon
    -div(data related to value1 and value2)

    -return to first page button
