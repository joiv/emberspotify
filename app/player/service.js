import Ember from 'ember';
const noTrackMessage = 'Nothing is playing right now';

export default Ember.Service.extend({
	audio: null,
  	track: null,

  	isPlaying: false,
  	currentTrack: noTrackMessage,

  	init() {
  		this._super(...arguments);

    	let audio = new Audio();
    	audio.autoplay = true;

    	audio.onended = () => this.set('isPlaying', false);
    	audio.onpause = () => this.set('isPlaying', false);
    	audio.onplaying = () => this.set('isPlaying', true);

    	this.set('audio', audio);
  	},

  	playTrack(track) {
  		let oldTrack = this.get('track');
  		if(oldTrack === track) {
  			if(this.get('isPlaying')) {
  				this.pause();
  			} else {
  				this.play();
  			}
    	} else {
    		this.set('track', track);
    		this.set('audio.src', track.get('previewUrl'));
    		this.play();
    	}
  	},

  	play() {
    	this.get('audio').play();
  	},

  	pause() {
    	this.get('audio').pause();
  	}
});
