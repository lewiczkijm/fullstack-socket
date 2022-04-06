import {EmploeeType} from "./users";

export function EmploeesTable({employees}:{employees:Array<EmploeeType>}){

    return <table className="table is-fullwidth">
        <thead>
            <tr><th>Name</th><th>Status</th><th>Timestamp</th></tr>
        </thead>
        <tbody>
        {
            employees.map(employee=><tr key={employee._id}>
                <td>{employee.name}</td>
                <td>
                    {
                        employee.status === "Vacation"?
                            <span style={{color:"red"}}>{employee.status}</span>:
                            employee.status
                    }
                </td>
                <td>{employee.timestamp.toLocaleDateString()}</td>
            </tr>)
        }

        </tbody>
    </table>
}