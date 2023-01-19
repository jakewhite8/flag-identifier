const express = require('express')
const next = require('next')

// NextJS configuration
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// "Prepare" NextJS server with config options for dev env, directory, configuration
app.prepare()
  .then(() => {
    // Set up Express server for different API routes
    const server = express()

    server.use(express.static(__dirname + '/public'));

    server.get('*', (req, res) => {
      // Express forwards requests to Next via the request handler
      // All routes defined in /pages are applied and Next "takes over" the request
      return handle(req, res)
    })

    server.listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })