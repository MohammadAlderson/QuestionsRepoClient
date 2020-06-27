import React from 'react';
import {Toast} from 'native-base'
function CustomToast(text, duration = 3000, type) {
    Toast.show({
        text,
        type,
        duration,
        textStyle: {
            fontFamily: 'IRANYekanMobileMedium'
        }
    })
}

export default CustomToast;
