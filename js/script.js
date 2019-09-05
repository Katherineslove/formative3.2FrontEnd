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
			// ajax post request to create new database item
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


// When the REGISTER button is clicked
$('#registerForm').submit(function(){
<<<<<<< HEAD
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
=======
	event.preventDefault();

	checkField($('#rUsername'));
	checkField($('#rPassword'));
	checkField($('#rConfirmPassword'));

	let rPassword = $('#rPassword');
	let rConfirmPassword = $('#rConfirmPassword');

	if ($('#rUsername').hasClass('is-invalid') || $('#rPassword').hasClass('is-invalid') || $('#rConfirmPassword').hasClass('is-invalid')){
		alert('Please enter the required value(s).');
	} else {
		if (rPassword !== rConfirmPassword) {
			alert('Sorry, your passwords do not match.');
		} else {
			console.log('ok good to go');
			// Ajax request
		}
	}
	// if (rpassword !== rconfirmPassword){
	// 	alert('Please enter the required value(s).')
		// ajax post request to create new database item
	// }
>>>>>>> 4156a382a3ca9ee12bc698dc1311a7343ac35452
});

// When the LOGIN button is clicked
$('#loginForm').submit(function(){
	event.preventDefault();

	checkField($('#lUsername'));
	checkField($('#lPassword'));

	let lPassword = $('#lPassword');

	if ($('#lUsername').hasClass('is-invalid') || $('#lPassword').hasClass('is-invalid')){
		alert('Please enter the required value(s).');
	}
	// else {
	// 	// server-side validation of password: if (lPassword !== lConfirmPassword) {
	// 	// 	alert('Sorry, your passwords do not match.');
	// 	}
		else {
			console.log('ok good to go');
			// Ajax request
		}
	// }
	// if (rpassword !== rconfirmPassword){
	// 	alert('Please enter the required value(s).')
		// ajax post request to create new database item
	// }
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
