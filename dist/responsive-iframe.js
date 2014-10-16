/*! Responsive iFrame - v0.0.1
* https://github.com/zombiept2/responsive-iframe
* Copyright (c) 2014; Licensed MIT */
function ResponsiveIFrame(el) {
	if (window.postMessage) {
		if (window.addEventListener) {
			window.addEventListener('message', function(e) {
				privateMethods.messageHandler(el,e);
			}, false);
		} 
		else if (window.attachEvent) {
			window.attachEvent('onmessage', function(e) {
				privateMethods.messageHandler(el,e);
			}, el);
		}
	} 
	else {
		setInterval(function () {
			var hash = window.location.hash, matches = hash.match(/^#h(\d+)(s?)$/);
			if (matches) {
				privateMethods.setHeight(el, matches[1]);
			}
		}, 150);
	}
	
	var privateMethods = {
		messageHandler: function (elem, e) {
			var height,matches,strD;
			
			height = parseInt(e.data);
			if (!isNaN(height)) {
				try {
					privateMethods.setHeight(elem, height);
				} 
				catch (ex) {}
			}
		},
		// Sets the height of the iframe
		setHeight : function (elem, height) {
			height = height + 10;
			elem.style.height = height + 'px';
		},
		getDocHeight: function () {
			var D = document;
				return Math.min(
				Math.max(D.body.scrollHeight, D.documentElement.scrollHeight),
				Math.max(D.body.offsetHeight, D.documentElement.offsetHeight),
				Math.max(D.body.clientHeight, D.documentElement.clientHeight)
			);
		}
	};
}

var self,module,ResponsiveIframe = function () {self = this;};

ResponsiveIframe.prototype.allowResponsiveEmbedding = function() {
	if (window.addEventListener) {
		window.addEventListener("load", self.messageParent, false);
		window.addEventListener("resize", self.messageParent, false);
	} else if (window.attachEvent) {
		window.attachEvent("onload", self.messageParent);
		window.attachEvent("onresize", self.messageParent);
	}
};

ResponsiveIframe.prototype.messageParent = function() {
	var h = document.body.offsetHeight;
	if(top.postMessage){
		top.postMessage( h , '*');
	}
};

function responsiveIframe() {
	return new ResponsiveIframe();
}

// expose
if ('undefined' === typeof exports) {
	window.responsiveIframe = responsiveIframe;
} else {
	module.exports.responsiveIframe = responsiveIframe;
}