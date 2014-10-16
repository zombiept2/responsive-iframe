Responsive iFrame
=================

Responsive iFrame script using only JavaScript

Parent Example
--------------

	<script type="text/javascript" src="../libs/js-ready/js-ready.min.js"></script>
	<script type="text/javascript" src="../dist/responsive-iframe.js"></script>
	<script type="text/javascript">
	ready(function(){
		ResponsiveIFrame(document.getElementById('responsiveiframe'));
	});
	</script>
	
Child Example
--------------

	<script type="text/javascript" src="../dist/responsive-iframe.js"></script>
	<script type="text/javascript">
		ir = responsiveIframe();
		ir.allowResponsiveEmbedding();
	</script>

Credits
-------

Based on the original prototype by [npr](https://github.com/npr/responsiveiframe).


