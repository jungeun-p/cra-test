import React, { useEffect, useState } from 'react';
import useWindowWith from './useWindowWith';

const WidthPrinter = () => {
    const width = useWindowWith();
    return (
        <div>
           {`${width}`} 
        </div>
    );
};

export default WidthPrinter;