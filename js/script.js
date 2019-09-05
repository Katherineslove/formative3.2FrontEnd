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

	// do stuff when the add product button is clicked
	$('#addProductButton').click(function(){
		console.log('got a click');

		event.preventDefault();
		let project_id;
		let author_id;
		let author_name;
		let project_name;
		let screenshotURL;
		let link;

		$.ajax({
			url: `${url}/addProject`,
			type: 'POST',
			data: {
				projectId: project_id,
				// authorId: author_id,
				authorName: author_name,
				projectName: project_name,
				screenshotURL: screenshot_URL
			},
			success: function(data){
				console.log(data);
				console.log('sent a request');
				},
			error: function(err){
				console.log('got an error!');
				console.log(err);
			}
		});
	});
});
