import React from 'react'

type Props = {}

export default function BookAppointment({ params }) {
    const name = params.name
    return (
        <div>BookAppointment {name}</div>
    )
}