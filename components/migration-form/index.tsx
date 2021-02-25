import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@/components/button';

export default function MigrationForm() {
  const [submitting, setSubmitting] = useState(false);
  const dispatch = useDispatch();

  async function submitHandler(e) {
    setSubmitting(true);
    e.preventDefault();
    try {
      const res = await fetch('/api/migration/create-tables', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setSubmitting(false);
      const json = await res.json();

      dispatch({
        type: 'MIGRATE',
        localDBState: 'empty',
      });

      if (!res.ok) throw Error(json.message);
    } catch (e) {
      throw Error(e.message);
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="my-4">
        <label htmlFor="title">
          <h3 className="font-bold">Create empty local mysql database</h3>
        </label>
      </div>
      <Button disabled={submitting} type="submit">
        {submitting ? 'Creating ...' : 'Create empty DB'}
      </Button>
    </form>
  );
}
