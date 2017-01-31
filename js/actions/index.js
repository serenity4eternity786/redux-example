var ADD_REPOSITORY = 'ADD_REPOSITORY';
var addRepository = function(repository) {
    return {
        type: ADD_REPOSITORY,
        repository: repository
    }
};

var RATE_REPOSITORY = 'RATE_REPOSITORY';
var rateRepository = function(repository, rating) {
    return {
        type: RATE_REPOSITORY,
        repository: repository,
        rating: rating
    };
};

exports.ADD_REPOSITORY = ADD_REPOSITORY;
exports.addRepository = addRepository;
exports.RATE_REPOSITORY = RATE_REPOSITORY;
exports.rateRepository = rateRepository;

var FETCH_DESCRIPTION_SUCCESS = 'FETCH_DESCRIPTION_SUCCESS';
var fetchDescriptionSuccess = function(repository, description) {
    return {
        type: FETCH_DESCRIPTION_SUCCESS,
        repository: repository,
        description: description
    };
};

var FETCH_DESCRIPTION_ERROR= 'FETCH_DESCRIPTION_ERROR';
var fetchDescriptionError = function(repository, error) {
    return {
        type: FETCH_DESCRIPTION_ERROR,
        repository: repository,
        error: error
    };
};

exports.FETCH_DESCRIPTION_SUCCESS = FETCH_DESCRIPTION_SUCCESS;
exports.fetchDescriptionSuccess = fetchDescriptionSuccess;
exports.FETCH_DESCRIPTION_ERROR = FETCH_DESCRIPTION_ERROR;
exports.fetchDescriptionError = fetchDescriptionError;

 else if (action.type === actions.FETCH_DESCRIPTION_SUCCESS) {
        // Find the index of the matching repository
        var index = -1;
        for (var i=0; i<state.length; i++) {
            var repository = state[i];
            if (repository.name === action.repository) {
                index = i;
                break;
            }
        }

        if (index === -1) {
            throw new Error('Could not find repository');
        }

        var before = state.slice(0, i);
        var after = state.slice(i + 1);
        var newRepository = Object.assign({}, repository, {
            description: action.description
        });
        return before.concat(newRepository, after);
    }
    else if (action.type === actions.FETCH_DESCRIPTION_ERROR) {
        // Find the index of the matching repository
        var index = -1;
        for (var i=0; i<state.length; i++) {
            var repository = state[i];
            if (repository.name === action.repository) {
                index = i;
                break;
            }
        }

        if (index === -1) {
            throw new Error('Could not find repository');
        }

        var before = state.slice(0, i);
        var after = state.slice(i + 1);
        var newRepository = Object.assign({}, repository, {
            description: 'N/A'
        });
        return before.concat(newRepository, after);
    }

    return state;
};