var counter = 0;
$(function() {
	Dropzone.instances[0].on("addedfile", function(file) {

    	var img = document.createElement('img');
        img.file = file;
        img.id = "img" + counter;
        counter ++;
        document.body.appendChild(img);
        var reader = new FileReader();
        reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
        reader.readAsDataURL(file);

	});
});