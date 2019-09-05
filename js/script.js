$(document).ready(function(){
	let serverURL;
	let serverPort;
	let url;

	// get configs and request all projects
	$.ajax({
    url: 'config.json',
    type: 'GET',
    dataType: 'json',
    success:function(keys){
      serverURL = keys['SERVER_URL'];
      serverPort = keys['SERVER_PORT'];
      url = `${serverURL}:${serverPort}`;
      // getProjects();
    },
    error: function(){
      console.log('cannot find config.json file, cannot run application');
    }
  });

	// check if a field has a value
	checkField = (field) => {
		$(field).removeClass('is-invalid');

		if (!field.val()) {
			$(field).addClass('is-invalid');
		}
	}

	// do stuff when the add product button is clicked
	$('#addProjectButton').click(function(){
		event.preventDefault();

		let project_name = $('#projectName').val();
		let author_name = $('#authorName').val();
		let screenshot_URL = $('#imageURL').val();
		let link = $('#codeURL').val();

		checkField($('#projectName'));
		checkField($('#authorName'));
		checkField($('#imageURL'));
		checkField($('#codeURL'));

		if ($('.invalid-feedback').length) {
			alert('Please enter the required values.');
		} else {
			console.log(project_name);
			console.log(author_name);
			console.log(screenshot_URL);
			console.log(link);
		}
	});

	// check if the form fields are valid on change
	$('#projectName').change(function(){
		checkField($('#projectName'));
	});
	$('#authorName').change(function(){
		checkField($('#authorName'));
	});
	$('#imageURL').change(function(){
		checkField($('#imageURL'));
	});
	$('#codeURL').change(function(){
		checkField($('#codeURL'));
	});
});
