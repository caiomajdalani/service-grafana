
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf, colorize, splat } = format;

const myFormat = printf((info) => {
    if (info.meta && info.meta instanceof Error) {
      return `${info.timestamp} ${info.level}: ${info.message} -> { ${info.meta.stack} }`;
    }
    return `${info.timestamp} ${info.level}: ${info.message}`;
});

module.exports = createLogger({
    format: combine(
        timestamp(),
        splat(),
        myFormat
    ),
    transports: [
        new transports.Console({
            format: combine(
                timestamp(),
                colorize(),
                myFormat
            )
        }), 
        new transports.File({ filename: 'errors.log', level: 'error' }),
        new transports.File({ filename: 'combined.log' })
    ]
});