
module.exports = async function(req, res, next) {

	var token;

	//Check if authorization header is present
	if(req.headers && req.headers.authorization) {

    console.log(req.headers.authorization);
		//authorization header is present

		var parts = req.headers.authorization.split(' ');

		if(parts.length == 2) {

			var scheme = parts[0];

			var credentials = parts[1];

			if(/^Bearer$/i.test(scheme)) {
				token = credentials;
			}
		} else {
			return res.status(401).json({errors: [{code:sails.config.custom.errorCodes.invalidAccessTokenFormat.code, message: sails.config.custom.errorCodes.invalidAccessTokenFormat.message}]});
		}
	} else {

		//authorization header is not present
		return res.status(401).json({errors: [{code:sails.config.custom.errorCodes.noAuthHeader.code, message: sails.config.custom.errorCodes.noAuthHeader.message}]});
	}
	if(token == null || token == undefined || token == "undefined" || token == "null" || token == ""){
		return res.status(401).json({errors: [{code:sails.config.custom.errorCodes.noAccessToken.code, message: sails.config.custom.errorCodes.noAccessToken.message}]});
	}
	const decrypted = await sails.helpers.jwtDecryption(token);
	var loggedInUser;
	if(decrypted) {
		loggedInUser = await User.findOne({
			id: decrypted.data.userId,
			isDeleted: false,
			isActive: true
		}).decrypt();
	}

	if(loggedInUser == undefined){
		// invalid access token
		return res.status(401).json({errors: [{code:sails.config.custom.errorCodes.invalidAccessToken.code, message: sails.config.custom.errorCodes.invalidAccessToken.message}]});;
	}
	req.authUser = loggedInUser;
	next();
};
