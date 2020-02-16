function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "meghdad23@gmail.com",
	Password : "@Megh23yaz",
	To : 'meghdadyazdi@yahoo.com',
	From : "meghdad23@gmail.com",
	Subject : "helloommmmmmmmmm",
	Body : "hhhhhhhhhhhhhhhheeeeeeeeeeeeeeeeeeeeeellllllllllllllllllllllooooooooooooooooooommmmmmmmmmmmmmmmmmmm",
	}).then(
		message => alert("mail sent successfully")
	);
}