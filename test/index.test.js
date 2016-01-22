"use strict";

var thumby = require('../src/index.js');
var buster = require('buster');
var expect = buster.referee.expect;

buster.testCase("index", {

    setUp:function(){
        this.ok = 'https://www.youtube.com/watch?v=ANLWMDD6-Ac';
        this.nonHttp = 'http://www.youtube.com/watch?v=ANLWMDD6-Ac'
    },

    "should unset thumb if it's not HTTPS" : function(done) {
        thumby(this.nonHttp, function (err, res) {
            expect(res).toBeFalsy();
            expect(err.message).toEqual('Url is not Https: http://www.youtube.com/watch?v=ANLWMDD6-Ac');
            done();
        }.bind(this));
    }

    /*vimeo: {

        setUp: function() {
            this.fakeRequest = this.stub(require("request"), "get");
            this.fakeRequest.yields(null, {status: 200}, {thumbnail_url: 'https://i.vimeocdn.com/video/502815338_1280.jpg'});
        },

        "should call vimeo for vimeo URL": function() {
            videoProcessor([this.vimeo], function () {
                expect(this.fakeRequest).toHaveBeenCalledOnce();
                expect(this.fakeRequest.getCall(0).args[0].url).toEqual("https://vimeo.com/api/oembed.json?url=https://vimeo.com/116454763");
            }.bind(this));
        },

        "should return url from vimeo response": function() {
            videoProcessor([this.vimeo], function () {
                expect(this.vimeo.videoThumb).toEqual('https://i.vimeocdn.com/video/502815338_1280.jpg');
            }.bind(this));
        },

        "should return error on request error": function() {
            this.fakeRequest.yields(new Error("some error"), {status: 500}, "error");
            videoProcessor([this.vimeo], function (err) {
                expect(err.code).toEqual("E_REQUEST_ERROR");
                expect(err.error.message).toEqual("some error");
            });
        },

        "should return error wrong status": function() {
            this.fakeRequest.yields(null, {status: 500}, {state: "down"});
            videoProcessor([this.vimeo], function (err) {
                expect(err.code).toEqual("E_REQUEST_ERROR");
                expect(err.status).toEqual(500);
                expect(err.response).toEqual({state: "down"});
            });
        }
    },

    youtube: {

        "should create thumb url with extracted video ID": function() {
            var videos = [
                this.youtube,
                _.merge({}, this.youtube, {permalink: "https://www.youtube.com/watch?t=9&v=EFu7hdEzf7w"}),
                _.merge({}, this.youtube, {permalink: "https://www.youtube.com/watch?v=EFu7hdEzf7w&t=9&"})
            ];

            videoProcessor(videos, function() {
                expect(_.pluck(videos, "videoThumb")).toEqual([
                    "https://img.youtube.com/vi/EFu7hdEzf7w/hqdefault.jpg",
                    "https://img.youtube.com/vi/EFu7hdEzf7w/hqdefault.jpg",
                    "https://img.youtube.com/vi/EFu7hdEzf7w/hqdefault.jpg"
                ]);
            });
        }
    },

    facebook: {

        "should return a thumb url from link": function(done) {
            var videos = [this.facebook];

            nock("https://www.facebook.com")
                .get("/BuddyRest/videos/vb.182850171790666/825185544223789/?type=2&theater")
                .reply(200, require('fs').readFileSync('test/fixtures/facebookRequestResponse.txt','utf8'));

            videoProcessor(videos, function() {
                expect(_.pluck(videos, "videoThumb")[0]).toEqual("thisIsAnUrlFromARequestFixture");
                done();
            });
        },

        "should pass down an error from jsdom if such exists": function (done) {
            var self = this;
            var videos = [self.facebook];
            var stubbedError = new Error("Stubbed error!");

            self.fakeDomify=self.stub(require("jsdom"),"env");
            self.fakeDomify.yields(stubbedError);

            videoProcessor(videos, function(err) {
                expect(err).toMatch({
                    code: "E_REQUEST_ERROR",
                    error: stubbedError,
                    url: self.facebook.permalink
                });
                done();
            });
        },

        "should return an error if no thumb is found in the html": function(done) {
            var self = this;

            self.fakeDomify=self.stub(require("jsdom"),"env");
            self.fakeDomify.yields(null, {
                document: {
                    getElementById(){
                        return null;
                    }
                }
            });

            var videos = [self.facebook];

            videoProcessor(videos, function (err) {
                expect(err).toMatch({code: "E_THUMB_NOT_FOUND", url: self.facebook.permalink});
                done();
            });
        }
    }*/

});
