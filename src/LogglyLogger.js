import { LogglyTracker } from 'loggly-jslogger';

const logger = new LogglyTracker();
logger.push({ 'logglyCollectorDomain': 'logs-01.loggly.com' });
logger.push({ 'logglyKey': 'c48f9006-9b2a-43b7-8be1-09d8a2e55827' });

export default logger;
