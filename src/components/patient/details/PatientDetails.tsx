
import { Patient } from "../../../types"
import PatientDetailItem from "./PatientDetailItem";

type PatientDetailsProps = {
    patient: Patient;
};

const PatientDetails = ({ patient }: PatientDetailsProps) => {
    return (
        <div className="bg-white shadow-md rounded-xl mx-5 my-10 px-5 py-10">
            <PatientDetailItem label="ID" data={patient.id} />
            <PatientDetailItem label="Nombre" data={patient.name} />
            <PatientDetailItem label="Dueño" data={patient.caretaker} />
            <PatientDetailItem label="email" data={patient.email} />
            <PatientDetailItem label="Fecha Alta" data={patient.date.toString()} />
            <PatientDetailItem label="Sintomas" data={patient.symptoms} />

            <div className="flex justify-between mt-10">
                <button
                    type="button"
                    className="font-bold py-2 px-6 rounded-lg uppercase bg-indigo-600 hover:bg-indigo-700 text-white">
                    Editar
                </button>
                <button
                    type="button"
                    className="font-bold py-2 px-6 rounded-lg uppercase bg-red-600 hover:bg-red-700 text-white">
                    Eliminar
                </button>
            </div>

        </div>
    )
};

export default PatientDetails