var should = require("chai").should();
var expect = require("chai").expect;
var request = require("supertest");
var app = require("../index");



describe("GET /candies", function() {
  it("should return a 200 response", function(done) {
    request(app).get("/candies")
    .expect(200, done);
  });
  it("should return an array", function(done) {
  request(app).get("/candies")
  .end(function(error, response) {
    expect(response.body).to.be.an('array');
    done();
    });
  });
  it("should return an object that have a field called 'name'", function(done) {
    request(app).get("/candies")
    .end(function(error, response) {
      expect(response.body[0]).to.have.property('name');
      expect(response.body[0]).to.have.property('color');
      expect(response.body[0]).to.have.property('id');
      done();
    });
  });
});

describe('POST /candies', function() {
  before(function(done) {
    request(app).post('/candies')
    .type('form')
    .send({
      id: 5,
      name: "Lollipop",
      color: "Red"
    }).end(done);

    it("should add a candy object to the collection candies and return it", function(done) {
      request(app).get("/candies")
      .end(function(error, response) {
        for(var i = 0; i < response.body.length; i++) {
          var candy = response.body[i];
          if(candy.id === 5) {
            expect(candy.name).to.equal('Lollipop');
            expect(candy.color).to.equal('Red');
            done();
          }
        }
      })
    })
  });
});
describe('PUT /candies/:id/edit', function() {
  it("should ensure that when a property is updated when PUT is called", function(done) {
    request(app).put('/candies/:id/edit')
    .end(function(error,response) {
      expect(candy.  )

    });
  });
});

describe('DELETE /candies/:id', function() {
  it("shoud delete object from array 'candies' when delete is called", function(done) {
    request(app).delete('/candies')
    .end(function(error,response) {
      expect(candy. )
    })
  });

});

