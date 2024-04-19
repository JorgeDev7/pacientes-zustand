import PatientDetailItem from "./PatientDetailItem";

type PatientDetailsProps = {
    patient: Patient;
};

export default function PatientDetails({ patient }: PatientDetailsProps) {

    const { id, name, caretaker, email, date, symptoms } = patient;

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
        </div>
    );
}
