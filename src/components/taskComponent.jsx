import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { State } from './task.class'

const TaskComponent =( {state} ) => {

return(
    <div>
        <h1>nombre: {state.nombre}</h1>
        <h1>apellido: {state.apellido}</h1>
        <h1>email: {state.email}</h1>
        <h1>conectado: {state.conectado === true ? 'contacto en linea' : 'contacto no disponible'}</h1>
    </div>
)
}
TaskComponent.propTypes = {
    state: PropTypes.instanceOf(State)
}


export default TaskComponent;