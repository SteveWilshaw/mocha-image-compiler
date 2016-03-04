var expect = require('chai').expect;

it('should require png images and return the path', function() {
    var png = require('./images/unit-tests.png');
    expect(png).to.equal('/test/images/unit-tests.png');
});

it('should require gif images and return the path', function() {
    var gif = require('./images/css.gif');
    expect(gif).to.equal('/test/images/css.gif');
});

it('should require jpg images and return the path', function() {
    var gif = require('./images/feature.jpg');
    expect(gif).to.equal('/test/images/feature.jpg');
});

it('should require svg images and return the path', function() {
    var gif = require('./images/react.svg');
    expect(gif).to.equal('/test/images/react.svg');
});