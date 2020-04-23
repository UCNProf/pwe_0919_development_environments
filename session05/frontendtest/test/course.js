mocha.setup('bdd');

var assert = chai.assert;

/*describe('Array', function() {
  it('should start empty test', function() {
    var arr = [];

    assert.equal(arr.length, 0);
  });

  it('should start empty', function() {
    var arr = [];

    assert.equal(arr.length, 0);
  });
});

describe('Object', function() {
  it('should start empty test', function() {
    var arr = [];

    assert.equal(arr.length, 0);
  });

  it('should start empty', function() {
    var arr = [];

    assert.equal(arr.length, 0);
  });
});

let assert = chai.assert;
*/
describe('MyClass tests', function () {
    describe('The class', function () {
        it('can be instantiated', function () {
            assert.isObject(new Object());
        });
    });
});

/*'use strict';

const Course = require('../js/course'),
	Api = require('../js/api'),
	mocha = require('mocha'),
	chai = require('chai'),
	sinon = require('sinon');

const chaiaspromised = require('chai-as-promised');
chai.use(chaiaspromised);


chai.should();

describe('Course', () => {
	var data;

	beforeEach(() => {
		data = {
			id: 1,
			title: 'Test',
			decription: 'Decription'
		};
	});

	it('should return id, title and description', done => {
		var api = sinon.stub(Api);
		api.get_course.returns({id:2});
		var course = Course.create(api);
		return course.load(1).should.eventually.equal(data);
		//course.load(1).then(course => {
		//	chai.expect(course.id).to.be.equal(data.id);
		//	done();
		//});

		//chai.expect(course.title).to.be.equal(data.title);
		//chai.expect(course.description).to.be.equal(data.description);
	});

	describe('get_title', () => {
		it('should return a string with title and id', () => {
			var course = Course.create(data);

			chai.expect(course.get_title()).to.be.equal(`${data.title} (${data.id})`);
		});
	});
});*/

mocha.run();