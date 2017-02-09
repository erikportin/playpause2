import { Logger } from "./logger";
export class Subscriber {
    constructor() {
        this.logger = new Logger('Subscriber', 'brown');
        this.topics = {};
        this.hasOwnProperty = this.topics.hasOwnProperty;
    }
    on(topic, listener) {
        this.logger.log('on', topic, typeof listener, this.topics);
        if (!this.hasOwnProperty.call(this.topics, topic)) {
            this.topics[topic] = [];
        }
        return {
            topic: topic,
            index: this.topics[topic].push(listener) - 1
        };
    }
    ;
    unsubscribe(token) {
        this.logger.log('unsubscribe', token, this.topics);
        if (this.topics[token.topic] && this.topics[token.topic][token.index]) {
            delete this.topics[token.topic][token.index];
        }
    }
    publish(topic, info) {
        this.logger.log('publish', topic, info, this.topics);
        if (!this.hasOwnProperty.call(this.topics, topic))
            return;
        this.topics[topic].forEach(function (item) {
            item(info != undefined ? info : {});
        });
    }
    ;
}