import create from 'zustand';

export const useFormStore = create((set) => ({
  formData: {},
  updateFormData: (step, data) =>
    set((state) => ({
      formData: { ...state.formData, [step]: data },
    })),
}));
