import useFormStore from './store';

export default function Step2() {
  const { formData, setFormData } = useFormStore(); // Access global state

  return (
    <div>
      <h2>Address Details</h2>
      <form>
        <label>
          Street Address:
          <input
            type="text"
            value={formData.address || ''}
            onChange={(e) => setFormData({ address: e.target.value })}
            className="block border p-2 mb-2"
          />
        </label>
        <label>
          City:
          <input
            type="text"
            value={formData.city || ''}
            onChange={(e) => setFormData({ city: e.target.value })}
            className="block border p-2"
          />
        </label>
      </form>
    </div>
  );
}
