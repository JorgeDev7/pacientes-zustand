import PatientDetailItem from "./PatientDetailItem";
import { usePatientStore } from "../store";

type PatientDetailsProps = {
    patient: Patient;
};

export default function PatientDetails({ patient }: PatientDetailsProps) {

    const { id, name, caretaker, email, date, symptoms } = patient;

    const deletePatient = usePatientStore((state) => state.deletePatient);
    const getPatientById = usePatientStore((state) => state.getPatientById);

    return (
        <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
            <PatientDetailItem
                label="ID"
                data={id}
            />
            <PatientDetailItem
                label="Nombre"
                data={name}
            />
            <PatientDetailItem
                label="Propietario"
                data={caretaker}
            />
            <PatientDetailItem
                label="Email"
                data={email}
            />
            <PatientDetailItem
                label="Fecha Alta"
                data={date.toString()}
            />
            <PatientDetailItem
                label="Síntomas"
                data={symptoms}
            />

            <div className="flex flex-col lg:flex-row justify-between gap-3 mt-10">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                    onClick={() => getPatientById(id)}
                >Editar</button>
                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                    onClick={() => deletePatient(id)}
                >Eliminar</button>
            </div>
        </div>
    );
}
