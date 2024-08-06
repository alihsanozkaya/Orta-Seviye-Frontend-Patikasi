const redis = require("redis");

const client = redis.createClient({
    url: 'redis://localhost:6379'
});

client.on('error', (err) => {
    console.error('Redis client error:', err);
});

client.connect();

const getClient = () => client;

module.exports = {
    getClient
};
