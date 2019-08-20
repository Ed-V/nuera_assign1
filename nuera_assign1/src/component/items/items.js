import React from 'react';

const items = (props) => (
    <div>
<button onClick={props.handleItemDelete.bind(this)}>Test me</button>
    </div>
);

export default items;