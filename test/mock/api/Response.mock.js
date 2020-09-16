class ResponseMock {
    send(body) {
	this.body = body;
    }
}

module.exports = ResponseMock;
