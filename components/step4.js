import useFormStore from './store';

export default function Step4() {
  const { formData } = useFormStore(); // Access global state

  return (
    <div>
      <h2>Review & Submit</h2>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
      <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">Submit</button>
    </div>
  );
}
