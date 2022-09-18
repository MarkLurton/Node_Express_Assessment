# Broken App Issues

- Await can only be used inside async functions
- Change app and axios to be const rather than var or let
- Didn't catch any err
- Missing app.use(express.json())
- Instead of awaiting promises one by one can use Promise.all() to do them im parallel
