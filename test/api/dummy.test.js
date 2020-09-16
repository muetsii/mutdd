const { expect } = require('chai');

const service = require('../../src/api/dummy');

const ResponseMock = require('../mock/api/Response.mock');

describe('api/dummy/', () => {
    let request;
    let response;

    beforeEach(() => {
	request = {};
	response = new ResponseMock();
    });

    it('replies with empty object', () => {
	// Arrange

	// Act
	service(request, response);

	// Assert
	expect(response.body).to.eql({});
    });
});
