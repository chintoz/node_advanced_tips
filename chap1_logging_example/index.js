const pino = require('pino')()

// Info entries
pino.info('hello pino')
pino.info('the answer is %d', 42)

// Error entries
pino.error('Error string')
pino.error(new Error('and error'))