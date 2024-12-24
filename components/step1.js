import useFormStore from './store';

export default function Step1() {
  const { formData, setFormData } = useFormStore(); // Access global state

  return (
    <div>
      <h2>Personal Information</h2>
      <form>
        <label>
          Name:
          <input
            type="text"
            value={formData.name || ''}
            onChange={(e) => setFormData({ name: e.target.value })}
            className="block border p-2 mb-2"
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={formData.email || ''}
            onChange={(e) => setFormData({ email: e.target.value })}
            className="block border p-2"
          />
        </label>
      </form>
    </div>
  );
}
