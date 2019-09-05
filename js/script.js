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

		checkField($('#projectName'));
		checkField($('#authorName'));
		checkField($('#imageURL'));
		checkField($('#codeURL'));

		if ($('#projectName').hasClass('is-invalid') || $('#authorName').hasClass('is-invalid') || $('#imageURL').hasClass('is-invalid') || $('#codeURL').hasClass('is-invalid')){
			alert('Please enter the required value(s).')
		} else {
			// post request to create new database item 
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
