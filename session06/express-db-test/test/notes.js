var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();

var db = require('../db');

chai.use(chaiHttp);

describe('notes router', () => {
	var _notes;

	before(done => {
		db.get().dropDatabase(() => {
			done();
		});
	});

	beforeEach(done => {
		db.get().collection('notes').find().toArray().then(notes => {
			_notes = notes;
			done();
		});
	});

	it('should get the page with notes.', done => {
		chai.request(server)
			.get('/notes')
			.send()
			.then(res => {
				res.should.have.status(200);
				done();
			})
			.catch(err => {console.log(err)});
	});

	describe('/notes/new', () => {
		it('should get a form for a note', done => {
			chai.request(server)
			.get('/notes/new')
			.send()
			.then(res => {
				res.should.have.status(200);
				done();
			})
			.catch(err => {console.log(err)});
		});

		it('should post a new note', done => {
			chai.request(server)
			.post('/notes/new')
			.type('form')
			.send({title: 'Test', content: 'Content'})
			.then(res => {
				res.should.have.status(200);
				done();
			})
			.catch(err => {console.log(err)});
		});
	});

	describe('/notes/:id', () => {
		it('should get a form with a note', done => {
			chai.request(server)
			.get(`/notes/${_notes[0]._id}`)
			.send()
			.then(res => {
				res.should.have.status(200);
				done();
			})
			.catch(err => {console.log(err)});
		});

		it('should post an update to a note', done => {
			chai.request(server)
			.post(`/notes/${_notes[0]._id}`)
			.type('form')
			.send({title: `${_notes[0].title} update`, content: `${_notes[0].content} update`})
			.then(res => {
				res.should.have.status(200);
				done();
			})
			.catch(err => {console.log(err)});
		});
	});
});