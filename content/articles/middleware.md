---
title: Middleware stack design for HTTP API application
date: 2022-02-01
slug: middleware
---

HTTP Server:

```ruby
APP = ->(env) {
  begin
    [status, headers, body] =
      case env['PATH_INFO']
      when '/ok'
        [200, [], 'ok']
      when '/client_error'
        [400, [], 'client error']
      when '/server_error'
        raise 'internal server error'
      end
  rescue StandardError => e
    env['app.error'] = e
    [500, {}, "Internal Server Error"]
  end
  [status, headers, body]
}

Logging = ->(app, logger = Logger.new($stdout) {
  ->(env) {
    logger.info("request to #{env['PATH_INFO']}"
    app.(env)
  }
}

ErrorHandler = ->(app) {
  notify = ->(e) { puts "Notify error: #{e}" }
  ->(env) {
    begin
      response = app.(env)
      if (error = env['app.error'])
        notify.(error)
      end
      response
    rescue StandardError => e
      notify.(error)
    end
  }
}
```

Compose:

```ruby
require 'logger'

app = Logging.(ErrorHandler.(APP))
```

```ruby
# config.ru

run Logging.(ErrorHandler.(APP))
```
