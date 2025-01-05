

import { devtools, persist } from "zustand/middleware";
import { create } from "zustand";

import { v4 as uuidv4 } from 'uuid';

import { DraftPatient, Patient } from "../types";
import { createJSONStorage } from "zustand/middleware";


type PatientState = {
    patients: Patient[],
    activeId: Patient['id'],
    addPatient: (data: DraftPatient) => void,
    deletePatient: (id: Patient['id']) => void,
    getPatientById: (id: Patient['id']) => void,
    updatePatient: (data: DraftPatient) => void,
};

export const usePatientStore = create<PatientState>()(
    devtools(persist((set,) => ({
        patients: [],
        activeId: '',

        addPatient: (data) => {
            set((state) => ({
                patients: [...state.patients, { ...data, id: uuidv4() }]
            }))
        },

        deletePatient: (id) => {
            set((state) => ({
                patients: state.patients.filter(pat => pat.id !== id)
            }))
        },

        getPatientById: (id) => {
            set(() => ({
                activeId: id
            }))
        },

        updatePatient: (data) => {
            set((state) => ({
                patients: state.patients.map(pat => pat.id === state.activeId ? { id: state.activeId, ...data } : pat),
                activeId: ''
            }))
        },
    }), {
        name: 'PatientStore',
    })
))