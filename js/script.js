$(document).ready(function(){
	let serverURL;
	let serverPort;
	let url;
	let editing = false;

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
	$('#addProjectButton').click(function(){
		event.preventDefault();

		let project_id;
		let author_id;
		let author_name;
		let project_name;
		let screenshot_URL;
		let link;

		// $.ajax({
		// 	url: `${url}/addProject`,
		// 	type: 'POST',
		// 	data: {
		// 		projectId: project_id,
		// 		// authorId: author_id,
		// 		authorName: author_name,
		// 		projectName: project_name,
		// 		screenshotURL: screenshot_URL
		// 	},
		// 	success: function(data){
		// 		console.log(data);
		// 		},
		// 	error: function(err){
		// 		console.log('got an error!');
		// 		console.log(err);
		// 	}
		// });
	});
});



// LOGIN TAB BUTTON CLICK EVENT
$('#loginTabBtn').click(function(){
    event.preventDefault();
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
    $('#loginForm').show();
    $('#registerForm').hide();
});
// REGISTER TAB BUTTON CLICK EVENT
$('#registerTabBtn').click(function(){
    event.preventDefault();
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
    $('#loginForm').hide();
    $('#registerForm').removeClass('d-none').show();
});
// REGISTER SUBMIT EVENT
$('#registerForm').submit(function(){
    event.preventDefault();
    if (sessionStorage['userID']) {
        alert('401, permission denied');
        return;
    };
    const username = $('#rUsername').val();
    const password = $('#rPassword').val();
    const confirmPassword = $('#rConfirmPassword').val();

    if(username.length === 0){
        console.log('please enter a username');
    } else if(password.length === 0){
        console.log('please enter a password');
    } else if(confirmPassword.length === 0){
        console.log('please confirm your password');
    } else if(password !== confirmPassword){
        console.log('your passwords do not match');
    } else {
		console.log('registering is OK!');
		// AJAX REQUEST
        $.ajax({
            url: `${url}/authors`,
            type: 'POST',
            data: {
                username: username,
                password: password
            },
            success:function(result){
                console.log(result);
            },
            error:function(err){
                console.log(err);
                console.log('Something went wrong with registering a new user');
            }
        })
    }
});

//  LOGOUT BUTTON CLICK EVENT
$('#logoutBtn').click(function(){
    if (!sessionStorage['userID']) {
        alert('401, permission denied');
        return;
    };
    sessionStorage.clear();
    getProductsData();
    $('#loginBtn').show();
    $('#logoutBtn').addClass('d-none');
    $('#addProductSection').addClass('d-none');
    $('#lUsername').val(null);
    $('#lPassword').val(null);
});
