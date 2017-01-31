require('isomorphic-fetch');
var fetchDescription = function(repository) {
    return function(dispatch) {
        var url = 'https://api.github.com/repos/' + repository;
        return fetch(url).then(function(response) {
            if (response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText)
                error.response = response
                throw error;
            }
            return response;
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var description = data.description;
            return dispatch(
                fetchDescriptionSuccess(repository, description)
            );
        })
        .catch(function(error) {
            return dispatch(
                fetchDescriptionError(repository, error)
            );
        });
    }
};

exports.fetchDescription = fetchDescription;