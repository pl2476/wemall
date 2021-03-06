import {
	REQUEST_ORDER_ANALYZE
} from '../constants';

function receiveOrderAnalyze(data) {
    return {
        type: REQUEST_ORDER_ANALYZE,
        data: {
            ...data
        }
    };
}

export default function() {
    return dispatch => {
        var url = pageConfig.apiURL + '/admin/order/analyze';
        return fetch(url)
            .then(response => response.json())
            .then(json => dispatch(receiveOrderAnalyze(json.data)))
    };
}