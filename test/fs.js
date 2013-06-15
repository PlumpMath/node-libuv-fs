describe('fs', function() {

    var chai = require('chai');

    var fs = require('../build/Release/fs');

    describe('#openSync', function() {

        it('should throw an error if file not existent', function() {
            chai.expect(function() {
                fs.openSync('blabla');
            }).to.throw(Error);
        });

        it('should return a file descriptor', function() {
            chai.expect(fs.openSync('./README.md')).to.be.a('number');
        });

    });

    describe('#readSync', function() {

    });

    describe('#closeSync', function() {

        it('should throw an error if first argument not a number', function() {
            chai.expect(function() {
                fs.closeSync('blabla');
            }).to.throw(TypeError);
        });

        it('should close a file', function() {
            var fd = fs.openSync('./README.md');

            chai.expect(function() {
                fs.closeSync(fd);
            }).to.not.throw(Error);
        });

    });

});
