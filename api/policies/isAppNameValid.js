module.exports = async function(req, res, next) {
	if(req.headers && req.headers.app_name) {
		if(req.headers.app_name == 'ezWaiting') {
            next()
        } else {
            return res.status(401).json({errors: [{code:sails.config.custom.errorCodes.invalidAppName.code, message: sails.config.custom.errorCodes.invalidAppName.message}]});
        }
	} else {
		return res.status(401).json({errors: [{code:sails.config.custom.errorCodes.noAppName.code, message: sails.config.custom.errorCodes.noAppName.message}]});
	}
};
