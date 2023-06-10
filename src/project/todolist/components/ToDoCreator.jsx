import React from 'react'

export default function ToDoCreator({ date, task, onDateChange, onTaskChange, onAjouter }) {
    let inputStyle = {
        border: "none",
        borderBottom: "1px solid",
        outline: "none",
        fontSize: "16px"
    }

    let trThStyle = {
        padding: "10px"
    }
    return (
        <div>
            <table style={{ borderCollapse: "collapse" }}>
                <thead style={{ background: "black", color: "white" }}>
                    <th style={trThStyle}>Date</th>
                    <th style={trThStyle}>Tache</th>
                    <th style={trThStyle}></th>
                </thead>
                <tbody>
                    <tr style={{ borderBottom: "1px solid" }}>
                        <td style={trThStyle}>
                            <input type="datetime-local" value={date} onChange={onDateChange} style={inputStyle} />
                        </td>
                        <td style={trThStyle}>
                            <input type="text" value={task} onChange={onTaskChange} placeholder='La tache ...' style={inputStyle} />
                        </td>
                        <td style={trThStyle}>
                            <button
                                onClick={onAjouter}
                            >
                                + Ajouter
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
