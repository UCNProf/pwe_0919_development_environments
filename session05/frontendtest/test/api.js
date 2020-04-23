'use strict';

const Api = require('../js/api'),
	Course = require('../js/course'),
	mocha = require('mocha'),
	chai = require('chai'),
	expect = chai.expect,
	sinon = require('sinon');

chai.should();

describe('Api', () => {
	var data;

	beforeEach(() => {
		data = {
			id: 1,
			title: 'Test',
			decription: 'Decription'
		};
	});

	describe('test', () => {
		it('should return "hello"', () => {
			var api = Api.test();
			expect(api).to.be.equal('hello');
		});
	});

	describe('get_course', () => {
		it('should return the callback', done => {
			var course = Course.create();
			Api.get_course(1, course, course => {
				expect(course.id).to.be.equal(1);
				done();
			});
		});
	});

});