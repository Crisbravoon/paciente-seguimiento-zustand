
import { usePatientStore } from "../../../store/store";
import PatientDetailItem from "./PatientDetailItem";
import { Patient } from "../../../types"
import { toast } from "react-toastify";


type PatientDetailsProps = {
    patient: Patient;
};

const PatientDetails = ({ patient }: PatientDetailsProps) => {

    const { deletePatient, getPatientById, } = usePatientStore()

    const handleClick = () => {
        deletePatient(patient.id);
        toast.warning(`Paciente ${patient.name} fue eliminado`);
    };

    return (
        <div className="bg-white shadow-md rounded-xl mx-5 my-10 px-5 py-10">
            <PatientDetailItem label="ID" data={patient.id} />
            <PatientDetailItem label="Nombre" data={patient.name} />
            <PatientDetailItem label="Dueño" data={patient.caretaker} />
            <PatientDetailItem label="email" data={patient.email} />
            <PatientDetailItem label="Fecha Alta" data={patient.date.toString()} />
            <PatientDetailItem label="Sintomas" data={patient.symptoms} />

            <div className="flex flex-col lg:flex-row gap-3 justify-between mt-10">
                <button
                    type="button"
                    className="font-bold py-2 px-6 rounded-lg uppercase bg-indigo-600 hover:bg-indigo-700 text-white"
                    onClick={() => getPatientById(patient.id)}>
                    Editar
                </button>
                <button
                    type="button"
                    className="font-bold py-2 px-6 rounded-lg uppercase bg-red-600 hover:bg-red-700 text-white"
                    onClick={handleClick}>
                    Eliminar
                </button>
            </div>

        </div>
    )
};

export default PatientDetails