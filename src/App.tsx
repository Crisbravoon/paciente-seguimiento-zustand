

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import PatientsList from "./components/patient/form/PatientsList"
import PatientForm from "./components/patient/form/PatientForm"
import { Bounce } from "react-toastify/unstyled"


function App() {

  return (
    <>
      <div className="container  mx-auto mt-20">
        <h1 className="font-black text-5xl text-center md:w-2/3 md:mx-auto"> Seguimiento de Pacientes {''}
          <span className="text-indigo-700">Veterianaria </span>
        </h1>

        <div className=" mt-12 md:flex">
          <PatientForm />
          <PatientsList />
        </div>
      </div>
      <ToastContainer
        position="top-center"
        transition={Bounce}
        theme="colored" />
    </>
  )
}

export default App
