import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@/components/button';

export default function MigrationForm() {
  const [submitting, setSubmitting] = useState(false);
  const dispatch = useDispatch();

  async function createSubmitHandler(e) {
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

  async function submitHandler(e) {
    setSubmitting(true);
    e.preventDefault();
    try {
      const res = await fetch('/api/migration/fetch-sets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setSubmitting(false);
      const json = await res.json();

      if (!res.ok) throw Error(json.message);
    } catch (e) {
      throw Error(e.message);
    }
  }

  return (
    <>
      <form onSubmit={createSubmitHandler}>
        <div className="my-4">
          <label htmlFor="title">
            <h3 className="font-bold">Create empty local mysql database</h3>
          </label>
        </div>
        <Button disabled={submitting} type="submit">
          {submitting ? 'Creating ...' : 'Create empty DB'}
        </Button>
      </form>

      <form onSubmit={submitHandler}>
        <div className="my-4">
          <label htmlFor="title">
            <h3 className="font-bold">
              Import magic the gathering sets from scryfall and import to local
              mysql database
            </h3>
          </label>
        </div>
        <Button disabled={submitting} type="submit">
          {submitting ? 'Importing ...' : 'Import macig sets'}
        </Button>
      </form>
    </>
  );
}
