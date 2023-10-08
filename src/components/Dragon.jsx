import React from 'react'
import List from './List'

const Dragon = ({ isModalOpen, taskValueArr}) => {
    return (
        <div>
            <List
                isModalOpen={isModalOpen}
                taskValueArr={taskValueArr}
            />
        </div>
    )
}

export default Dragon
