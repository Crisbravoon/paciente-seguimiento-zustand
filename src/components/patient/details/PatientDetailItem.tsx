
type PatientDetailItemProps = {
    label: string,
    data: string
};

const PatientDetailItem = ({ label, data }: PatientDetailItemProps) => {
    return (
        <p className=" font-bold text-indigo-600 uppercase mb-3">{label}:{' '}
            <span className=" text-gray-700 font-normal normal-case">
                {data}
            </span>
        </p>
    )
}

export default PatientDetailItem