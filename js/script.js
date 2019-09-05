let serverURL;
let serverPort;
let url;
let editing = false;

// The modal appears onload
$(document).ready(function(){

	if(sessionStorage['userName']){
			console.log('you are logged in ');
			$('#loginBtn').hide();
			$('#logoutBtn').removeClass('d-none');
			$('#addProductSection').removeClass('d-none');

	} else {
			// you aren't logged in
			console.log('please sign in');
	}

	console.log(sessionStorage);
})

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

// THIS NEEDS TO BE CREATED!!!!!!!!!!!!
	// getProjects = () => {
		//     $.ajax({
		//         url: `${url}/allProducts`,
		//         type: 'GET',
		//         dataType: 'json',
		//         success:function(data){
		//             $('#projectList').empty();
		//             for (var i = 0; i < data.length; i++) {
		//                 let project = `
		//                     <li
		//                         class="list-group-item d-flex justify-content-between align-items-center productItem"
		//                         data-id="${data[i]._id}"
		//                     >
		//                         <span class="productName">$${data[i].price} | ${data[i].name}</span>`;
		//
		//                         if(sessionStorage['userName']){
		//                             if(sessionStorage['userID'] === data[i].user_id){
		//                                 product += `<div>
		//                                                 <button class="btn btn-info editBtn">Edit</button>
		//                                                 <button class="btn btn-danger removeBtn">Remove</button>
		//                                             </div>`;
		//                             }
		//                         }
		//                 project += `</li>`;
		//
		//                 $('#projectList').append(product);
		//             }
		//         },
		//         error: function(err){
		//             console.log(err);
		//             console.log('something went wrong with getting all the products');
		//         }
		//     })
		// }

// do stuff when the add product button is clicked
$('#addProjectButton').click(function(){
	event.preventDefault();

	if(!sessionStorage['userID']){
    alert('401, permission denied');
    return;
  }

	let projectName = $('#projectName').val();
  let imageURL = $('#imageURL').val()
  let codeURL = $('#codeURL').val()

	if ($('#projectName').hasClass('is-invalid') || $('#authorName').hasClass('is-invalid') || $('#imageURL').hasClass('is-invalid') || $('#codeURL').hasClass('is-invalid')){
		alert('Please enter the required value(s).')

	} else {

	};

	checkField($('#projectName'));
	checkField($('#authorName'));
	checkField($('#imageURL'));
	checkField($('#codeURL'));

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
	event.preventDefault();

	// if(sessionStorage['userID']){
  //   alert('401, permission denied');
  //   return;
  // }

	checkField($('#rUsername'));
	checkField($('#rPassword'));
	checkField($('#rConfirmPassword'));

	const rPassword = $('#rPassword');
	const rConfirmPassword = $('#rConfirmPassword');

	if ($('#rUsername').hasClass('is-invalid') || $('#rPassword').hasClass('is-invalid') || $('#rConfirmPassword').hasClass('is-invalid')){
		alert('Please enter the required value(s).');
	} else {
		// console.log('you are registered');
		if(rPassword !== rConfirmPassword){
        // We also need to check if the two passwords match
        console.log('your passwords do not match');
    } else {
        // Once all the validation has passed we run our ajax request to our register route
        $.ajax({
            url: `${url}/users`,
            type: 'POST',
            data: {
                username: username,
                email: email,
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
	}



	// if (rpassword !== rconfirmPassword){
	// 	alert('Please enter the required value(s).')
	// 	ajax post request to create new database item
	// }
});

// When the LOGIN button is clicked
$('#loginForm').submit(function(){
	event.preventDefault();

	if(sessionStorage['userID']){
    alert('401, permission denied');
    return;
  }

	// checkField($('#lUsername'));
	// checkField($('#lPassword'));

	const username = $('#lUsername').val();
 	const password = $('#lPassword').val();

	if(username.length === 0){
        console.log('please enter a username');
    } else if(password.length === 0){
        console.log('please enter a password');
    } else {
			console.log('ok good to go');
			$('#authForm').modal('hide');
			$('#loginBtn').hide();
			$('#logoutBtn').removeClass('d-none');

			$.ajax({
				url: `${url}/getAuthors`,
				type: 'POST',
        data: {
            username: username,
            password: password
        },
				success:function(result){
					if(result === 'invalid user'){
							console.log('cannot find user with that username');
					} else if(result === 'invalid password'){
							console.log('Your password is wrong');
					} else {
							console.log(result);
							console.log('ok good to go');

							sessionStorage.setItem('userID', result['_id']);
			        sessionStorage.setItem('userName', result['username']);
			        sessionStorage.setItem('userEmail', result['email']);

						 getProjects();

							$('#authForm').modal('hide');
							$('#loginBtn').hide();
							$('#logoutBtn').removeClass('d-none')
					}
				},
				error:function(err){
	        console.log(err);
	        console.log('Something went wrong with logging in.');
        }
			})



    }
});

// Log out button
$('#logoutBtn').click(function(){
    sessionStorage.clear();

    if(sessionStorage['userID']){
      alert('401, permission denied');
      return;
    }

   getProjects();

    $('#loginBtn').show();
    $('#logoutBtn').addClass('d-none');
    $('#addProductSection').addClass('d-none');
});
