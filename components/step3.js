import useFormStore from './store';

export default function Step3() {
  const { formData, setFormData } = useFormStore(); // Access global state

  return (
    <div>
      <h2>Preferences</h2>
      <label>
        Subscribe to newsletter:
        <input
          type="checkbox"
          checked={formData.newsletter || false}
          onChange={(e) => setFormData({ newsletter: e.target.checked })}
        />
      </label>
    </div>
  );
}
