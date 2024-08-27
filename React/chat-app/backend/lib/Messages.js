const shortid = require("shortid");
const _ = require("lodash");
const redisClient = require("../clients/redis");

function Messages() {
    this.client = redisClient.getClient();
}

module.exports = new Messages();

Messages.prototype.upsert = function ({ message }) {
    this.client.hSet(
        "messages",
        shortid.generate(),
        JSON.stringify({
            message,
            when: Date.now(),
        })
    )
    .catch(err => {
        console.error('Error setting message:', err);
    });
};

Messages.prototype.list = function (callback) {
    let self = this;
    let messageList = [];

    self.client.hGetAll("messages")
        .then(messages => {
            if (messages) {
                for (let message in messages) {
                    messageList.push(JSON.parse(messages[message]));
                }
            }
            return callback(_.orderBy(messageList, "when", "asc"));
        })
        .catch(err => {
            console.error('Error getting messages:', err);
            return callback([]);
        });
};
