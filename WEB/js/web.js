var counter = 0;

$(function() {
	
	var imgDiv = $("<div id='images'>");
	imgDiv.hide();
	$("body").append(imgDiv);

	Dropzone.instances[0].on("addedfile", function(file) {

    	var img = document.createElement('img');
        img.file = file;
        img.id = "img" + counter;
        counter ++;
        imgDiv.append(img);
        var reader = new FileReader();
        reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
        reader.readAsDataURL(file);
	});
});